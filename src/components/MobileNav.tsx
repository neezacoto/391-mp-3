import { Link } from "react-router-dom";

const MobileNav = () => {
  const accordClose = () => {
    console.log("hello");
    document.getElementById("mob-nav")!.style.display = "none"; // Hide the mobile nav menu
    document.getElementById("mob-nav-open")!.style.display = "flex"; // Show the "open" button
  };

  // Function to open the mobile navigation menu
  const accordOpen = () => {
    console.log("hello");
    document.getElementById("mob-nav")!.style.display = "flex"; // Display the mobile nav menu
    document.getElementById("mob-nav-open")!.style.display = "none"; // Hide the "open" button
  };
  return (
    <>
      <div style={{ height: "71px" }} />
      <nav className="nav-items mob" id="mob-nav">
        <ul>
          {/* <!-- Button to close the mobile navigation --> */}
          <button className="nav-button" onClick={accordClose}>
            v
          </button>
          <li>
            <Link onClick={accordClose} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={accordClose} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={accordClose} to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link onClick={accordClose} to="/employment">
              Employment
            </Link>
          </li>
          <li>
            <Link onClick={accordClose} to="/achievements">
              Achievements
            </Link>
          </li>
          <li>
            <Link onClick={accordClose} to="/documents">
              Documents
            </Link>
          </li>
        </ul>
      </nav>

      {/* <!-- Button to open the mobile navigation --> */}
      <button id="mob-nav-open" className="nav-button" onClick={accordOpen}>
        ^
      </button>
    </>
  );
};

export default MobileNav;
