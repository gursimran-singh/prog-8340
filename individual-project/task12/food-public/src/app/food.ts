export class Food {
  _id: string;
  name: string;
  type: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  reviews: {
    rating: number;
    author: string;
    timestamp: string;
    reviewText: string;
  }[];

  constructor(
    _id: string,
    name: string,
    type: string,
    image: string,
    price: string,
    rating: number,
    description: string,
    reviews: []
  ) {
    this._id = _id;
    this.name = name;
    this.type = type;
    this.image = image;
    this.rating = rating;
    this.price = price;
    this.description = description;
    this.reviews = reviews;
  }
}
