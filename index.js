const paths = [
  { path: '/', component: 'index' },
  { path: '/about', component: 'about' },
  { path: '/contact', component: 'contact' },
  { path: '/blog', component: 'blog' },
  { path: '/blog/hello-world', component: 'blog-post' },
  { path: '/blog/test', component: 'blog-post-edit' },
  { path: '/blog/another', component: 'blog-post-edit-preview' },
  { path: '/blog/goodbye', component: 'blog-post-edit-preview-publish' },
  { path: '/blog/goodbye', component: 'blog-post-edit' },
]

// Recursive function to build an object of routes with
// all of the nested paths stored as an array of children
const buildRoutes = (paths, parentPath = '') => {
  return paths.reduce((routes, path) => {
    const { path: routePath, component } = path
    const fullPath = parentPath ? `${parentPath}/${routePath}` : routePath
    const route = {
      path: fullPath,
      component,
      children: [],
    }
    const routeParts = fullPath.split('/')
    const isNested = routeParts.length > 2
    if (isNested) {
      const parentRoute = routeParts.slice(0, -1).join('/')
      if (!routes[parentRoute]) {
        routes[parentRoute] = {
          path: parentRoute,
          component: 'blog',
          children: [],
        }
      }

      routes[parentRoute].children.push(route)
    }
    else {
      routes[fullPath] = route
    }
    return routes
  }, {})
}

// Turn the paths into a tree of routes and nested routes
// const routes = paths.reduce((routes, path) => {
//   const { path: routePath, component } = path
//   const route = {
//     path: routePath,
//     component,
//   }

//   const routeParts = routePath.split('/')
//   console.log(routePath, routeParts, routeParts.slice(0, -1))
//   const parentRoute = routeParts.slice(0, -1).reduce((parentRoute, routePart) => {
//     console.log(parentRoute, routePart)
//     if (!parentRoute.routes)
//       parentRoute.routes = []

//     const childRoute = parentRoute.routes.find(childRoute => childRoute.path === routePart)
//     if (!childRoute) {
//       parentRoute.routes.push({
//         path: routePart,
//         component,
//       })
//     }
//     return parentRoute.routes.find(childRoute => childRoute.path === routePart)
//   }, routes)
//   if (parentRoute.routes) parentRoute.routes.push(route)
//   return routes
// }, {})

console.log(JSON.stringify(buildRoutes(paths), null, 2))
