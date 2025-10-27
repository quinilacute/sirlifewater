// src/utils/getDeliveryCost.ts
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
const factoryLocation = "Itu, Akwa Ibom, Nigeria"; // Your factory base location

interface DistanceMatrixResponse {
  rows: {
    elements: {
      distance: { text: string; value: number };
      status: string;
    }[];
  }[];
}

export async function getDeliveryCost(userLocation: string) {
  if (!userLocation) throw new Error("User location is required");

  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
  const targetUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    userLocation
  )}&destinations=${encodeURIComponent(
    factoryLocation
  )}&units=metric&key=${apiKey}`;

  const response = await fetch(proxyUrl + targetUrl);
  const data: DistanceMatrixResponse = await response.json();

  const element = data?.rows?.[0]?.elements?.[0];
  if (!element || element.status !== "OK") {
    throw new Error("Invalid response from Google API");
  }

  const distanceKm = element.distance.value / 1000;
  const distanceText = element.distance.text;
  const deliveryCost = distanceKm * 100; // ₦100 per km

  return { distanceText, deliveryCost };
}
