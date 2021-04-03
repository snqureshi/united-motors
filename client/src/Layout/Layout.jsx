import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div
        className="layout-children"
        style={{ backgroundColor: `${props.backgroundColor}` }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
