const Header = () => {
    return (
      <div className="header">
        <div className="app-logo">
          <img
            className="logo"
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
            alt=""
          />
          {/* <h1 className="logo">LOGO</h1> */}
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

//   export default componentname --> syntax

export default Header;