import styles from "../styles/section1.module.css";
import wordImage from "../assets/worldimage.webp";

function Section1() {
  return (
    <>
      <section className={styles.page_banner_area}>
        <div className={styles.page_banner}>
          <img
            className={styles.home_section_image}
            src={wordImage}
            draggable={false}
            alt="World_image"
          />
          <div className={styles.text_container}>
            <h1>Find the right freelance service, right away</h1>
            <p>
              Get results from skilled freelancers from all over the world, for
              every task, at any price point.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
