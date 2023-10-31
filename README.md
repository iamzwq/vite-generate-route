# React + Vite 约定式路由

页面级组件统一放到`pages`目录下。

比如通过`/home`去访问home页面，则新建`/pages/home/index.tsx`。

也支持嵌套路由和动态路由。目录结构实例如下：

```
pages
├── about
├────├── [id]
├────├────└── index.tsx
├────├── about-sub
├────├────└── index.tsx
├────└── index.tsx
├── home
└────└── index.tsx
```

这样就可以访问`/home`、`/about`、`/about/1`和`/about/about-sub`了。
