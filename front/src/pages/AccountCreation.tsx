import { useState } from "react";
import ProgressSteps from "../components/ProgressSteps";
import { Roles } from "../utils/types/Roles";
import FormInput from "../components/FormInput";

enum Navigation {
  Previous,
  Next
}

enum Labels {
  Step1 = "Step 1",
  Step2 = "Step 2",
  Step3 = "Step 3",
  Step4 = "Step 4"
}

const labels = [
  Labels.Step1,
  Labels.Step2,
  Labels.Step3
]

export default function AccountCreation() {
  let [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [role, setRole] = useState<Roles|string>(Roles.HEALTH_ACTOR);
  const [healthNetwork, setHealthNetwork] = useState<string>("");
  const [professionalStatus, setProfessionalStatus] = useState<string>("");
  const [experiences, setExperiences] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function actionForm(navigation: Navigation) {
    if (navigation === Navigation.Previous) {
      if (currentStepIndex > 0) {
        setCurrentStepIndex(--currentStepIndex);
      }
    } else {
      if (currentStepIndex < labels.length) {
        setCurrentStepIndex(++currentStepIndex);
      }
    }
    // createUser(firstName, lastName, email, password, phoneNumber, role, healthNetwork, professionalStatus, experiences, description);
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
            <ProgressSteps currentStepIndex={currentStepIndex} labels={labels}></ProgressSteps>
            <div>
              <h1 className="text-2xl font-semibold">Créer un compte</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {labels[currentStepIndex] === Labels.Step1 ? (
                  <div>
                    <div className="flex gap-4">
                      <FormInput id="lastName" type="text" label="Nom" value={lastName} setValue={setLastName}></FormInput>
                      <FormInput id="firstName" type="text" label="Prénom" value={firstName} setValue={setFirstName}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="email" type="email" label="Email" value={email} setValue={setEmail}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="password1" type="password" label="Mot de passe" value={password1} setValue={setPassword1}></FormInput>
                      <FormInput id="password2" type="password" label="Répétition du mot de passe" value={password2} setValue={setPassword2}></FormInput>
                    </div>
                  </div>
                ) : labels[currentStepIndex] === Labels.Step3 ? (
                  <div>
                    <div className="flex gap-4">
                      <FormInput id="phoneNumber" type="tel" label="Numéro de téléphone" value={phoneNumber} setValue={setPhoneNumber}></FormInput>
                      <FormInput id="healthNetwork" type="text" label="Réseau de santé" value={healthNetwork} setValue={setHealthNetwork}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="professionalStatus" type="text" label="Statut professionnel" value={professionalStatus} setValue={setProfessionalStatus}></FormInput>
                      <FormInput id="experiences" type="text" label="Expériences" value={experiences} setValue={setExperiences}></FormInput>
                    </div>
                    <div className="flex gap-4">
                      <FormInput id="description" type="textarea" label="Description" value={description} setValue={setDescription}></FormInput>
                    </div>
                  </div>
                ) : labels[currentStepIndex] === Labels.Step2 ? (
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
                        Rôle
                      </label>
                    </div>
                  </div>
                ) : (
                  <div>Votre compte a bien été créé !</div>
                )}
                <div className="pt-4 flex items-center space-x-4">
                  {(currentStepIndex > 0 && currentStepIndex < labels.length) ? (
                    <button
                      onClick={() => actionForm(Navigation.Previous)}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                    >
                      Précédent
                    </button>
                  ) : null}
                  {currentStepIndex < labels.length ? (
                    <button
                      onClick={() => actionForm(Navigation.Next)}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                    >
                      {currentStepIndex === labels.length - 1 ? "Créer le compte" : "Suivant"}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
