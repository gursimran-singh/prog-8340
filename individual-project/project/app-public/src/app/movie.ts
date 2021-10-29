export class Movie {
    _id: string;
    name: string;
    genre: string;
    image: string;
    price: string;
    rating: number;
    cast: any;
  
    constructor(
      _id: string,
      name: string,
      genre: string,
      image: string,
      price: string,
      rating: number,
      cast: {}
    ) {
      this._id = _id;
      this.name = name;
      this.genre = genre;
      this.image = image;
      this.rating = rating;
      this.price = price;
      this.cast = cast;
    }
  }
  