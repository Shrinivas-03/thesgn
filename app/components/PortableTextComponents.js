export const PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },

  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 underline hover:text-cyan-300"
      >
        {children}
      </a>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-5 mb-3">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-gray-300 my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed my-4">{children}</p>
    ),
  },

  types: {
    // ⭐ FIXED INLINE IMAGE SUPPORT
    image: ({ value }) => (
      <img
        src={value.url}
        alt={value.alt || "Blog Image"}
        className="rounded-xl my-6"
      />
    ),

    code: ({ value }) => (
      <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm my-6 border border-slate-700">
        <code>{value.code}</code>
      </pre>
    ),
  },
};
