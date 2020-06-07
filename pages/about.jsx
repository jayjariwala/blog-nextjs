import Layout from "../components/Layout";
import React, { Component } from "react";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://api.github.com/users/jayjariwala");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Jay Jariwala's github" height="200px" />
      </Layout>
    );
  }
}
