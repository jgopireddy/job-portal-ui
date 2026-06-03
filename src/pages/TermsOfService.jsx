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
            If you do not agree to these terms, please do not use the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Use of the Platform</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">Job Seekers — </span>
              <span className="text-gray-600">
                You may browse job listings, apply to positions, and manage your profile.
                You are responsible for the accuracy of the information you provide.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Employers — </span>
              <span className="text-gray-600">
                You may post job listings and review applicants. Job listings must be for
                genuine employment opportunities and must comply with applicable employment laws.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Prohibited Conduct — </span>
              <span className="text-gray-600">
                You may not use the platform for fraudulent purposes, post misleading content,
                or attempt to gain unauthorised access to other users&apos; accounts.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on JobPortal, including text, graphics, and logos, is the property of
            JobPortal or its content suppliers. You may not reproduce or distribute any content
            without prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            JobPortal is provided on an &quot;as is&quot; basis. We do not guarantee the accuracy
            of job listings or the suitability of any candidate. To the fullest extent permitted
            by law, JobPortal shall not be liable for any indirect or consequential losses
            arising from your use of the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms of Service from time to time. Continued use of the
            platform after changes are posted constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about these terms, please{" "}
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
