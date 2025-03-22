import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Skynetrix Features",
    description:
      "Explore Skynetrix features that help auto shops retain customers, automate follow-ups, and grow revenue.",
    keywords:
      "auto shop software, skynetrix features, repair shop CRM, service automation tools",
    image: "/images/features-og.jpg",
    url: "https://skynetrix.tech/features",
    type: "website",
  });

  return (
    <main className="bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white pt-16">
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-light-purple dark:text-light-teal mb-6">
          Built for Growth-Minded Auto Shops
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Skynetrix helps you retain more customers, bring back declined work,
          and fill your bays—automatically.
        </p>
        <img
          src="/assets/skynetrix-dashboard-preview.jpg"
          alt="Skynetrix Dashboard Preview"
          className="mx-auto rounded-xl shadow-lg w-full max-w-4xl mt-6"
        />
      </section>

      {/* Customer Engagement Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal text-center mb-10">
            Customer Engagement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-white dark:bg-[#2A054A] rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-light-purple dark:text-light-teal mb-4">
                Automated Follow-Ups
              </h3>
              <ul className="text-dark-purple dark:text-light-purple text-sm space-y-2">
                <li>✔️ Recover declined work without manual effort</li>
                <li>✔️ Messages sent based on actual rejection reason</li>
                <li>✔️ Brings in $1,000+ monthly for active users</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-[#2A054A] rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-light-purple dark:text-light-teal mb-4">
                Online Scheduling
              </h3>
              <ul className="text-dark-purple dark:text-light-purple text-sm space-y-2">
                <li>✔️ Easy booking without phone tag</li>
                <li>✔️ Customers pick their own time or tech</li>
                <li>✔️ Reduces no-shows with built-in reminders</li>
              </ul>
            </div>
          </div>
          <section className="py-20 px-6 bg-[#f5f5f5] dark:bg-[#2A054A]">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-8">
                Business Insights
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-12">
                Know exactly where your money is going, where it’s leaking, and
                how to fix it. Skynetrix doesn’t just track—it teaches you to
                win.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-light-purple dark:text-light-teal">
                    Real-Time Revenue Tracking
                  </h3>
                  <p className="text-sm text-dark-purple dark:text-light-purple">
                    Skynetrix calculates completed, declined, and recurring
                    revenue—so you know what’s working and what isn’t.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-light-purple dark:text-light-teal">
                    Top Customer Insights
                  </h3>
                  <p className="text-sm text-dark-purple dark:text-light-purple">
                    Identify your most valuable customers, most loyal returners,
                    and biggest lost opportunities by job type.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-light-purple dark:text-light-teal">
                    Smart Recommendations
                  </h3>
                  <p className="text-sm text-dark-purple dark:text-light-purple">
                    Get automated suggestions for improvements—like better
                    timing for follow-ups or targeting seasonal services.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-16 bg-[#f7faff] dark:bg-[#1B022F] p-10 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-bold text-center text-light-purple dark:text-light-teal mb-4">
              "When the follow-up is automated, the relationship feels personal
              — and customers come back."
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughtful communication doesn't need to be manual. Skynetrix
              makes sure your shop always follows through.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-light-purple dark:text-light-teal mb-2">
              Real-World Example
            </h3>
            <p className="text-md max-w-2xl mx-auto">
              <strong>HEM Automotive</strong> rebooked $1,200 in declined work
              in one month using automated follow-ups—without sending a single
              manual message.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#e0e0e0] dark:bg-[#1B022F]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-6">
            Watch Skynetrix in Action
          </h2>
          <p className="text-lg text-dark-purple dark:text-light-purple max-w-2xl mx-auto mb-10">
            See how our tools work together to help your shop operate more
            efficiently and drive customer loyalty.
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Skynetrix Feature Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* Business Insights Section */}

      {/* Future Features + CTA */}
      <section className="py-20 px-6 bg-[#f7faff] dark:bg-[#2A054A]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-6">
            Coming Soon to Skynetrix
          </h2>
          <p className="text-lg text-dark-purple dark:text-light-purple max-w-2xl mx-auto mb-10">
            We’re building even more tools to supercharge your shop’s growth.
            Founding Members get first access, influence development, and
            lifetime discounts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
              <h4 className="font-semibold text-light-purple dark:text-light-teal mb-2">
                Mobile App for Customers
              </h4>
              <p className="text-sm text-dark-purple dark:text-light-purple">
                Let customers book, view service history, and receive reminders
                right from their phone.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
              <h4 className="font-semibold text-light-purple dark:text-light-teal mb-2">
                OBD-II Integration
              </h4>
              <p className="text-sm text-dark-purple dark:text-light-purple">
                Capture live vehicle data through Bluetooth devices for deeper
                insights and automation.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-purple rounded-xl shadow-md">
              <h4 className="font-semibold text-light-purple dark:text-light-teal mb-2">
                Loyalty & Referral Rewards
              </h4>
              <p className="text-sm text-dark-purple dark:text-light-purple">
                Reward repeat customers and incentivize referrals with built-in
                rewards tracking.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-light-purple dark:text-light-teal mb-4">
              Be Part of What’s Next
            </h3>
            <p className="text-md max-w-xl mx-auto mb-6">
              Founders help shape our roadmap, test features early, and grow
              with us from day one.
            </p>
            <Link
              to="/founders-access"
              className="inline-block px-10 py-4 rounded-full text-white bg-light-purple dark:bg-light-teal font-bold hover:shadow-neon-teal transition duration-300"
            >
              Join the Founder's Club
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;
