export default function ({ $cookiz, store }) {
  let session = $cookiz.get('SESSION')
  const storeSession = store.state.auth.session

  if (typeof session === 'string') {
    session = JSON.parse(session)
  }

  if (!storeSession && session) store.dispatch('auth/setSession', session)
}
