Table User{
  id uuid [pk, increment]
  firstName string [not null]
  lastName string [not null]
  email email [not null]
  password password [not null]
  phoneNumber string
  role string [note: 'enum: Acteur, Industriel, Chercheur', not null] 
  healthNetwork string
  professionalStatus text
  experiences text
  description text
  profilePicture string
}
Table HealthActor {
  id uuid [pk]
  user_id int [ref: > User.id]
  careGiver string  [ref: > Professional.id]
  careServiceType string
  supportServices string
}
Table Industrial {
  id uuid [pk]
  user_id int [ref: > User.id]
  careSector string
  otherSector string
}
Table Researcher {
  id uuid [pk]
  user_id int [ref: > User.id]
  researchUnitName string
  researchDepartment string
  description text
  researchArea string
}
Table HealthCareEstablishment {
  id uuid [pk]
  name string
  address1 string
  address2 string
  address3 string
  zipCode int
  city string
  country string
}
Table Company {
  id uuid [pk]
  name string
  address1 string
  address2 string
  address3 string
  zipCode int
  city string
  country string
}
Table Material{
  id uuid [pk]
  name string
  ressourceLink string
  description text
  need_id int [ref: > Need.id]
  company_id uuid [ref: > Company.id]
  healthCareEstablishment_id uuid [ref: > HealthCareEstablishment.id]
}
Table Need {
  id uuid [pk]
  title string
  description string
  user_id uuid [ref: > User.id]
  type string [note: 'enum: Material, Professional, Infrastructure', not null]
  infrastructure text  
}
Table Professional {
  id uuid
  name string
}
Table Tag {
  id uuid
  name string
}
Table Expertise {
  id uuid [pk]
  name string
  rating int
}
Table Ressource {
  id uuid [pk]
  link string
  user_id uuid [ref: > User.id]
}
Table Followers {
  userId uuid [ref: > User.id]
  followerId uuid [ref: > User.id]
}
Table ListUsers {
  id uuid [pk]
  name string
  user_id uuid [ref: > User.id] 
}
Table ListNeed {
  id uuid [pk]
  name string
  need_id uuid [ref: > Need.id]
}
Table ListMaterials {
  id uuid [pk]
  name string
  material_id uuid [ref: > Material.id] 
}
Ref: "Need"."id" <> "Professional"."id"
Ref: "Material"."id" <> "Need"."id"
Ref: "Expertise"."id" <> "User"."id"
Ref: "Tag"."id" <> "Need"."id"
Ref: "Tag"."id" <> "User"."id"
Ref: "Industrial"."id" <> "Company"."id"
Ref: "HealthCareEstablishment"."id" <> "HealthActor"."id"
Ref: "ListUsers"."id" <> "User"."id"
Ref: "ListNeed"."id" <> "Need"."id"
Ref: "ListMaterials"."id" <> "Material"."id"