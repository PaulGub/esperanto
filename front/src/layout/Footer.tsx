import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Esperanto.png';

export default function Footer() {
    return (
        <>
            <footer className="px-8 bg-white w-full p-8 mt-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt="Esperanto Logo" className="h-10 mr-4" />
                            </div>
                            <p className="text-gray-500">Connectez-vous dans un monde sans frontière avec Esperanto.</p>
                        </div>
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h4 className="text-xl font-bold mb-4">Contact</h4>
                            <p className="text-gray-500">05 56 78 54 56</p>
                            <p className="text-gray-500">15 rue de Naudet, 33000 Bordeaux</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-center">
                            <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-100 py-4">
                <p className="text-sm text-gray-500 text-center">Copyright &copy; 2023 - Créé par une équipe de l'IUT de Bordeaux (LP Dawin)</p>
            </div>
        </>
    );
}