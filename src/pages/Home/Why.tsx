import { Droplets, ThumbsUp, Leaf, Users } from "lucide-react";

function Why() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-blue-600">SirLifeWater</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We go beyond hydration — delivering clean, safe, and refreshing water
          you can trust every day.
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Droplets className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              100% Pure Water
            </h3>
            <p className="text-gray-600 text-sm">
              Filtered through advanced purification systems for guaranteed
              freshness.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center bg-orange-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <ThumbsUp className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quality You Can Taste
            </h3>
            <p className="text-gray-600 text-sm">
              Consistent mineral balance and natural taste loved by thousands.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center bg-green-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Eco-Friendly Packaging
            </h3>
            <p className="text-gray-600 text-sm">
              We use recyclable bottles and promote green delivery methods.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center bg-blue-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Trusted by Communities
            </h3>
            <p className="text-gray-600 text-sm">
              Thousands of satisfied homes and offices rely on our trusted
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
