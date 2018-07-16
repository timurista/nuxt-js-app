export default function (context) {
  console.log('[MIDDLEWARE] just auth')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth');
  }
}
