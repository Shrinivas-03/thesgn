import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/app/components/PortableTextComponents";
import InPagePushAd from "@/app/components/InPagePushAd";

// -------------------------------------------------
// STEP 4: ADD SEO METADATA
// -------------------------------------------------
export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params);

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      "mainImageUrl": mainImage.asset->url,
      seo {
        metaTitle,
        metaDescription,
        keywords,
        "ogImageUrl": ogImage.asset->url
      }
    }
  `;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      title: "Post Not Found — thesgn",
      description: "This blog post does not exist.",
      robots: { index: false },
    };
  }

  return {
    title: post.seo?.metaTitle || `${post.title} — thesgn`,
    description: post.seo?.metaDescription || post.excerpt || "",
    keywords: post.seo?.keywords || [],
    robots: { index: true, follow: true },

    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      url: `https://www.thesgn.blog/blog/${post.slug}`,
      siteName: "thesgn",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.seo?.ogImageUrl || post.mainImageUrl || "/default-og.png",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: [post.seo?.ogImageUrl || post.mainImageUrl || "/default-og.png"],
    },

    alternates: {
      canonical: `https://www.thesgn.blog/blog/${post.slug}`,
    },
  };
}

// -------------------------------------------------
// STATIC PARAMS (SSG)
// -------------------------------------------------
export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "post" && defined(slug.current)][].slug.current
  `);

  return slugs.map((slug) => ({ slug }));
}

// -------------------------------------------------
// BLOG POST PAGE + FIXED INLINE IMAGES
// -------------------------------------------------
export default async function BlogPostPage({ params }) {
  const { slug } = await Promise.resolve(params);

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      seo {
        metaDescription,
        "ogImageUrl": ogImage.asset->url
      },
      body[]{
        ...,
        _type == "image" => {
          ...,
          "url": asset->url
        }
      }
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

      {/* ⭐ In-Page Push Ad (before content) */}
      <InPagePushAd />

      {/* ⭐ Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.thesgn.blog",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.thesgn.blog/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.thesgn.blog/blog/${slug}`,
              },
            ],
          }),
        }}
      />

      <PortableText value={post.body} components={PortableTextComponents} />

      {/* ⭐ In-Page Push Ad (after content) */}
      <InPagePushAd />
    </article>
  );
}
