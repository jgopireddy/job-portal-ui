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
            We collect information you provide directly, such as your name, email address,
            resume, and job preferences when you create an account or apply for jobs. We
            also collect usage data to improve the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">Account Management — </span>
              <span className="text-gray-600">
                To create and maintain your account, authenticate your identity, and
                personalise your experience on JobPortal.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Job Matching — </span>
              <span className="text-gray-600">
                To connect job seekers with relevant opportunities and help employers find
                qualified candidates.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Communications — </span>
              <span className="text-gray-600">
                To send you application updates, job alerts, and important platform
                notices. You may opt out of marketing emails at any time.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal data. We share information only with employers
            when you apply for a job, with service providers who help us operate the
            platform, and when required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You may request access to, correction of, or deletion of your personal data
            at any time by contacting us. You may also withdraw consent for data
            processing where consent is the legal basis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please{" "}
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
