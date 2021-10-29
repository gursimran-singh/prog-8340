export class Food {
  _id: string;
  name: string;
  type: string;
  image: string;
  price: string;
  rating: number;
  description: string;

  constructor(_id: string, name: string, type: string, image: string, price: string, rating: number, description: string) {
    this._id = _id;
    this.name = name;
    this.type = type;
    this.image = image;
    this.rating = rating;
    this.price = price;
    this.description = description;
  }
}
