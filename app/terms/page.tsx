export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">Last updated: February 18, 2024</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using ToolLab, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily access the tools on ToolLab for personal, 
            non-commercial use only. This license shall automatically terminate if you 
            violate any of these restrictions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The tools on ToolLab are provided "as is". We make no warranties, expressed or 
            implied, and hereby disclaim all warranties, including without limitation, 
            implied warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
          <p className="text-gray-700 mb-4">
            In no event shall ToolLab or its suppliers be liable for any damages arising 
            out of the use or inability to use the tools on ToolLab.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
          <p className="text-gray-700 mb-4">
            The tools provided on ToolLab could include technical, typographical, or 
            photographic errors. We do not warrant that any of the tools are accurate, 
            complete, or current.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Links</h2>
          <p className="text-gray-700 mb-4">
            ToolLab has not reviewed all of the sites linked to its website and is not 
            responsible for the contents of any such linked site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Modifications</h2>
          <p className="text-gray-700 mb-4">
            ToolLab may revise these terms of service at any time without notice. By using 
            this website you are agreeing to be bound by the then current version of these 
            terms of service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            Questions about the Terms of Service should be sent to us at{' '}
            <a href="mailto:legal@toollab.dev" className="text-primary-600 hover:text-primary-700">
              legal@toollab.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
