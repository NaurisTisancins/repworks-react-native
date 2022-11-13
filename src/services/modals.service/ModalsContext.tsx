import React, { createContext, FC, useContext, useState } from 'react';

type ModalType = 'create-routine-imput' | 'none';

type ModalsContextProps = {
  currentModal: ModalData;
  openModal: (type: ModalData) => void;
  closeModal: (type: ModalType) => void;
  closeCurrentModal: () => void;
  toggleModal: (type: ModalType) => void;
};

const initial: ModalsContextProps = {
  currentModal: { type: 'none' },
  openModal: () => {},
  closeModal: () => {},
  closeCurrentModal: () => {},
  toggleModal: () => {},
};

type Props = {
  children?: React.ReactNode;
};

type ModalAdditionalDataType = string;

type ModalData = {
  data?: ModalAdditionalDataType;
  type: ModalType;
  onConfirm?: () => void;
};

const ModalsContext = createContext<ModalsContextProps>(initial);
const ModalsProvider: FC<Props> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<ModalData>(
    initial.currentModal
  );

  const openModal = (data: ModalData) => {
    setCurrentModal(data);
  };

  const closeModal = () => {
    setCurrentModal({ type: 'none' });
  };

  const closeCurrentModal = () => {
    setCurrentModal({ type: 'none' });
  };

  const toggleModal = (type: ModalType) => {
    if (currentModal.type === 'none') {
      setCurrentModal({ type });
    } else if (currentModal.type === type) {
      setCurrentModal({ type: 'none' });
    }
  };

  return (
    <ModalsContext.Provider
      value={{
        currentModal,
        openModal,
        closeModal,
        closeCurrentModal,
        toggleModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

const useModalsContext = () => useContext(ModalsContext);

export { ModalsProvider, useModalsContext };
