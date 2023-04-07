// API
import { IEStoreRating } from "./e-store-rating.model";

export interface IEStoreProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: IEStoreRating;
}
