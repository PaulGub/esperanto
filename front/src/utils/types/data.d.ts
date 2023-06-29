export type userProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: string;
  healthNetwork?: string;
  professionalStatus?: string;
  experiences?: string;
};

export type specialitiesProps = {
  label: string;
  number: string;
};
