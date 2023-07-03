import { useState } from "react";
import { createUser } from "../client/client";
import ProgressSteps from "../components/ProgressSteps";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [healthNetwork, setHealthNetwork] = useState("");
  const [professionalStatus, setProfessionalStatus] = useState("");
  const [experiences, setExperiences] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <div className="mt-16 min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <ProgressSteps currentStepIndex={currentStepIndex} labels={labels}></ProgressSteps>
            <div>
              <h1 className="text-2xl font-semibold">Créer un compte</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {labels[currentStepIndex] === Labels.Step1 ? 
                  (<div>
                    <div className="relative">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="shadow-none active:outline-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Nom"
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Nom
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Prénom"
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Prénom
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Mot de passe"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Mot de passe
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Rôle"
                      />
                      <label
                        htmlFor="role"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Rôle
                      </label>
                    </div>
                  </div>) 
                : labels[currentStepIndex] === Labels.Step2 ? 
                  (<div>
                    <div className="relative">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Numéro de téléphone"
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Numéro de téléphone
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="healthNetwork"
                        name="healthNetwork"
                        type="text"
                        value={healthNetwork}
                        onChange={(e) => setHealthNetwork(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Réseau de santé"
                      />
                      <label
                        htmlFor="healthNetwork"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Réseau de santé
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="professionalStatus"
                        name="professionalStatus"
                        type="text"
                        value={professionalStatus}
                        onChange={(e) => setProfessionalStatus(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Statut professionnel"
                      />
                      <label
                        htmlFor="professionalStatus"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Statut professionnel
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="experiences"
                        name="experiences"
                        type="text"
                        value={experiences}
                        onChange={(e) => setExperiences(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Expériences"
                      />
                      <label
                        htmlFor="experiences"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Expériences
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="shadow-none peer placeholder-transparent h-20 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        placeholder="Description"
                      />
                      <label
                        htmlFor="description"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Description
                      </label>
                    </div>
                  </div>) 
                : 
                  (<div></div>)}
                <div className="relative flex gap-4">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => actionForm(Navigation.Previous)}>Précédent</button>
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => actionForm(Navigation.Next)}>Suivant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
