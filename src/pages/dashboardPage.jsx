import AddPost from "components/addPost";
import MyPosts from "components/myPosts";
import Layout from "layout/layout";

const DashboardPage = () => {
  return (
    <Layout style="flex flex-col items-center">
      <AddPost />
      <MyPosts />
    </Layout>
  );
};

export default DashboardPage;
