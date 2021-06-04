export function globalAuthGuard(from, to, next) {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log(isAuthenticated);

  console.log(from.meta.authRequired);
  console.log(from);
  if (from.meta.authRequired && !isAuthenticated) {
    next("/login");
  }
  if (from.meta.guestRequired && isAuthenticated) {
    next("/");
  }

  next();
}
