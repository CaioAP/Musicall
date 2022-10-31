export default function ({ $axios, $cookiz }) {
  $axios.onError((error) => {
    const responseError = {
      status: error.response.status,
      message:
        error.response.data.message instanceof Array
          ? error.response.data.message.join('\n').trim()
          : error.response.data.message.trim(),
    }

    throw responseError
  })

  const accessToken = $cookiz.get('ACCESS_TOKEN')
  if (accessToken) $axios.setToken(accessToken, 'Bearer')

  $axios.setHeader('Content-Type', 'application/json')
}
