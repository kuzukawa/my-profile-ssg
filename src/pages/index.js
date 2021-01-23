import * as React from "react"
import { Link } from "gatsby"

// 1件のpostを表示するためのコンポーネント
const PostItem = (props) => {
  const { title, link, pubData } = props.post;
  return (
    <li>
      <a href={link}>
        <small>{pubData}</small> {title}
      </a>
    </li>
  );
};

const IndexPage = (props) => {
  return (
    <ul>
      {props.data.allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} key={post.link} />;
      })}
    </ul>
  );
}

export const query = graphql`
  query IndexPageQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate
      }
    }  
  }
`;
export default IndexPage
