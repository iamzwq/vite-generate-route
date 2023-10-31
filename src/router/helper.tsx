import { ComponentType, Suspense, lazy } from "react";

/**
 * 为动态 import 包裹 lazy 和 Suspense
 */
export function wrapSuspense(importer: () => Promise<{ default: ComponentType }>) {
  if (!importer) return null;

  // 使用 React.lazy 包裹 () => import() 语法
  const Component = lazy(importer);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  );
}
