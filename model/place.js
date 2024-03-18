export class Place {
  constructor(title, imageUrl, location, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = location.address;
    this.location = { lat: location.lat, long: location.longt };
    this.id = id;
  }
}
