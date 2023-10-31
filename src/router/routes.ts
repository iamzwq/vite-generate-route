import { set } from "lodash-es";
import { RouteObject } from "react-router-dom";
import { wrapSuspense } from "./helper";

export const generatePathConfig = () => {
  const modules = import.meta.glob([
    "/src/pages/**/index.tsx",
    "!**/(login|not-found)/**.tsx",
  ]);

  const pathConfig = {};
  Object.keys(modules).forEach(filePath => {
    const routePath = filePath
      .replace("/src/pages/", "")
      .replace(/.tsx$/, "")
      // 转换动态路由 [id] => :id
      .replace(/\[([\w-]+)]/, ":$1")
      .split("/");
    // 使用 lodash.set 合并为一个对象
    set(pathConfig, routePath, modules[filePath]);
  });

  console.log("generatePathConfig", pathConfig);
  return pathConfig;
};

export const mapPathConfigToRoute = (
  pathConfig: Record<string, any>
): RouteObject[] => {
  return Object.entries(pathConfig).map(([routePath, child]) => {
    // index 表示当前页面，如果存在rest有key表示有子页面，进行递归
    const { index, ...rest } = child;
    return {
      path: routePath,
      element: wrapSuspense(index),
      children: mapPathConfigToRoute(rest),
    };
  });
};

export const routeConfig = mapPathConfigToRoute(generatePathConfig());

console.log("routeConfig", routeConfig);
