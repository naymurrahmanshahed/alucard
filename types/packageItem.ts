import { bookingType } from './booking';
import { specialistType } from './specialist';

export type packageItemType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  specialists: specialistType[];
  bookings: bookingType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
