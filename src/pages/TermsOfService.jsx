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
            By accessing or using JobPortal, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Use of the Platform</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>You must be at least 18 years old to create an account.</li>
            <li>You are responsible for maintaining the security of your credentials.</li>
            <li>Job postings must be for genuine, legal employment opportunities.</li>
            <li>You may not use the platform for spam, harassment, or unlawful purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content, trademarks, and design elements on JobPortal are the property of
            JobPortal or its licensors. You may not reproduce or distribute them without
            written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            JobPortal provides the platform &quot;as is&quot; and makes no guarantees about
            job placement or hiring outcomes. We are not liable for any indirect or
            consequential damages arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about these terms? Please{" "}
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
