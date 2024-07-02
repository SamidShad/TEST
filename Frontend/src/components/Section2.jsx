import styles from "../styles/section2.module.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

function Section2() {
  return (
    <>
      <section className={styles.show_post_area}>
        <div className={styles.show_post_container}>
          <h1>Recent Posts</h1>

          <div className={styles.post_cards_area}>
            <div className={styles.company_post_card}>
              <div className={styles.compnay_post_card_header}>
                <div>
                  <img
                    className={styles.company_logo}
                    src="https://freelogopng.com/images/all_img/1664035778meta-icon-png.png"
                    alt="company_logo"
                  />
                  <h1>Meta</h1>
                </div>
                <span>2 days ago</span>
              </div>
              <div className={styles.company_post_card_body}>
                <h2>
                  We need a Chief Financial Officer (CFO) for our bank
                  management.
                </h2>
              </div>
              <div className={styles.company_socials_area}>
                <p>Contact us</p>
                <div className={styles.company_socials}>
                  <AiFillInstagram
                    className={styles.company_post_card_social_links}
                  />
                  <AiFillLinkedin
                    className={styles.company_post_card_social_links}
                  />
                  <BsFillSendFill
                    className={styles.company_post_card_social_links}
                  />
                </div>
              </div>
            </div>
            <div className={styles.company_post_card}>
              <div className={styles.compnay_post_card_header}>
                <div>
                  <img
                    className={styles.company_logo}
                    src="https://freelogopng.com/images/all_img/1664035778meta-icon-png.png"
                    alt="company_logo"
                  />
                  <h1>Meta</h1>
                </div>
                <span>2 days ago</span>
              </div>
              <div className={styles.company_post_card_body}>
                <h2>
                  We need a Chief Financial Officer (CFO) for our bank
                  management.
                </h2>
              </div>
              <div className={styles.company_socials_area}>
                <p>Contact us</p>
                <div className={styles.company_socials}>
                  <AiFillInstagram
                    className={styles.company_post_card_social_links}
                  />
                  <AiFillLinkedin
                    className={styles.company_post_card_social_links}
                  />
                  <BsFillSendFill
                    className={styles.company_post_card_social_links}
                  />
                </div>
              </div>
            </div>
            <div className={styles.company_post_card}>
              <div className={styles.compnay_post_card_header}>
                <div>
                  <img
                    className={styles.company_logo}
                    src="https://freelogopng.com/images/all_img/1664035778meta-icon-png.png"
                    alt="company_logo"
                  />
                  <h1>Meta</h1>
                </div>
                <span>2 days ago</span>
              </div>
              <div className={styles.company_post_card_body}>
                <h2>
                  We need a Chief Financial Officer (CFO) for our bank
                  management.
                </h2>
              </div>
              <div className={styles.company_socials_area}>
                <p>Contact us</p>
                <div className={styles.company_socials}>
                  <AiFillInstagram
                    className={styles.company_post_card_social_links}
                  />
                  <AiFillLinkedin
                    className={styles.company_post_card_social_links}
                  />
                  <BsFillSendFill
                    className={styles.company_post_card_social_links}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
