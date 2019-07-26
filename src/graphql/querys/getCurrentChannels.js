import gql from 'graphql-tag'

export default gql`
  query {
    currentChannel @client {
      cover
      title
    }
  }
`
