import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const firstPost = () => {
  return (
    <Layout title="First Post">
      <h1>First Post</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor exercitationem maxime, consectetur laborum quos
        enim assumenda? Fugiat labore magnam voluptates.
      </p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
};

export default firstPost;
