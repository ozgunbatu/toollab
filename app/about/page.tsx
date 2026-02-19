export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-8">About ToolLab</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            ToolLab is a collection of professional online tools designed for developers, 
            designers, and content creators. All tools are free, require no signup, and 
            process everything client-side for maximum privacy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We believe powerful developer tools should be accessible to everyone. That's why 
            all our tools are completely free, work offline, and respect your privacy by 
            processing data entirely in your browser.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why ToolLab?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>100% Free:</strong> No premium tiers, no hidden costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Privacy First:</strong> All processing happens in your browser</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>No Signup:</strong> Just open and use any tool instantly</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Fast & Reliable:</strong> Optimized for speed and performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Regular Updates:</strong> New tools added frequently</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions, suggestions, or found a bug? We'd love to hear from you!
            Reach out at <a href="mailto:hello@toollab.dev" className="text-primary-600 hover:text-primary-700">hello@toollab.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}
