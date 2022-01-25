import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
import { createContext } from '../../graphql/context'

const cors = Cors()
const apolloServer = new ApolloServer({
    typeDefs, 
    resolvers, 
    context: createContext
})
const startServer = apolloServer.start()

const handler = async (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}

export default cors(handler)

export const config = {
    api: {
        bodyParser: false
    }
}