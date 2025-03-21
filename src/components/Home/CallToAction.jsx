import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 text-center">
      <Link
        to="/founders-access"
        className="mt-6 px-10 py-4 font-bold text-lg rounded-full animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
      >
        Join the Founder&apos;s Club
      </Link>
    </section>
  );
};

export default CallToAction;
