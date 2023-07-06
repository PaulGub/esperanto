import Modal from 'react-modal';
import { useState } from "react";
import FormInput from "./FormInput.tsx";

export interface ListModalProps {
  modalIsOpen: boolean,
  createLabel: string,
  closeModal: any,
  createList: any,
  children?: any
}
export default function ListModal({ modalIsOpen, createLabel, closeModal, createList, children }: ListModalProps) {

  Modal.setAppElement('#root');

  const [isCreating, setIsCreating] = useState(false);
  const [listName, setListName] = useState("");

  const customStyles = {
    overlay: {
      background: 'rgba(0,0,0, 0.6)',
      zIndex: 100,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'none',
      borderRadius: '10px',
      padding: 0,
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleCloseModal = () => {
    setIsCreating(false);
    closeModal();
  }

  const handleCreateList = () => {
    createList(listName)
    handleCloseModal()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={"flex gap-4 justify-between items-center px-4 py-3"}>
        <h2 className={"text-sm"}>Ajouter dans...</h2>
        <a className={"border-none p-1.5 cursor-pointer rounded-full transition-colors hover:bg-primary-100"} onClick={handleCloseModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </div>

      {children}

      {!isCreating ?
        <div onClick={() => setIsCreating(true)} className={"flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-primary-100"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className={"text-xs "}>Créer une liste {createLabel}</p>
        </div> :
        <div className={"pt-5"}>
          <div className={"px-4"}>
            <FormInput id={"userListName"} label={"Nom de la liste"} value={listName} setValue={setListName} />
          </div>
          <div className={"flex justify-end pb-2 pr-2"}>
            <div onClick={handleCreateList} className={"text-xs px-3 py-2 rounded-full text-primary cursor-pointer transition-colors hover:bg-primary-100"}>Créer</div>
          </div>
        </div>
      }
    </Modal>
  );
}