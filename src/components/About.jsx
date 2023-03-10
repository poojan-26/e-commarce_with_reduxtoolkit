import Hero from "./Hero";

export default function About() {
  return (
    <div>
      <Hero page="About" />
      <section className="section section-center about-page">
        <div className="title">
          <h2>
            <span>/</span> our history
          </h2>
        </div>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </section>
    </div>
  );
}
