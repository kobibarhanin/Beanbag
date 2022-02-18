import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExperienceCreateInput = {
  description?: string | null;
  host?: UserWhereUniqueInput | null;
  location?: string | null;
  title?: string | null;
};
