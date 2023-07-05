import { useState, useEffect } from "react";
import { globalUserProps } from "../utils/types";
import { checkIsFollowed, getAllFollowers, getAllFollows, getUserById } from "./apolloClient/Queries";
import { useMutation } from "@apollo/client";
import { ADD_FOLLOW } from "./gql/AddFollow";
import { REMOVE_FOLLOW } from "./gql/RemoveFollow";
import { CURRENT_USER } from "./loggedUser/userLoged";
import { ApolloClientCall } from "./apolloClient/ApolloClient";

export default function ProfilUser({ userId }: { userId: number }) {
  const [user, setUser] = useState<globalUserProps>();
  useEffect(() => {
    getUserById(userId)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const userProfessionalStatus = user?.healthActor?.professional?.name || user?.professionalStatus || "";
  

  const [addFollow] = useMutation(ADD_FOLLOW, { client: ApolloClientCall });
  const [removeFollow] = useMutation(REMOVE_FOLLOW, { client: ApolloClientCall });
  const [isFollowing, setIsFollowing] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  let messageTimer: number | null = null;

  useEffect(() => {
    checkIsFollowed(CURRENT_USER, userId)
      .then((isFollowing) => {
        setIsFollowing(isFollowing);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [followerNumber, setFollowerNumber] = useState<number>(0);
  const [followNumber, setFollowNumber] = useState<number>(0);

  useEffect(() => {
    getAllFollowers(userId)
      .then((followerData) => {
        setFollowerNumber(followerData.length);
      })
      .catch((error) => {
        console.error(error);
      });
    getAllFollows(userId)
      .then((followData) => {
        setFollowNumber(followData.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleFollow = () => {
    if (isFollowing) {
      removeFollow({
        variables: {
          userId: userId,
          followerId: CURRENT_USER
        }
      })
      .then((result) => {
        const message = result.data.removeFollow;
        setIsFollowing(false);
        setFollowerNumber(prevFollowerNumber => prevFollowerNumber - 1);
        showMessageWithTimeout(message, 2000);
      })
      .catch((error) => {
        console.error(error);
        const message = "Une erreur s'est produite";
        showMessageWithTimeout(message, 2000);
      });
    } else {
      addFollow({
        variables: {
          userId: userId,
          followerId: CURRENT_USER
        }
      })
      .then((result) => {
        const message = result.data.addFollow;
        setIsFollowing(true);
        setFollowerNumber(prevFollowerNumber => prevFollowerNumber + 1);
        showMessageWithTimeout(message, 2000);
      })
      .catch((error) => {
        console.error(error);
        const message = "Une erreur s'est produite";
        showMessageWithTimeout(message, 2000);
      });
    }
  };
  
  const showMessageWithTimeout = (message: string, duration: number) => {
    setMessage(message);
    setShowMessage(true);

    if (messageTimer) {
      clearTimeout(messageTimer);
    }

    messageTimer = setTimeout(() => {
      setMessage('');
      setShowMessage(false);
    }, duration);
  };
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg col-span-3 relative">
      {showMessage && (
          <div
            className={`absolute top-2 left-2 p-1 mb-4 ${
              message.includes('erreur') ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
            } text-xs rounded`}
          >
            {message}
          </div>
      )}
      <div className="w-full">
        <img src={user?.profileBanner} alt="" className="h-[200px] w-full rounded-t-lg object-cover" />
      </div>
      <div className="flex flex-col items-center justify-between w-full px-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start justify-center ml-5 mr-5">
            <img
              src={user?.profilePicture}
              alt=""
              className="rounded-full w-24 h-24 border-4 border-solid border-white -mt-12"
            />
            <h2>
              {user?.firstname ?? ""} {user?.lastname ?? ""}
            </h2>
            <p className="text-xs text-slate-500">
              {user?.role ?? ""}
              
            </p>
            <p className="text-[12px] text-slate-500 bg-primary-300 p-[3px] text-white mt-1">
              {userProfessionalStatus}
            </p>
          </div>
          <div className="mt-2 ml-5 mr-5 flex flex-col justify-between">
            <div>
              <a
                className={`text-xs pt-1 pb-1 pr-2 pl-2 border rounded-lg cursor-pointer ${
                  isFollowing ? "bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white" : "bg-primary-300 border-primary-300 text-white hover:bg-white hover:text-primary-300"
                }`}
                onClick={toggleFollow}
              >
                {isFollowing ? "Ne plus suivre" : "Suivre"}
              </a>
              <a className="text-xs bg-primary-300 pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary-300 border border-primary-300 ml-1 rounded-lg text-white" href={`tel:${user?.phoneNumber}`}>Appeler</a>               
              <a className="text-xs bg-primary-300 pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary-300 border border-primary-300 ml-1 rounded-lg text-white" href='#'>Contacter</a>
            </div>
            {userId === CURRENT_USER ? (
              <div className="flex justify-end gap-4">
                <a href="/feed/suivis/abonnes" className="text-[14px] text-primary hover:underline">
                  <span className="text-primary-400">{followerNumber}</span> abonnés
                </a>
                <a href="/feed/suivis/abonnements" className="text-[14px] text-primary hover:underline">
                  <span className="text-primary-400">{followNumber}</span> abonnements
                </a>
              </div>
            ) : (
              <div className="flex justify-end gap-4">
                <span className="text-[14px] text-gray">
                  <span className="text-primary-400">{followerNumber}</span> abonnés
                </span>
                <span className="text-[14px] text-gray">
                  <span className="text-primary-400">{followNumber}</span> abonnements
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="ml-5 mr-5 pt-5 pb-5">
          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Tags</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1"></span>
            <div className="text-xxs flex flex-wrap mt-2">
              {user?.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-primary-100 rounded py-0.5 px-1 m-0.5"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Description</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <p className="text-xxs line-clamp-5 w-full">{user?.description}</p>
          </div>

          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Statut</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <div className="text-xxs line-clamp-5 w-full flex items-center flex-wrap">
            {user?.healthActor && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Type de service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.healthActor.careServiceType}</p>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.healthActor.supportServices}</p>
                  </div>
                </>
              )}
              {user?.researcher && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Type de service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user?.researcher?.researchUnitName}</p>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.researcher?.researchArea}</p>
                  </div>
                </>
              )}
              {user?.industrial && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Secteur industriel :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.industrial.careSector}</p>
                  </div>
                </>
              )}
              <div className="ml-4">
                <p className="text-xs line-clamp-5 w-full underline decoration-1">Réseau :</p>
                <p className="text-xxs line-clamp-5 w-full">{user?.healthNetwork}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Expérience</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <p className="text-xxs line-clamp-5 w-full">{user?.experiences}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
