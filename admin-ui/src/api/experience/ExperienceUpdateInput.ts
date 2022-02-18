import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExperienceUpdateInput = {
  description?: string | null;
  host?: UserWhereUniqueInput | null;
  location?: string | null;
  title?: string | null;
};
