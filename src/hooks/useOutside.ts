import { RefObject, useEffect } from 'react';

export const useOutSide = (modalRef: RefObject<HTMLDivElement>, closeModal: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, closeModal]);
};
