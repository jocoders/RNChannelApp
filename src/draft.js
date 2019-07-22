import { createUploadLink } from 'apollo-upload-client'
const getClient = ({ userStore: { token, refreshToken: refresh_token }, lang }, dispatch) => {
  const locale = lang || 'en'

  const uploadLink = createUploadLink({
    uri: 'http://localhost:4000'
  })

  const client = new ApolloClient({
    link: ApolloLink.from([getTokensMiddleware(token, refresh_token, locale, dispatch), uploadLink]),
    cache: new InMemoryCache()
  })

  return client
}

const getTokensMiddleware = (token, refresh_token, locale, dispatch) => {
  return setContext(async (req, { headers, ...others }) => {
    if (!token || !refresh_token) return {}
    var decoded = jwtDecode(token)
    const isExpired = decoded.exp <= Date.now() / 1000 + 120
    var decodedRefresh = jwtDecode(refresh_token)
    const isRefreshJWTExpired = decodedRefresh.exp <= Date.now() / 1000
    if (isRefreshJWTExpired) return {}
    if (!isExpired) {
      return {
        ...others,
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
          locale
        }
      }
    }
    return new Promise((success, fail) => {
      refreshToken(refresh_token)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            fail(response)
          }
        })
        .then(json => {
          const { token } = json.data.refreshToken
          dispatch({ type: 'login', payload: json.data.refreshToken })
          success({
            ...others,
            headers: {
              ...headers,
              Authorization: token ? `Bearer ${token}` : '',
              locale
            }
          })
        })
    })
  })
}
const refreshToken = refreshToken => {
  const data = {
    operation: 'RefreshTokenMutation',
    query:
      'mutation RefreshTokenMutation($email: String!, $refreshToken: String!) {  refreshToken(email: $email, refreshToken: $refreshToken) {    token    refreshToken    user {      id      email      username      displayname      role {        title        permissions        __typename      }      __typename    }    __typename  }}',
    variables: { email: 'admin_email', refreshToken: refreshToken }
  }
  return fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })
}
