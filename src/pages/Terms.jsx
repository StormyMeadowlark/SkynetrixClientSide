import  useSEO  from "../hooks/useSEO";

const TermsOfService = () => {
  useSEO({
    title: "Terms of Service",
    description:
      "Review the Terms of Service for Skynetrix. Learn about your rights, responsibilities, and how we handle services.",
    url: window.location.href,
    type: "article",
  });

  return (
    <main className="mx-auto px-6 py-12 bg-light-primary-bg dark:bg-dark-primary-bg text-light-text dark:text-white transition-all duration-300">
      <h1 className="text-4xl font-bold font-orbitron text-light-purple dark:text-light-teal mb-8 text-center">
        Terms of Service
      </h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
        Welcome to Skynetrix. By using our services, you agree to these terms. Please read them carefully.
      </p>

      <div className="space-y-10">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            1. Use of Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old or have legal guardian consent.</li>
            <li>Do not engage in fraudulent, harmful, or illegal activities.</li>
            <li>Respect intellectual property rights and applicable laws.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            2. Account Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>Notify us immediately of any unauthorized access to your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            3. Payments & Billing
          </h2>
          <p className="text-lg">
            If you subscribe to any paid services, you agree to provide accurate payment details. 
            Subscription fees are non-refundable unless otherwise stated.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-lg">
            Skynetrix is provided "as is" without warranties of any kind. We are not liable for any 
            direct, indirect, incidental, or consequential damages arising from your use of our services.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            5. Termination
          </h2>
          <p className="text-lg">
            We reserve the right to suspend or terminate access to Skynetrix at our discretion if you violate these Terms.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            6. Changes to These Terms
          </h2>
          <p className="text-lg">
            We may update these Terms from time to time. Your continued use of Skynetrix after any changes 
            constitutes acceptance of the new Terms.
          </p>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-light-primary dark:text-light-teal mb-4">
            7. Contact Us
          </h2>
          <p className="text-lg">
            If you have any questions about these Terms, reach out to us at:
          </p>
          <a
            href="mailto:support@skynetrix.tech"
            className="text-light-purple dark:text-light-teal font-bold text-lg underline hover:text-dark-purple dark:hover:text-white transition duration-300"
          >
            support@skynetrix.tech
          </a>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
