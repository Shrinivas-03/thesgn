import Hero from "./components/Hero";
import PopularTags from "./components/PopularTags";
import LatestBlogs from "./components/LatestBlogs";
import OpenForWorkClient from "./components/OpenForWorkClient";
import Newsletter from "./components/Newsletter";

import AnimateWrapper from "./components/AnimateWrapper";

export default function Home() {
  return (
    <div className="space-y-20">
      <AnimateWrapper>
        <section data-aos="fade-up">
          <Hero />
        </section>
      </AnimateWrapper>

      <AnimateWrapper>
        <section data-aos="fade-up" data-aos-delay="100">
          <PopularTags />
        </section>
      </AnimateWrapper>

      <AnimateWrapper>
        <section data-aos="fade-up" data-aos-delay="200">
          <LatestBlogs />
        </section>
      </AnimateWrapper>

      <AnimateWrapper>
        <section data-aos="fade-up" data-aos-delay="300">
          <OpenForWorkClient />
        </section>
      </AnimateWrapper>

      <AnimateWrapper>
        <section data-aos="zoom-in" data-aos-delay="400">
          <Newsletter />
        </section>
      </AnimateWrapper>
    </div>
  );
}
