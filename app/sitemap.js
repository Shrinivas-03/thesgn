import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const baseUrl = "https://www.thesgn.blog";

  // Fetch all post slugs
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/are-we-in-an-ai-bubble-nov-2025`,
      lastModified: new Date(),
    },
  ];
}
