import gql from 'graphql-tag'

export default gql`
  mutation UpdateTokens($refreshToken: String!, $refreshTokenId: String!) {
    updateTokens(refreshToken: $refreshToken, refreshTokenId: $refreshTokenId) {
      user {
        name
        phone
      }
      accessToken
      refreshToken
    }
  }
`
