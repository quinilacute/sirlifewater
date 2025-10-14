import { Truck, Clock, ShieldCheck } from "lucide-react";

function Delivery() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Fast & Reliable <span className="text-blue-600">Delivery</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience seamless doorstep water delivery designed for your
          convenience — quick, safe, and eco-friendly.
        </p>

        {/* Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition">
            <Truck className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Same-Day Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Order before 2PM and get your water delivered the same day within
              the city.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 text-sm">
              Choose your preferred delivery time slot — morning, afternoon, or
              evening.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition">
            <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Safe & Secure Handling
            </h3>
            <p className="text-gray-600 text-sm">
              Our team ensures every bottle is handled with hygiene and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
