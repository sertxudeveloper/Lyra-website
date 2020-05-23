export default ({router}) => {
  router.addRoutes([
    {path: '/en/', redirect: '/en/v1.x/'},
    {path: '/es/', redirect: '/es/v1.x/'},

    {path: '/en/v1.x/', redirect: '/en/v1.x/welcome.html'},
    {path: '/es/v1.x/', redirect: '/es/v1.x/welcome.html'},
  ]);

  router.beforeResolve((to, from, next) => {
    let fromRoute = from.path.split('/');
    fromRoute.shift(); // Remove fist space
    let fromLang = fromRoute.shift(); // Remove language
    let fromVersion = fromRoute.shift(); // Remove version

    let toRoute = to.path.split('/');
    toRoute.shift(); // Remove fist space
    let toLang = toRoute.shift(); // Remove language
    let toVersion = toRoute.shift(); // Remove version

    if (fromLang && toLang && fromVersion && toVersion) {
      fromRoute = fromRoute.join('/');
      toRoute = toRoute.join('/');

      if (fromRoute !== toRoute && (fromLang !== toLang || fromVersion !== toVersion)) {

        if (fromLang !== toLang) {
          // Language changed
          let newRoute = `/${toLang}/${fromVersion}/` + fromRoute;
          return next(newRoute);
        } else if (fromVersion !== toVersion) {
          // Version changed
          let newRoute = `/${fromLang}/${toVersion}/` + fromRoute;
          return next(newRoute);
        }
      }
    }

    next();
  });
}
