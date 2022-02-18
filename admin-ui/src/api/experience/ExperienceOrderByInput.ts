import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  hostId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
