const seo = {
  name: "seo",
  title: "SEO Settings",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Title shown in Google search results.",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Short description for SEO (120–160 characters).",
    },
    {
      name: "ogImage",
      title: "OpenGraph Image",
      type: "image",
      options: { hotspot: true },
      description: "Image used for social media previews (1200x630).",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional SEO keywords.",
    },
  ],
};

export default seo;
