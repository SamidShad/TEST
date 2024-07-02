import { useState } from "react";
import styles from "../styles/signlog.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  function handelInput(e) {
    const { name, value } = e.target;
    setAuthDetails({
      ...authDetails,
      [name]: value,
    });
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.card_area}>
          <div className={styles.card}>
            <div className={styles.card_header}>
              <h1>BuyMyTime</h1>
            </div>
            <div className={styles.card_body}>
              <input
                value={authDetails.email}
                onChange={handelInput}
                type="email"
                name="email"
                placeholder="email "
              />
              <input
                value={authDetails.password}
                onChange={handelInput}
                type="password"
                name="password"
                placeholder="password "
              />
              <div className={styles.card_btn_area}>
                <button className={styles.card_btn}>Login</button>
              </div>
            </div>
            <div className={styles.card_footer}>
              <p>
                Don't have an account ?
                <Link to="/signup">
                  <span> Signup</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
