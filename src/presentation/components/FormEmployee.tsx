import { Button, Label, TextInput } from "flowbite-react";
import React, { Fragment } from "react";

const FormEmployee = () => {
  return (
    <div className="container mx-auto">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nom" value="nom" />
          </div>
          <TextInput id="nom" type="text" placeholder="Entrez votre nom" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="prenom" value="prenom" />
          </div>
          <TextInput id="prenom" type="text" placeholder="Entrez votre prenom" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="adresse" value="adresse" />
          </div>
          <TextInput id="adresse" type="text" placeholder="adresse" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="role" value="role" />
          </div>
          <TextInput id="role" type="text" placeholder="role" required />
        </div>
        <Button type="submit">Ajouter</Button>
      </form>
    </div>
  );
};

export default FormEmployee;
