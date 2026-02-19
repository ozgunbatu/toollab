import Link from 'next/link';

const blogPosts = [
  {
    id: 'json-guide-2024',
    title: 'Complete Guide to JSON in 2024',
    excerpt: 'Everything you need to know about JSON format, validation, and best practices.',
    date: '2024-02-15',
    category: 'Development'
  },
  {
    id: 'base64-encoding-explained',
    title: 'Base64 Encoding Explained',
    excerpt: 'Understanding how Base64 encoding works and when to use it.',
    date: '2024-02-10',
    category: 'Web Development'
  },
  {
    id: 'password-security-2024',
    title: 'Password Security Best Practices 2024',
    excerpt: 'How to create and manage secure passwords in the modern web.',
    date: '2024-02-05',
    category: 'Security'
  },
  {
    id: 'developer-tools-productivity',
    title: '10 Developer Tools to Boost Productivity',
    excerpt: 'Essential online tools every developer should know about.',
    date: '2024-01-28',
    category: 'Productivity'
  },
  {
    id: 'regex-tutorial',
    title: 'Regular Expressions Tutorial',
    excerpt: 'Learn regex from basics to advanced patterns with practical examples.',
    date: '2024-01-20',
    category: 'Development'
  },
  {
    id: 'web-development-tools',
    title: 'Must-Have Web Development Tools',
    excerpt: 'Free online tools that make web development easier and faster.',
    date: '2024-01-15',
    category: 'Web Development'
  },
  {
    id: 'color-theory-design',
    title: 'Color Theory for Developers',
    excerpt: 'Understanding colors, gradients, and palettes for better UIs.',
    date: '2024-01-10',
    category: 'Design'
  },
  {
    id: 'api-testing-tools',
    title: 'Best Tools for API Testing',
    excerpt: 'Essential tools and techniques for testing REST APIs effectively.',
    date: '2024-01-05',
    category: 'Testing'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Tips, tutorials, and insights about developer tools and web development.
        </p>

        <div className="space-y-6">
          {blogPosts.map(post => (
            <article key={post.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    Read More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
