import { client } from "@/lib/sanity";

export default async function PopularTags() {
  // Fetch all category titles used in blog posts
  const tags = await client.fetch(`
    *[_type == "post"]{
      categories[]->{
        title
      }
    }
  `);

  // Flatten + filter unique + remove empty tags
  const allTags = [
    ...new Set(
      tags
        .flatMap((post) =>
          post.categories?.map((c) => c.title.toLowerCase().trim()),
        )
        .filter(Boolean),
    ),
  ].slice(0, 10); // Limit to 10 popular tags

  return (
    <section className="w-full py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Tags</h2>

        <div className="flex flex-wrap gap-3">
          {allTags.length === 0 && (
            <p className="text-gray-400">No tags found.</p>
          )}

          {allTags.map((tag) => (
            <span
              key={tag}
              className="
                px-4 py-2 bg-slate-800/60 hover:bg-cyan-600/70 text-gray-300 hover:text-white
                rounded-full text-sm cursor-pointer transition-all shadow-sm
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
