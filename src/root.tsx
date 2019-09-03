import * as React from "react";

import { Layout } from "antd"; // NOT WORKING
// WORKING import Layout from "antd/es/layout";

const { Sider } = Layout;

const Root = () => {
  return (
    <Layout>
      <Layout></Layout>
    </Layout>
  );
};

export default Root;
