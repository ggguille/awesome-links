import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
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

type DataLinks = {
  links: Link[]
}

export default function Home() {

  const { data, error, loading } = useQuery(AllLinksQuery)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops, something went wrong {error.message}</p>

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(data as DataLinks)?.links.map((link: Link) => (
            <AwesomeLink
              key={link.id}
              url={link.url}
              id={link.id}
              category={link.category}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}