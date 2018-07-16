export default function (context) {
  console.log('[MIDDLEWARE] check auth')
  if (process.client) {
    context.store.dispatch('initAuth', context.req)
  }
}
