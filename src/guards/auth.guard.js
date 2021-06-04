export function globalAuthGuard(from, to, next) {
  const $isAuthenticated = !!localStorage.getItem("token");

  if (to.meta.authRequired && !$isAuthenticated) {
    next("/login");
  }
  if (to.meta.guestRequired && $isAuthenticated) {
    next("/");
  }

  next();
}
