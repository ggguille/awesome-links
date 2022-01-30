import { extendType, intArg, objectType, stringArg } from "nexus"
import { User } from "./User"

export const Link = objectType({
    name:'Link',
    definition(t) {
        t.string('id')
        t.string('title')
        t.string('url')
        t.string('description')
        t.string('imageUrl')
        t.string('category')
        t.list.field('users', {
            type: User,
            async resolve(parent, _args, ctx) {
                return await ctx.prisma.link.findUnique({
                    where: {
                        id: parent.id
                    }
                })
                .users()
            }
        })
    }
})

export const Edge = objectType({
    name: 'Edge',
    definition(t) {
        t.string('cursor')
        t.field('node', {
            type: Link
        })
    }
})

export const PageInfo = objectType({
    name: 'PageInfo',
    definition(t) {
        t.string('endCursor')
        t.boolean('hasNextPage')
    }
})

export const Response = objectType({
    name: 'Response',
    definition(t) {
        t.field('pageInfo', { type: PageInfo })
        t.list.field('edges', {
            type: Edge
        })
    }
})

export const LinkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.field('links', {
            type: 'Response',
            args: {
                first: intArg(),
                after: stringArg()
            },
            async resolve(_, args, ctx) {
                return {
                    edges: [
                        {
                            cursor: '',
                            node: {
                                category: "",
                                description: "",
                                id: "",
                                imageUrl: "",
                                title: "",
                                url: ""
                            }
                        }
                    ],
                    pageInfo: {
                        endCursor: '',
                        hasNextPage: false
                    }
                }
            }
        })
    }
})