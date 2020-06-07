import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Error!!">
      {statusCode
        ? `Couldn\'t load your user data: Status Code ${statusCode}`
        : `Couldn't get that page, sorry!`}
    </Layout>
  );
};

export default _error;
