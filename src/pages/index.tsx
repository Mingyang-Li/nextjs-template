import Button from '@/components/Button';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>IndexPage</div>
        <Button />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;
