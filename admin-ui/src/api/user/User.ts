import { Experience } from "../experience/Experience";

export type User = {
  createdAt: Date;
  experience?: Experience | null;
  experiences?: Array<Experience>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
