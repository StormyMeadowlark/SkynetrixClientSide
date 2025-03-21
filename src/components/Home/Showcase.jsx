const ShowcaseSection = () => {
    return (
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-6">
            See Skynetrix in Action
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Explore how Skynetrix enhances <b>shop management, customer
            retention, and service optimization</b>.
          </p>
          <img
            src="/path-to-dashboard-screenshot.png"
            alt="Skynetrix Dashboard"
            className="mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </section>
    );
  };
  
  export default ShowcaseSection;
  