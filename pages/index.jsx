import Link from "next/link";
import Layout from "../components/Layout";
const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>Go to about</a>
    </Link>
    Welcome to Home Page
  </Layout>
);

export default Index;
