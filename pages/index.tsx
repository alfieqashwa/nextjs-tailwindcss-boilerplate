import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS + Tailwind + Prisma + TypeScript</title>
      </Head>

      <main>
        <h1 className='text-4xl text-center text-'>
          Welcome to NextJS with Tailwind 2.0 and Prisma 2 and ofcourse,
          TypeScript 4
        </h1>
      </main>
    </div>
  );
}
