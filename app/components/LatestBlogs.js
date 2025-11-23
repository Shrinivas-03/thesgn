import Link from "next/link";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

export default async function LatestBlogs() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...5] {
      title,
      "slug": slug.current,
      publishedAt,
      description,
      mainImage,
      categories[]->{
        title
      }
    }
  `);

  return (
    <section className="w-full py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Latest Blogs</h2>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                block p-6 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20
              "
            >
              {/* Blog Thumbnail */}
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(800).height(400).url()}
                  alt={post.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />
              )}

              {/* Date */}
              <p className="text-sm text-gray-400 mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white">
                {post.title}
              </h3>

              {/* Tags / Categories */}
              {post.categories?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.map((cat) => (
                    <span
                      key={cat.title}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-slate-700 text-gray-200
                        hover:bg-cyan-600 hover:text-white transition
                      "
                    >
                      #{cat.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-relaxed">
                {post.description}
              </p>

              {/* CTA */}
              <div className="mt-4">
                <span className="text-cyan-400 font-medium group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
