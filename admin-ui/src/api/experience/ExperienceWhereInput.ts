import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ExperienceWhereInput = {
  description?: StringNullableFilter;
  host?: UserWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  title?: StringNullableFilter;
};
