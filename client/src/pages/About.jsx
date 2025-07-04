import img from "../assets/aboutUs.jpg"
import {Link} from "react-router-dom"
const About = () => {
  return (
    <main className="font-sans text-gray-800 mt-24 w-[60%] m-auto">
     
      <section className="bg-blue-50 py-12 mb-5 text-center">
        <h1 className="text-3xl font-bold mb-4">About Quick Stay</h1>
        <p className="max-w-xl mx-auto text-lg">
          Making hotel bookings easy, transparent, and tailored for every
          traveler.
        </p>
      </section>
<img src={img} />
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Founded in 2023, Quick Stay started with a mission to
          simplify hotel bookings for travelers everywhere. Frustrated by
          confusing options and hidden fees, we created a platform that brings
          clarity, fairness, and peace of mind to finding the perfect stay.
        </p>
      </section>

      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p>
            We make it easy to search, compare, and book thousands of hotels
            worldwide. Our platform gives you the best prices, verified
            properties, and secure payments — all in one place.
          </p>
        </div>
      </section>

      <section className="py-8 text-center px-4">
        <p className="text-lg mb-4">Ready to find your perfect hotel?</p>
        <Link
          to="/rooms"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
        >
          Start Booking →
        </Link>
      </section>
    </main>
  );
};

export default About;
