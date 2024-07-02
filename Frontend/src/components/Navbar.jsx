import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";

function Navbar() {
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_area}>
          <div className={styles.navbar_container}>
            <nav className={styles.navbar}>
              <Link to="/">
                <h1>BuyMyTime</h1>
              </Link>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <li>Find Talent</li>
                <li>Available Companies</li>
              </ul>
              <div className={styles.nav_btn_container}>
                <Link to="/login">
                  <button className={styles.nav_btn}>Login</button>
                </Link>
                <Link to="/signup">
                  <button className={styles.nav_btn}>Signup</button>
                </Link>
              </div>
              <div className={styles.menu_btn}>
                <Hamburger size={30} color="#3572ef" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
