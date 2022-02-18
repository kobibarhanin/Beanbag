import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="user.id" reference="User" label="Host">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
