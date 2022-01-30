import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';

const AllLinksQuery = gql`
  query allLinksQuery($first: Int, $after: String) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          url
          description
          imageUrl
          category
        }
      }
    }
  }
`

type Link = {
  id: string
  title: string
  url: string
  description: string
  imageUrl: string
  category: string
}

type Edge = {
  cursor: string
  node: Link
}

type Response = {
  links: {
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
    }
    edges: Edge[]
  }
}

export default function Home() {

  const { loading, data, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: {
      first: 2
    }
  })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops, something went wrong {error.message}</p>

  const { 
    endCursor, 
    hasNextPage 
  } = data.links.pageInfo;

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(data as Response)?.links.edges.map(({node}) => (
            <AwesomeLink
              key={node.id}
              url={node.url}
              id={node.id}
              category={node.category}
              title={node.title}
              description={node.description}
              imageUrl={node.imageUrl}
            />
          ))}
        </div>
        {hasNextPage ? (
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded my-10'
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.links.edges = [
                    ...prevResult.links.edges,
                    ...fetchMoreResult.links.edges
                  ]
                  return fetchMoreResult
                }
              })
            }}
          >
            more
          </button>
        ) : (
          <p>You've reached the end!</p>
        )}
      </div>
    </div>
  );
}