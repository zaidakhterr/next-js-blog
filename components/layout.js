import Head from "next/head";

import styles from "./layout.module.scss";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
