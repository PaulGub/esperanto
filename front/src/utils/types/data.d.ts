import { DocumentNode } from "graphql";

export type globalUserProps = {
  description: string;
  email: string;
  experiences: string;
  firstname: string;
  healthActor: {
    careServiceType: string;
    id: string;
    supportServices: string;
    professional:{
      id: string,
      name: string
    };
  };
  healthNetwork: string;
  id: string;
  industrial: {
    id: string;
    careSector: string;
    otherSector: string;
  };
  lastname: string;
  phoneNumber: string;
  professionalStatus: string;
  profileBanner: string;
  profilePicture: string;
  researcher: {
    id: string;
    otherSector: string;
    researchArea: string;
    researchUnitName: string;
  };
  role: string;
  tags: Array<{ id: number; name: string }>;
};

export type needProps = {
  need: DocumentNode;
};
