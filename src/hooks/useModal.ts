import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = useCallback((): void => {
    setIsModal(true);
  }, []);

  const closeModal = useCallback((): void => {
    setIsModal(false);
  }, []);

  return {
    isModal,
    openModal,
    closeModal
  };
};
