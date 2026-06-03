import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">
        <Link
          to="/"
          className="text-sm text-primary-600 hover:text-primary-700 mb-6 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information you provide directly — such as your name, email address,
            and resume when you register or apply for jobs. We also collect usage data (pages
            visited, search queries) to improve our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>To create and manage your account</li>
            <li>To match you with relevant job listings or candidates</li>
            <li>To send important service notifications</li>
            <li>To improve and personalize your experience on JobPortal</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal data. Job seeker profiles are shared with employers
            only when you apply for a position. We may share anonymized, aggregated data
            for analytics purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, correct, or delete your personal data at any time
            through your account settings or by contacting us directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related enquiries, please{" "}
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

export { PrivacyPolicy };
