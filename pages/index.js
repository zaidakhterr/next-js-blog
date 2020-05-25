import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Zaid<span role="emoji">😎</span>. A Web Developer<span role="emoji">🚀</span> and passionate coder
          <span role="emoji">💻</span>. I code in React and Node. Check out my{" "}
          <a href="https://github.com/zaidakhterr">Github Profile</a>.
        </p>
      </section>
    </Layout>
  );
}
