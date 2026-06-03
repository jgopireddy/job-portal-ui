import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">
        <Link
          to="/"
          className="text-sm text-primary-600 hover:text-primary-700 mb-6 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">What Are Cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files placed on your device when you visit our site. They
            help us remember your preferences, keep you signed in, and understand how you use
            JobPortal so we can improve your experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Types of Cookies We Use</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">Essential Cookies — </span>
              <span className="text-gray-600">
                Required for core functionality such as authentication and session management.
                These cannot be disabled.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Preference Cookies — </span>
              <span className="text-gray-600">
                Remember your settings (e.g. theme, saved searches) so you don&apos;t have to
                re-enter them each visit.
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Analytics Cookies — </span>
              <span className="text-gray-600">
                Help us understand which pages are visited most and how users navigate the
                site, so we can improve it over time.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Managing Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            You can control or delete cookies through your browser settings at any time.
            Disabling essential cookies may prevent some features from working correctly.
            For more details, refer to your browser&apos;s help documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about our use of cookies, please{" "}
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

export { CookiePolicy };
