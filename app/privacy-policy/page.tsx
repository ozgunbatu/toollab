export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">Last updated: February 18, 2024</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Privacy Matters</h2>
          <p className="text-gray-700 mb-4">
            ToolLab is committed to protecting your privacy. This Privacy Policy explains 
            how we handle your information when you use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Processing</h2>
          <p className="text-gray-700 mb-4">
            All tools on ToolLab process data entirely in your browser. This means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Your data never leaves your device</li>
            <li>We do not store or log any of your input data</li>
            <li>All processing happens client-side using JavaScript</li>
            <li>No data is sent to our servers for processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Analytics</h2>
          <p className="text-gray-700 mb-4">
            We use Google Analytics to understand how visitors use our site. This helps 
            us improve our services. Google Analytics collects anonymous usage data such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Pages visited</li>
            <li>Time spent on site</li>
            <li>Browser type and version</li>
            <li>General location (country/city level)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use minimal cookies for essential website functionality and analytics. 
            You can disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our website uses the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Google Analytics for usage statistics</li>
            <li>Google AdSense for advertisements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@toollab.dev" className="text-primary-600 hover:text-primary-700">
              privacy@toollab.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
