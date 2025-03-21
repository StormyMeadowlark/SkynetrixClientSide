import useSEO from "../hooks/useSEO";
const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy",
    description: "Learn how Skynetrix handles your data and protects your privacy.",
  });
  return (
    <main className="mx-auto px-6 py-12 bg-light-primary-bg dark:bg-dark-primary-bg text-light-text dark:text-white transition-all duration-300">
      <h1 className="text-4xl font-orbitron font-bold text-light-purple dark:text-light-teal mb-8 text-center">
        Privacy Policy
      </h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
        Your privacy matters to us. This policy outlines how we collect, use, and protect your information while you use Skynetrix.
      </p>

      <div className="space-y-10 text-lg leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal details like your name, email, phone, and billing info</li>
            <li>Business data used to customize services</li>
            <li>Usage logs and platform interactions</li>
            <li>Technical data like IP address, browser, and device type</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver and optimize services</li>
            <li>Personalize your experience</li>
            <li>Enhance platform security and fraud prevention</li>
            <li>Communicate updates, support responses, and relevant offers</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            3. Data Sharing & Disclosure
          </h2>
          <p className="mb-2">
            We never sell your personal information. However, we may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verified service providers who assist with operations</li>
            <li>Legal authorities when required to comply with the law</li>
            <li>Integration partners you’ve explicitly authorized</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            4. Data Security
          </h2>
          <p>
            We follow industry standards to safeguard your data. That said, no system is 100% secure.
            Please be mindful when sharing sensitive information online.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            5. Cookies & Tracking
          </h2>
          <p>
            Skynetrix uses cookies to personalize content and analyze usage. You can modify your cookie
            preferences in your browser settings at any time.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            6. Your Rights & Choices
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data</li>
            <li>Ask us to correct or delete your information</li>
            <li>Unsubscribe from promotional emails</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            7. Changes to This Policy
          </h2>
          <p>
            We may occasionally update this policy. If we make material changes, we’ll notify you through our site or direct communication.
          </p>
        </section>

        {/* Section 8 */}
        <section className="text-center">
          <h2 className="text-2xl font-orbitron text-light-purple dark:text-light-teal mb-4">
            8. Contact Us
          </h2>
          <p className="mb-2">Have questions or concerns?</p>
          <a
            href="mailto:support@skynetrix.tech"
            className="text-light-purple dark:text-light-teal font-bold underline hover:text-dark-purple dark:hover:text-white transition duration-300"
          >
            support@skynetrix.tech
          </a>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
