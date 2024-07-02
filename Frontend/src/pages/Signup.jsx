import { Link } from "react-router-dom";
import styles from "../styles/signlog.module.css";
import { useState } from "react";

function Signup() {
  const [authDetails, setAuthDetails] = useState({
    name: "",
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
                value={authDetails.name}
                onChange={handelInput}
                type="text"
                name="name"
                placeholder="username "
              />
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
                <button className={styles.card_btn}>Signup</button>
              </div>
            </div>
            <div className={styles.card_footer}>
              <p>
                Have an account ?
                <Link to="/login">
                  <span> Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
