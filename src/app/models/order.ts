import {Product} from './product';

export class Order {
  id!: number;
  ref!: string;
  userId!: number;
  etat!: boolean;
  date!: Date;
  totalPrice!: number;
  prodList!: Product[];
}