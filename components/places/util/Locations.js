const GOOGLE_API_KEY = "";
const API_KEY = "6e109e58697b49b2bbe3a76f5f46df96";
export function getUserLocationPreview() {
  const locationPreviewURI = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }
  const data = await response.json();
  const address = data.features[0].properties.formatted;

  return address;
}
