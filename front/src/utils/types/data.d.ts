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
  description?: string;
  profilePicture?: string;
};

export type needProps = {
  id: number;
  title: string;
  type: string;
  description?: string;
  infrastructure?: string;
};
