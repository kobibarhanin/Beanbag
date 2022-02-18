import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ExperienceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="user.id" reference="User" label="Host">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
