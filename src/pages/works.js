import * as React from "react"
import { Helmet } from "react-helmet";
import styles from "./works.module.css";
import Layout from "../components/Layout";
import WorkItem from "../components/WorkItem";

const WorksPage = (props) => {
  const { allWorksYaml } = props.data;
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website " />
      </Helmet>
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
  query allWorksQuery {
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

export default WorksPage