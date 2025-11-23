import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "thesgn - Blog's ",
  description: "Read articles on software development, AI, cloud, and more.",
};

async function getPosts(search) {
  const query = search
    ? `*[_type == "post" && (
        title match "${search}*" ||
        body[].children[].text match "${search}*" ||
        categories[]->title match "${search}*"
      )]{
        title,
        "slug": slug.current,
        publishedAt,
        body,
        "imageUrl": mainImage.asset->url,
        categories[]->{title}
      } | order(publishedAt desc)`
    : `*[_type == "post"]{
        title,
        "slug": slug.current,
        publishedAt,
        body,
        "imageUrl": mainImage.asset->url,
        categories[]->{title}
      } | order(publishedAt desc)`;

  return await client.fetch(query);
}

export default async function BlogPage({ searchParams }) {
  // 🔥 FIX: unwrap Promise for Turbopack
  const resolvedParams = await Promise.resolve(searchParams);
  const search = resolvedParams.search || "";

  const posts = await getPosts(search);

  return (
    <div className="min-h-screen py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Blog {search && `— Searching for "${search}"`}
        </h1>

        {posts.length === 0 && (
          <p className="text-gray-400 text-lg">
            No blogs found for <strong>{search}</strong>.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl
                         hover:scale-[1.03] hover:shadow-cyan-500/20 transition-all"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-2xl font-semibold mb-2 text-cyan-400">
                {post.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((cat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-slate-700 text-gray-200 rounded-full border border-slate-600"
                  >
                    #{cat.title}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 line-clamp-3">
                {post.body?.[0]?.children?.[0]?.text ||
                  "No description available."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
