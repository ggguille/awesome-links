# Awesome links

Project to learn Prisma ORM, using Nextjs, TailwindCSS and PostgreSQL PostgreSQL

## Resources

[Youtube playlist](https://www.youtube.com/playlist?list=PLn2e1F9Rfr6k6MwzS-p9FGK1NDBxxwLPk)

### Blog posts

[Part 1](https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw)
[Part 2](https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155)

### Repository

[Github repo](https://github.com/m-abdelwahab/awesome-links)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma

Initialize Prisma

```bash
npx prisma init
```

Sync Database Schema

```bash
npx prisma db push
```

Seeding Database

```bash
npx prisma db seed --preview-feature
```

> Note: we need to add **ts-node** dependency and **"ts-node": "ts-node --compiler-options '{\"module\":\"CommonJS\"}'"** script in package.json

Open Prisma Studio

```bash
npx prisma studio
```

## Postgre SQL

Using from docker image <https://hub.docker.com/_/postgres> and docker compose file

```bash
docker pull postgres
# into project folder
docker run --name awesome-links_postgres --env-file ./.env -p 5432:5432 -d postgres
# or
docker-compose up
```

## Apollo

[Apollo Studio](https://studio.apollographql.com/)

## Nexus

[Nexusjs](https://nexusjs.org/)