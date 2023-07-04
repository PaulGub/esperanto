import {TagT} from "@models/Tag";

export interface HealthActorTypes {
    careServiceType: string
    supportServices: string
}

export interface UserInterface {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    role: string,
    phoneNumber?: string,
    healthNetwork?: string,
    professionalStatus?: string,
    experiences?: string,
    description?: string,
    profilePicture?: string,
    profileBanner?: string,
    tags?: TagInterface[];
}

export interface NeedInterface {
    id: number,
    title: string,
    type: string,
    description?: string,
    infrastructure?: string,
    tags?: TagInterface[];
}

export interface TagInterface {
    id: number,
    name: string,
}

export interface UserAndNumberTagsMatched {
    user: UserInterface,
    commonTagCount: number
}

export interface NeedData {
    title: string,
    type: string,
    description?: string,
    infrastructure?: string,
    tags?: TagT[];
}