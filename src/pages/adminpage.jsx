import React from "react";
import CategoryForm from "components/categoryForm";
import Layout from "layout/layout";
import CategoryList from "components/categoryList";

const Adminpage = () => {
  return (
    <Layout style="items-center flex flex-col w-screen">
      <CategoryList />
      <CategoryForm />
    </Layout>
  );
};

export default Adminpage;
