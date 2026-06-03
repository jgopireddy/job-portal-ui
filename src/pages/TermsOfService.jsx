import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">
        <Link
          to="/"
          className="text-sm text-primary-600 hover:text-primary-700 mb-6 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using JobPortal, you agree to be bound by these Terms of
            Service. If you do not agree, please do not use the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Use of the Platform</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">Eligibility — </span>
              <span className="text-gray-600">
                You must be at least 18 years old to create an account and use JobPortal
                services.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Account Responsibility — </span>
              <span className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account
                credentials and for all activity that occurs under your account.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Prohibited Conduct — </span>
              <span className="text-gray-600">
                You may not post false or misleading job listings, scrape platform data,
                or use the service for any unlawful purpose.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on JobPortal — including text, graphics, and software — is owned
            by or licensed to JobPortal. You may not reproduce or distribute it without
            written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            JobPortal is provided on an &ldquo;as is&rdquo; basis. We do not guarantee
            employment outcomes and are not liable for any indirect or consequential
            damages arising from use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about these Terms, please{" "}
            <Link to="/contact" className="text-primary-600 hover:underline">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export { TermsOfService };
