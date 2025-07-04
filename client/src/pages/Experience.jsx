
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <main className="font-sans text-gray-800 mt-24">
      <section className="bg-green-50 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Experience</h1>
        <p className="max-w-xl mx-auto text-lg">
          Years of dedication to seamless hotel bookings and happy travelers.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Achievements & Milestones</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🌍 Over 500 bookings completed worldwide.</li>
          <li>🏆 Voted “Best Travel Booking Platform” in 2024.</li>
          <li>🤝 Partnerships with 2,000+ trusted hotels and resorts.</li>
        </ul>
      </section>

      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Customer Success Stories</h2>
          <p className="mb-4 italic border-l-4 border-green-500 pl-4">
            “We found an amazing family resort at a price we couldn’t believe.
            Booking was smooth, and the kids had the best vacation ever!” <br />
            <span className="font-bold">— The hab Family, UGANDA</span>
          </p>
          <p className="italic border-l-4 border-green-500 pl-4">
            “As a hotel owner, listing on Quick Stay increased our bookings
            by 30% in just three months.” <br />
            <span className="font-bold">— Mr. YTT, Hotel Manager, Eritrea</span>
          </p>
        </div>
          </section>
          
      <section className="py-8 text-center px-4">
        <p className="text-lg mb-4">Discover why travelers trust us for their perfect stay.</p>
        <Link
          to="/rooms"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
        >
          Book with Confidence →
        </Link>
      </section>
    </main>
  );
};

export default Experience