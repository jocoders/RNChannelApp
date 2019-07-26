import gql from 'graphql-tag'

export default gql`
  query Channels {
    channels {
      id
      createdAt
      title
      cover
      topics {
        id
        title
        createdAt
      }
    }
  }
`
