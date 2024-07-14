import Navbar from "components/navbar";
import MobileBar from "components/mobileBar";

const Layout = ({ children, style='' }) => {
  return (
    <div className="container mx-auto xs:w-screen">
      <header className="hidden lg:block sm:fixed top-0 right-0 z-40 bg-white ">
        <Navbar />
      </header>
      <main className={` ${style}`}>{children}</main>
      <MobileBar />
    </div>
  );
};

export default Layout;
