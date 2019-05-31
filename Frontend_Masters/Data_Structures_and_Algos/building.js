class Condo {
  constructor( bedrooms, bathrooms ) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  get rooms() {
    return this.countRooms();
  }
  
  countRooms() {
    const rooms = this.bedrooms + this.bathrooms;
    return rooms;
  }
};