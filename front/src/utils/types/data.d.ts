export type userProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: string;
  healthActor?: Object;
  researcher?: Object;
  industrial?: Object;
  healthNetwork?: string;
  professionalStatus?: string;
  experiences?: string;
  description?: string;
  profilePicture?: string;
  profileBanner?: string;
};

export type needProps = {
  id: number;
  title: string;
  type: string;
  description?: string;
  infrastructure?: string;
};
