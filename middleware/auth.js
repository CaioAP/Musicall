const authentication = async ($axios, $cookiz, route, store, session) => {
  const accessToken = $cookiz.get('ACCESS_TOKEN')

  try {
    await $axios.get('/auth/authenticate', {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
  } catch (error) {
    store.dispatch('auth/signout', route.path)
    return {
      authenticated: false,
      redirectPath: '/',
    }
  }

  return {
    authenticated: true,
  }
}

const authorization = (route, session) => {
  let authorized = false

  if (typeof session === 'string') session = JSON.parse(session)

  route.meta.forEach((meta) => {
    if (typeof meta.role === 'undefined' || meta.role.includes(session.role))
      authorized = true
  })

  return authorized
}

const isNotFound = (route) => {
  return !route.matched.length
}

const isPublic = (route) => {
  let isPublic = false
  route.meta.forEach((meta) => {
    if (typeof meta.role === 'undefined' || meta.public) isPublic = true
  })

  return isPublic
}

export default async function ({ $axios, $cookiz, route, store, redirect }) {
  if (isPublic(route)) return

  const session = $cookiz.get('SESSION')
  const { authenticated, redirectPath } = await authentication(
    $axios,
    $cookiz,
    route,
    store,
    session,
  )

  let authorized = false
  if (authenticated) authorized = authorization(route, session)

  let notFound = false
  if (!authorized) notFound = isNotFound(route)
  if (notFound) return redirect('/error/404')

  if (authenticated && !authorized) return redirect('/error/401')
  if (redirectPath) return redirect(redirectPath)
}
