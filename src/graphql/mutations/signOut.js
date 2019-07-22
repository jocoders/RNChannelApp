import gql from 'graphql-tag'

export default gql`
  mutation SignOut($refreshToken: String!, $refreshTokenId: String!) {
    signOut(refreshToken: $refreshToken, refreshTokenId: $refreshTokenId) {
      user {
        name
        phone
      }
      signedOut
    }
  }
`
