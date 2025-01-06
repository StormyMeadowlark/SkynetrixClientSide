import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Logo from '../assets/Logo.png?react'

const HomePage = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent animate-backgroundShift overflow-hidden">
        {/* Animated Particle Background */}
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: { value: 100 },
              color: { value: ['#00FFB2', '#4D00FF'] },
              shape: { type: 'circle' },
              opacity: { value: 0.8 },
              size: { value: 5 },
              line_linked: { enable: true, distance: 150, color: '#6A10A8' },
              move: { enable: true, speed: 2 },
            },
          }}
        />
        <img
          src={Logo}
          alt="Skynetrix Logo"
          className="w-64 md:w-96 mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-sans font-black text-neon-Green mb-6">
          Welcome to the Future of Automotive
        </h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-8">
          Skynetrix redefines automotive service management with cutting-edge
          tools for OBD2 connectivity, Shopware integration, and seamless customer engagement.
        </p>
        <Link
          to="/beta-signup"
          className="px-10 py-4 bg-neon-blue text-dark-text font-bold text-lg rounded-full hover:shadow-neon-blue transition duration-300 animate-pulse"
        >
          Join the Beta Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light-muted dark:bg-dark-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-orbitron text-center text-neon-purple mb-12">
            Why Choose Skynetrix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'OBD2 Connectivity',
                description:
                  'Track real-time mileage and diagnostic data for smarter service recommendations.',
                icon: '/path-to-obd-icon.png',
                hover: 'hover:shadow-neon-green',
              },
              {
                title: 'Shopware Integration',
                description:
                  'Easily manage appointments, service history, and customer data across shops.',
                icon: '/path-to-shopware-icon.png',
                hover: 'hover:shadow-neon-blue',
              },
              {
                title: 'Automated Service Reminders',
                description:
                  'Engage customers with personalized, proactive reminders for their vehicles.',
                icon: '/path-to-reminder-icon.png',
                hover: 'hover:shadow-neon-pink',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-light-background dark:bg-dark-background shadow-lg rounded-xl transition-transform transform hover:scale-105 ${feature.hover}`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-orbitron text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-center text-light-text dark:text-dark-text">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="py-16 bg-gradient-to-br from-light-secondary to-light-accent dark:from-dark-secondary dark:to-dark-accent text-center animate-backgroundShift">
        <div className="container mx-auto">
          <h2 className="text-4xl font-orbitron text-neon-blue mb-8">
            See Skynetrix in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-light-muted dark:bg-dark-muted shadow-lg rounded-xl">
              <img
                src="/path-to-dashboard-image.png"
                alt="Dashboard"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-orbitron text-neon-purple mb-4">
                Powerful Dashboards
              </h3>
              <p>
                Get real-time insights into shop performance, customer
                engagement, and service history.
              </p>
            </div>
            <div className="p-6 bg-light-muted dark:bg-dark-muted shadow-lg rounded-xl">
              <img
                src="/path-to-obd-image.png"
                alt="OBD Device"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-orbitron text-neon-green mb-4">
                OBD2 Connectivity
              </h3>
              <p>
                Connect vehicles directly to Skynetrix for accurate mileage
                tracking and better service recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-dark-accent text-center">
        <h2 className="text-4xl font-orbitron text-neon-pink mb-6">
          Ready to Elevate Your Shop?
        </h2>
        <p className="text-lg text-dark-text mb-8">
          Be among the first to experience Skynetrix. Join the beta program for
          free and revolutionize your shop management.
        </p>
        <Link
          to="/beta-signup"
          className="px-10 py-4 bg-neon-green text-dark-text font-bold text-lg rounded-full hover:shadow-neon-green transition duration-300"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-dark-muted text-center">
        <p className="text-sm text-light-muted">
          © 2025 Skynetrix. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
