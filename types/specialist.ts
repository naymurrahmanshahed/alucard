import { packageItemType } from './packageItem';

export type specialistType = {
  _id: string;
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: packageItemType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
