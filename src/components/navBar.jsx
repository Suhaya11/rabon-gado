const Navbar = () => {
  return (
    <div className="container ">
      <header className="navbar-Green text-White ">
        <h2 className="page-title">RABON GADO </h2>
        <ul className="d-f">
          <li className="ml-sm cursor-p">
            <a href="#" className="text-White font-bold-600">
              HOME
            </a>
          </li>
          <li className="ml-sm">
            <a href="#" className="text-White font-bold-600">
              About
            </a>
          </li>
          <li className="ml-sm cursor-p">
            <a href="#" className="text-White font-bold-600">
              Contact
            </a>
          </li>
        </ul>
      </header>{" "}
    </div>
  );
};

export default Navbar;
