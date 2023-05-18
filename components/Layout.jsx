import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
