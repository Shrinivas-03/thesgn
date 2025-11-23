import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "post" && defined(slug.current)][].slug.current
  `);

  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  // Turbopack requires awaiting params
  const { slug } = await params;

  if (!slug) {
    return <p className="text-gray-400 text-center py-20">Invalid slug.</p>;
  }

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
      "imageUrl": mainImage.asset->url
    }
  `;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p className="text-gray-400 text-center py-20">Post not found.</p>;
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16 prose prose-invert">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-400 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="rounded-xl mb-10"
        />
      )}

      <PortableText value={post.body} />
    </article>
  );
}
