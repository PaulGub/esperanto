import { useState } from "react";
import FormInput from "../components/FormInput";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOG_USER } from "../components/gql/LogUser";
import { ApolloClientCall } from "../components/apolloClient/ApolloClient";

export default function Login() {
    const navigate = useNavigate();

    let [message, setMessage] = useState<string>("");
    let [errorMessage, setErrorMessage] = useState<string>("");

    let [email, setEmail] = useState<string>("");
    let [password, setPassword] = useState<string>("");

    const [logUser] = useMutation(LOG_USER, { client: ApolloClientCall });

    function actionForm() {
        setMessage("");
        setErrorMessage("");

        if (email === "" || password === "") {
            setErrorMessage("Veuillez entrer votre email et votre mot de passe");
            return;
        }
        logUser({
            variables: {
                email: email,
                password: password
            }
        }).then((data) => {
            const userData = data.data.logUser;
            if (userData) {
                const userId = userData.id;
                const userEmail = userData.email;
                const userFirstname = userData.firstname;
                console.log(userId);
                console.log(userEmail);
                console.log(userFirstname);
                
                localStorage.setItem('userId', userId); // Stockez l'ID de l'utilisateur dans le local storage
                localStorage.setItem('userEmail', userEmail); // Stockez l'e-mail de l'utilisateur dans le local storage
                localStorage.setItem('userFirstname', userFirstname);

                setMessage("Connection réussi !");
                navigate('/');
                window.location.reload();
                return;
            }
            setErrorMessage("Email ou mot de passe incorrect");
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error.message);
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Se connecter</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {errorMessage && (
                                    <div className="text-red-400 text-sm mb-4">{errorMessage}</div>
                                )}
                                {!errorMessage && message && (
                                    <div className="text-primary-400 text-sm mb-4">{message}</div>
                                )}
                                <div className="flex flex-col gap-4">
                                    <FormInput id="email" type="email" label="Email" value={email} setValue={setEmail} isOptional={false}></FormInput>
                                    <FormInput id="password" type="password" label="Password" value={password} setValue={setPassword} isOptional={false}></FormInput>
                                </div>
                                <div className="pt-4 flex flex-col items-center gap-2">
                                    <button onClick={() => actionForm()} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Se connecter</button>
                                    <NavLink
                                        to={"/register"}
                                        className="w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                                    >S'enregistrer</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
