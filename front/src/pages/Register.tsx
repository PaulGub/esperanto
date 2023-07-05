import { useState } from "react";
import ProgressSteps from "../components/ProgressSteps";
import { Roles } from "../utils/types/Roles";
import FormInput from "../components/FormInput";
import { CREATE_USER } from "../components/gql/CreateUser";
import { ApolloClientCall } from "../components/apolloClient/ApolloClient";
import { useMutation } from "@apollo/client";
import { CREATE_HEALTH_ACTOR, CREATE_INDUSTRIAL, CREATE_RESEARCHER } from "../components/gql/CreateRole";
import { NavLink } from "react-router-dom";

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

enum Navigation {
  Previous,
  Next
}

enum Labels {
  Step1 = "Etape 1",
  Step2 = "Etape 2",
  Step3 = "Etape 3",
  Step4 = "Etape 4",
  Step5 = "Etape 5"
}

const steps = [
  { label: Labels.Step1, isOptional: false },
  { label: Labels.Step2, isOptional: true },
  { label: Labels.Step3, isOptional: false },
  { label: Labels.Step4, isOptional: false }
];

export default function Register() {
  let [message, setMessage] = useState<string>("");
  let [errorMessage, setErrorMessage] = useState<string>("");
  let [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [role, setRole] = useState<Roles>(Roles.HEALTH_ACTOR);
  const [healthNetwork, setHealthNetwork] = useState<string>("");
  const [professionalStatus, setProfessionalStatus] = useState<string>("");
  const [experiences, setExperiences] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [careServiceType, setCareServiceType] = useState<string>("");
  const [supportServices, setSupportServices] = useState<string>("");
  const [professional, setProfessional] = useState<string>("");
  const [careSector, setCareSector] = useState<string>("");
  const [otherSector, setOtherSector] = useState<string>("");
  const [researchUnitName, setResearchUnitName] = useState<string>("");
  const [researchDepartment, setResearchDepartment] = useState<string>("");
  const [researchArea, setResearchArea] = useState<string>("");

  const [createUser] = useMutation(CREATE_USER, { client: ApolloClientCall });
  const [createHealthActor] = useMutation(CREATE_HEALTH_ACTOR, { client: ApolloClientCall });
  const [createIndustrial] = useMutation(CREATE_INDUSTRIAL, { client: ApolloClientCall });
  const [createResearcher] = useMutation(CREATE_RESEARCHER, { client: ApolloClientCall });

  function actionForm(navigation: Navigation) {
    if (steps[currentStepIndex].label === Labels.Step1) {
      if (firstName === "" || lastName === "" || email === "" || password1 === "" || password2 === "") {
        setErrorMessage("Veuillez remplir tous les champs");
        return;
      }

      if (!isValidEmail(email)) {
        setErrorMessage("Veuillez entrer une adresse email valide.");
        return;
      }

      if (password1 !== password2) {
        setErrorMessage("Les mots de passe ne correspondent pas.");
        return;
      }
    }

    setMessage("");
    setErrorMessage("");
    if (navigation === Navigation.Previous) {
      if (currentStepIndex > 0) {
        setCurrentStepIndex(--currentStepIndex);
      }
    } else {
      if (currentStepIndex < steps.length) {
        setCurrentStepIndex(++currentStepIndex);
      }
    }

    if (currentStepIndex === steps.length) {
      let userData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password1,
        phoneNumber: phoneNumber !== "" ? phoneNumber : null,
        role: role,
        healthNetwork: healthNetwork,
        professionalStatus: professionalStatus,
        experiences: experiences,
        description: description
      }

      let roleData = {};

      switch (role) {
        case (Roles.HEALTH_ACTOR):
          roleData = {
            careServiceType: careServiceType,
            supportServices: supportServices,
            professional: {
              name: professional
            },
          }
          break;
        case (Roles.INDUSTRIAL):
          roleData = {
            careSector: careSector,
            otherSector: otherSector,
          }
          break;
        case (Roles.RESEARCHER):
          roleData = {
            researchUnitName: researchUnitName,
            researchDepartment: researchDepartment,
            researchArea: researchArea,
            otherSector: otherSector,
          }
          break;
      }

      console.log(userData);
      console.log(roleData);

      createUser({
        variables: userData
      }).then(() => {
        if (role === Roles.HEALTH_ACTOR) {
          return createHealthActor({
            variables: roleData
          });
        } else if (role === Roles.INDUSTRIAL) {
          return createIndustrial({
            variables: roleData
          });
        } else if (role === Roles.RESEARCHER) {
          return createResearcher({
            variables: roleData
          });
        }
      }).then(() => {
        setMessage("Votre compte a bien été créé !");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Erreur lors de la création du compte.");
      });
    }
  }

  const inputClassName = "shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 text-sm";
  const labelClassName = "absolute left-0 -top-3.5 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 text-[12px] peer-focus:text-[12px] peer-placeholder-shown:text-sm";

  return (
    <div className="mt-16 min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <ProgressSteps currentStepIndex={currentStepIndex} labels={steps.map((step) => step.label)}></ProgressSteps>
            <div>
              <h1 className="text-2xl font-semibold">Créer un compte</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {errorMessage && (
                  <div className="text-red-400 text-sm mb-4">{errorMessage}</div>
                )}
                {!errorMessage && message && (
                  <div className="text-primary-400 text-sm mb-4">{message}</div>
                )}
                {steps[currentStepIndex]?.label === Labels.Step1 ? (
                  <div>
                    <div className="flex gap-4">
                      <FormInput id="lastName" label="Nom" value={lastName} setValue={setLastName} isOptional={false}></FormInput>
                      <FormInput id="firstName" label="Prénom" value={firstName} setValue={setFirstName} isOptional={false}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="email" type="email" label="Email" value={email} setValue={setEmail} isOptional={false}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="password1" type="password" label="Mot de passe" value={password1} setValue={setPassword1} isOptional={false}></FormInput>
                      <FormInput id="password2" type="password" label="Répétition du mot de passe" value={password2} setValue={setPassword2} isOptional={false}></FormInput>
                    </div>
                  </div>
                ) : steps[currentStepIndex]?.label === Labels.Step2 ? (
                  <div>
                    <div className="flex gap-4">
                      <FormInput id="phoneNumber" type="tel" label="Numéro de téléphone" value={phoneNumber} setValue={setPhoneNumber}></FormInput>
                      <FormInput id="healthNetwork" label="Réseau de santé" value={healthNetwork} setValue={setHealthNetwork}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="professionalStatus" label="Statut professionnel" value={professionalStatus} setValue={setProfessionalStatus}></FormInput>
                      <FormInput id="experiences" label="Expériences" value={experiences} setValue={setExperiences}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="description" type="textarea" label="Description" value={description} setValue={setDescription}></FormInput>
                    </div>
                  </div>
                ) : steps[currentStepIndex]?.label === Labels.Step3 ? (
                  <div>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={inputClassName}
                      >
                        <option value={Roles.HEALTH_ACTOR}>{Roles.HEALTH_ACTOR}</option>
                        <option value={Roles.INDUSTRIAL}>{Roles.INDUSTRIAL}</option>
                        <option value={Roles.RESEARCHER}>{Roles.RESEARCHER}</option>
                      </select>
                      <label
                        htmlFor="role"
                        className={labelClassName}
                      >
                        Rôle *
                      </label>
                    </div>
                  </div>
                ) : steps[currentStepIndex]?.label === Labels.Step4 ? (
                  <div>
                    <div className="mb-4">Vous êtes un {role}</div>
                    {role === Roles.HEALTH_ACTOR ? (
                      <div>
                        <FormInput id="careServiceType" label="Type de service de soin" value={careServiceType} setValue={setCareServiceType}></FormInput>
                        <FormInput id="supportServices" label="Services de soutien" value={supportServices} setValue={setSupportServices}></FormInput>
                        <FormInput id="professional" label="Professionnel" value={professional} setValue={setProfessional}></FormInput>
                      </div>
                    ) : role === Roles.INDUSTRIAL ? (
                      <div>
                        <FormInput id="careSector" label="Secteur de soin" value={careSector} setValue={setCareSector}></FormInput>
                        <FormInput id="otherSector" label="Autre secteur" value={otherSector} setValue={setOtherSector}></FormInput>
                      </div>
                    ) : (
                      <div>
                        <FormInput id="researchUnitName" label="Nom de l'unité de recherche" value={researchUnitName} setValue={setResearchUnitName}></FormInput>
                        <FormInput id="researchDepartment" label="Département de recherche" value={researchDepartment} setValue={setResearchDepartment}></FormInput>
                        <FormInput id="researchArea" label="Domaine de recherche" value={researchArea} setValue={setResearchArea}></FormInput>
                        <FormInput id="otherSector" label="Autre secteur" value={otherSector} setValue={setOtherSector}></FormInput>
                      </div>
                    )}
                  </div>
                ) : (
                  null
                )}
                <div className="pt-4 flex items-center space-x-4">
                  {(currentStepIndex > 0 && currentStepIndex <= steps.length - 1) ? (
                    <button onClick={() => actionForm(Navigation.Previous)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Précédent</button>
                  ) : (
                    <NavLink
                        to={"/login"}
                        className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                    >Se connecter</NavLink>
                  )}
                  {currentStepIndex < steps.length ? 
                    currentStepIndex === steps.length - 1 ? (
                      <button onClick={() => actionForm(Navigation.Next)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Créer le compte</button>
                    ) : steps[currentStepIndex].isOptional ? (
                      <div className="w-2/3 flex gap-4">
                        <button onClick={() => actionForm(Navigation.Next)} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Passer cette étape</button>
                        <button onClick={() => actionForm(Navigation.Next)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Suivant</button>
                      </div>
                    ) : (
                      <button onClick={() => actionForm(Navigation.Next)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Suivant</button>
                    )
                  : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
