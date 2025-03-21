const features = [
    {
      title: "Automated Customer Follow-Ups",
      description:
        "Send service reminders, follow-ups, and offers automatically to keep customers engaged.",
      icon: "/path-to-reminder-icon.png",
    },
    {
      title: "Service History & Recommendations",
      description:
        "Let customers view past services and recommended maintenance right from their portal.",
      icon: "/path-to-history-icon.png",
    },
    {
      title: "Shop Insights & Performance Tracking",
      description:
        "See revenue from completed jobs, track lost revenue from declined work, and find your most valuable customers.",
      icon: "/path-to-analytics-icon.png",
    },
  ];
  
  const FeaturesSection = () => {
    return (
      <section className="py-16 bg-light-teal dark:bg-dark-purple text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            How Skynetrix Helps Your Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-light-primary-bg dark:bg-dark-primary-bg shadow-lg rounded-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-light-purple dark:text-light-teal mb-4">
                  {feature.title}
                </h3>
                <p className="text-dark-purple dark:text-light-purple">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  