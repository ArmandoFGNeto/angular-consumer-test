import { Picture } from './picture';
import { Price } from './price';

export class Product {
    _id: string;
    name: string;
    category: string;
    pictures: Picture[];
    price: Price;
}