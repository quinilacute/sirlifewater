import { useState } from "react";

const orsApiKey = import.meta.env.VITE_ORS_API_KEY as string;

const factoryCoords = {
  lat: 5.0333,  // Itu, Akwa Ibom coordinates
  lng: 7.9167
};

function Distance() {
  const [origin, setOrigin] = useState("");
  const [distance, setDistance] = useState("");
  const [cost, setCost] = useState("");
  const [loading, setLoading] = useState(false);

  const getDistance = async () => {
    if (!origin) return alert("Enter your location.");
    setLoading(true);

    try {
      // Convert user's typed location → Coordinates
      const geoRes = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${orsApiKey}&text=${encodeURIComponent(
          origin
        )}`
      );

      const geoData = await geoRes.json();
      if (!geoData.features.length) throw new Error("Location not found");

      const userCoords = geoData.features[0].geometry.coordinates; // [lng, lat]

      // Calculate distance using ORS matrix API
      const matrixRes = await fetch(
        "https://api.openrouteservice.org/v2/matrix/driving-car",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: orsApiKey,
          },
          body: JSON.stringify({
            locations: [
              [userCoords[0], userCoords[1]], // user
              [factoryCoords.lng, factoryCoords.lat], // you
            ],
            metrics: ["distance"],
          }),
        }
      );

      const matrixData = await matrixRes.json();
      const meters = matrixData.distances[0][1];
      const km = meters / 1000;

      const deliveryCost = km * 100; // N100 per km

      setDistance(km.toFixed(2) + " km");
      setCost(`₦${deliveryCost.toFixed(2)}`);
    } catch (err) {
      console.error(err);
      alert("Couldn't calculate distance.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-20 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Delivery Distance Calculator
      </h2>

      <input
        className="border p-2 rounded w-80"
        value={origin}
        placeholder="Enter your location"
        onChange={(e) => setOrigin(e.target.value)}
      />

      <button
        onClick={getDistance}
        className="ml-3 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Calculating..." : "Get Distance"}
      </button>

      {distance && (
        <div className="mt-6 text-gray-700">
          <p><strong>Distance:</strong> {distance}</p>
          <p><strong>Estimated Cost:</strong> {cost}</p>
        </div>
      )}
    </section>
  );
}

export default Distance;
