import styles from "../styles/section3.module.css";
import { Link } from "react-router-dom";

function Section3({ img, title, cardtitle, description, style }) {
  return (
    <>
      <section className={styles.explain_section}>
        <h1>{title}</h1>
        <div className={styles.explain_area}>
          <div
            className={styles.explain_container}
            style={{ flexDirection: style }}
          >
            <img src={img} alt="image" draggable={false} />
            <div className={styles.text_container}>
              <h2>{cardtitle}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
