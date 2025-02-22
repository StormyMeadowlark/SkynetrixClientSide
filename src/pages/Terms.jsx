const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-orbitron text-light-primary dark:text-dark-primary mb-6">
        Terms of Service
      </h1>
      <p className="mb-4 text-lg">
        Welcome to Skynetrix. These Terms of Service ("Terms") govern your access to and use of our services.
        By using Skynetrix, you agree to comply with these Terms. If you do not agree, please do not use our services.
      </p>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        1. Use of Services
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must be at least 18 years old or have legal guardian consent.</li>
        <li>Do not engage in fraudulent, harmful, or illegal activities.</li>
        <li>Respect intellectual property rights and applicable laws.</li>
      </ul>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        2. Account Responsibilities
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>Notify us immediately of any unauthorized access to your account.</li>
        <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
      </ul>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        3. Payments and Billing
      </h2>
      <p className="mb-4 text-lg">
        If you subscribe to any paid services, you agree to provide accurate payment details. Subscription fees
        are non-refundable unless stated otherwise.
      </p>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        4. Limitation of Liability
      </h2>
      <p className="mb-4 text-lg">
        Skynetrix is provided "as is" without warranties of any kind. We are not liable for any direct, indirect,
        incidental, or consequential damages arising from your use of our services.
      </p>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        5. Termination
      </h2>
      <p className="mb-4 text-lg">
        We reserve the right to suspend or terminate access to Skynetrix at our discretion if you violate these Terms.
      </p>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        6. Changes to These Terms
      </h2>
      <p className="mb-4 text-lg">
        We may update these Terms from time to time. Your continued use of Skynetrix after any changes constitutes
        acceptance of the new Terms.
      </p>
      <h2 className="text-2xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        7. Contact Us
      </h2>
      <p className="mb-4 text-lg">
        If you have any questions about these Terms, please contact us at support@skynetrix.tech.
      </p>
    </div>
  );
};

export default TermsOfService;
