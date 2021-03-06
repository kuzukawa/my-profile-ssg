import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styles from "./index.module.css";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import WorkItem from "../components/WorkItem";

const IndexPage = (props) => {
  const { allFeedQiita, allWorksYaml } = props.data;
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website " />
      </Helmet>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        都内・横浜で活動しているソフトウェアエンジニアです。42才厄年。
      </p>
      <h2 className={styles.heading}>Posts</h2>
      {allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.workItems}>
        {
          allWorksYaml.nodes.map(work => {
            return <WorkItem work={work} />
          })
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate(formatString: "YYYY.MM.DD")
      }
    }
    allWorksYaml(limit: 4) {
      nodes {
        slug
        title
        description
        imageUrl
        roles
      }
    }
  }
`;

export default IndexPage;
