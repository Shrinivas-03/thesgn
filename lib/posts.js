import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8",
    );

    const { data, content } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(".mdx", ""),
      readingTime: readingTime(content).text, // ⭐ add reading time
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostFrontmatter(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  return {
    ...data,
    readingTime: readingTime(content).text,
  };
}

export function getAllTags() {
  const posts = getAllPosts();

  const tagSet = new Set();

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagSet.add(tag));
    }
  });

  return Array.from(tagSet);
}
