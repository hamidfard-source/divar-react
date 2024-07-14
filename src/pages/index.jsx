import Sidebar from "components/sidebar";``
import ListContainer from "components/listContainer";
import Layout from "src/layout/layout";

const Index = () => {
  return (
    <Layout>
      <section className="mt-2">
        <Sidebar />
        <ListContainer />
      </section>
    </Layout>
  );
};

export default Index;
