import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back To Home.</a>
        </Link>
      </h2>
      <div>
        <Image
          src="/images/profile.jpg"
          width={144}
          height={144}
          alt="Your Profile"
        />
      </div>
    </Layout>
  );
}
