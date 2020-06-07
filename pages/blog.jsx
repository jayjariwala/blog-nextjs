import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout title="myBlog">
      <ul>
        <PostLink slug="react-post" title="React"></PostLink>
        <PostLink slug="angular-post" title="Angular"></PostLink>
        <PostLink slug="vue-post" title="View"></PostLink>
      </ul>
    </Layout>
  );
}
