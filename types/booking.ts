import { packageItemType } from './packageItem';
import { userType } from './user';

export type bookingType = {
  _id: string;
  user: userType;
  beautyPackage: packageItemType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
