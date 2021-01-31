import * as React from "react"
import { Helmet } from "react-helmet";
import styles from "./about.module.css";
import Layout from "../components/Layout";

const AboutPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website " />
      </Helmet>
      <h2 className={styles.name}>@kkuzu</h2>
      <p className={styles.text}>
        都内・横浜で活動しているソフトウェアエンジニアです。42才厄年。
      </p>
    </Layout>
  );
}

export default AboutPage