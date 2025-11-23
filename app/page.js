import Hero from "./components/Hero";
import PopularTags from "./components/PopularTags";
import LatestBlogs from "./components/LatestBlogs";

import OpenForWorkClient from "./components/OpenForWorkClient";

import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularTags />
      <LatestBlogs />
      <OpenForWorkClient />

      <Newsletter />
    </div>
  );
}
