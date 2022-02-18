import { ExperienceWhereUniqueInput } from "../experience/ExperienceWhereUniqueInput";

export type UserUpdateInput = {
  experience?: ExperienceWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
