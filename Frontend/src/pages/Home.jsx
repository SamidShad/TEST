import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import graph1 from "../assets/graphic1.png";
import Section4 from "../components/Section4";

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3
        style="row"
        img={graph1}
        title="Why you need us?"
        cardtitle="We feel your pain"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium in quod distinctio sapiente dolores maxime, magnam similique tempore, ad officia! Maxime pariatur quae corporis quos atque iure quis dicta totam! Ratione, ex ut."
      />
      <Section4 />
      <Section3
        style="row-reverse"
        img={graph1}
        title="Why you need us?"
        cardtitle="We feel your pain"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium in quod distinctio sapiente dolores maxime, magnam similique tempore, ad officia! Maxime pariatur quae corporis quos atque iure quis dicta totam! Ratione, ex ut."
      />
    </>
  );
}

export default Home;
