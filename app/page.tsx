import Link from 'next/link';
import { tools, categories } from '@/lib/tools';

export default function Home() {
  const popularTools = tools.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading mb-6">
            Professional Tools for Developers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            35+ free online tools for developers, designers, and content creators. 
            No signup, no limits. Just open and use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools" className="btn-primary">
              Browse All Tools
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read Our Blog
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary-600">35+</div>
              <div className="text-gray-600 mt-2">Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600 mt-2">Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">0</div>
              <div className="text-gray-600 mt-2">Ads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">∞</div>
              <div className="text-gray-600 mt-2">Usage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tools</h2>
          <p className="text-gray-600 mb-10">Most used tools by our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map(tool => (
              <Link key={tool.id} href={`/tools/${tool.id}`} className="tool-card group">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/tools" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              View All Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tool Categories</h2>
          <p className="text-gray-600 mb-10">Browse tools by category</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <div key={category.id} className="card">
                <div className="text-3xl mb-3">{category.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tools.filter(t => t.category === category.id).length} tools</p>
                <Link
                  href={`/tools?category=${category.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                >
                  Browse
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">All processing happens in your browser. No server delays, instant results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Private</h3>
              <p className="text-gray-600">Your data never leaves your device. We don't store or track anything.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Free</h3>
              <p className="text-gray-600">No premium tiers, no hidden costs. Every tool is 100% free forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to boost your productivity?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of developers using ToolLab every day.
          </p>
          <Link
            href="/tools"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
