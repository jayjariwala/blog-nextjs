import Layout from "../components/Layout";
import { withRouter } from "next/router";
const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: "80%" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa facilis
        voluptas quod nostrum sed animi, iure laudantium dolorem quaerat
        perspiciatis nihil consequatur eveniet iste fuga, porro quis a similique
        nam!
      </p>
    </Layout>
  );
};

export default withRouter(Post);
