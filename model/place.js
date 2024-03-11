class place {
  constructor(title, imageUrl, address, location, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random.toString();
  }
}
