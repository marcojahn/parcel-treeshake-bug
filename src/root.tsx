import * as React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

const Root = () => {
  return (
    <Layout>
      <Sider>
        <nav></nav>
      </Sider>
      <Layout></Layout>
    </Layout>
  );
};

export default Root;
