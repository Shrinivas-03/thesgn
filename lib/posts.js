// lib/posts.js
import { client } from "@/sanity/lib/client";

/* ---------------------------------------
   Get ALL Posts (with SEO)
---------------------------------------- */
export async function getAllPosts() {
  const query = `
    *[_type == "post"]{
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImageUrl": mainImage.asset->url,
      categories[]->{ title },
      seo {
        metaTitle,
        metaDescription,
        keywords,
        "ogImageUrl": ogImage.asset->url
      }
    } | order(publishedAt desc)
  `;

  return await client.fetch(query);
}

/* ---------------------------------------
   Get SINGLE Post by Slug (with SEO)
---------------------------------------- */
export async function getPostBySlug(slug) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      body,
      "mainImageUrl": mainImage.asset->url,
      categories[]->{ title },
      author->{
        name,
        bio,
        "avatar": image.asset->url
      },
      seo {
        metaTitle,
        metaDescription,
        keywords,
        "ogImageUrl": ogImage.asset->url
      }
    }
  `;

  return await client.fetch(query, { slug });
}

/* ---------------------------------------
   Get ALL TAGS (from categories)
---------------------------------------- */
export async function getAllTags() {
  const query = `
    *[_type == "category"]{
      title
    }
  `;

  const categories = await client.fetch(query);
  return categories.map((c) => c.title.toLowerCase());
}
