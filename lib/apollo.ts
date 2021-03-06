import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
    uri: process.env.GRAPHQL_URI,
    cache: new InMemoryCache()
})

export default apolloClient