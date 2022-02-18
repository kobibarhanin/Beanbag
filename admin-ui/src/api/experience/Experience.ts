import { User } from "../user/User";

export type Experience = {
  createdAt: Date;
  description: string | null;
  host?: User | null;
  id: string;
  location: string | null;
  members?: Array<User>;
  title: string | null;
  updatedAt: Date;
};
