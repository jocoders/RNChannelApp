import gql from 'graphql-tag'

export default gql`
  mutation SignIn($code: String!) {
    signIn(code: $code) {
      user {
        id
        email
        phone
      }
      refreshToken
      accessToken
    }
  }
`
