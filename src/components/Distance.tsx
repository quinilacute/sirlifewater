import { useState } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
const factoryLocation = "Itu, Akwa Ibom, Nigeria";

// Define TypeScript types for the Google Maps Distance Matrix API response
interface DistanceMatrixResponse {
  rows: {
    elements: {
      distance: {
        text: string;
        value: number;
      };
      status: string;
    }[];
  }[];
}

function Distance() {
  const [origin, setOrigin] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getDistance = async () => {
    if (!origin) return alert("Please enter your location");
    setLoading(true);

    try {
      const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
      const targetUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        origin
      )}&destinations=${encodeURIComponent(
        factoryLocation
      )}&units=metric&key=${apiKey}`;

      const response = await fetch(proxyUrl + targetUrl);
      const data: DistanceMatrixResponse = await response.json();

      if (data?.rows?.[0]?.elements?.[0]?.status !== "OK") {
        throw new Error("Invalid response from API");
      }

      const distanceText = data.rows[0].elements[0].distance.text;
      const distanceValue = data.rows[0].elements[0].distance.value / 1000; // km
      const deliveryCost = distanceValue * 100; // ₦100 per km

      setDistance(distanceText);
      setCost(`₦${deliveryCost.toFixed(2)}`);
    } catch (error) {
      console.error("Error fetching distance:", error);
      alert("Failed to fetch distance. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-20 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Delivery Distance Calculator
      </h2>

      <input
        type="text"
        placeholder="Enter your location"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-80"
      />
      <button
        onClick={getDistance}
        className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Calculating..." : "Get Distance"}
      </button>

      {distance && (
        <div className="mt-6 text-gray-700">
          <p>
            <strong>Distance:</strong> {distance}
          </p>
          <p>
            <strong>Estimated Delivery Cost:</strong> {cost}
          </p>
        </div>
      )}
    </section>
  );
}

export default Distance;
