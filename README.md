# React + Vite 约定式路由

页面级组件统一放到`pages`目录下，必须有个`index.tsx`文件。也支持嵌套路由和动态路由。例如：

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

这样就可以访问`/about`和`/home`了。
