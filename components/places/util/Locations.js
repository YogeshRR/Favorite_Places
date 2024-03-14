const GOOGLE_API_KEY = "";
export function getUserLocationPreview() {
  const locationPreviewURI = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;
}
