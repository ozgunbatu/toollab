import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                TL
              </div>
              <span className="text-xl font-bold text-gray-900">ToolLab</span>
            </div>
            <p className="text-gray-600 text-sm">
              Professional online tools for developers, designers, and creators. All free, no signup required.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/json-formatter" className="text-gray-600 hover:text-primary-600 transition-colors">JSON Formatter</Link></li>
              <li><Link href="/tools/base64" className="text-gray-600 hover:text-primary-600 transition-colors">Base64 Encoder</Link></li>
              <li><Link href="/tools/password-generator" className="text-gray-600 hover:text-primary-600 transition-colors">Password Generator</Link></li>
              <li><Link href="/tools/color-picker" className="text-gray-600 hover:text-primary-600 transition-colors">Color Picker</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Other Projects</h3>
            <ul className="space-y-2">
              <li><a href="https://unipuan.com" className="text-gray-600 hover:text-primary-600 transition-colors">UniPuan - University Exam Calculator</a></li>
              <li><a href="https://lisepuan.com" className="text-gray-600 hover:text-primary-600 transition-colors">LisePuan - High School Placement</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} ToolLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
