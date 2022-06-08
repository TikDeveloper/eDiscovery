import { useOutSide } from 'hooks/useOutside';
import { FC, memo, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import BaseIconSvg from './BaseIconSvg';
import BaseLogo from './BaseLogo';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';

type BaseModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

const BaseModal: FC<BaseModalProps> = ({ closeModal, children }) => {
  const modalRef = useRef(null);
  useOutSide(modalRef, closeModal);

  return (
    <BaseModalWrapper>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <motion.div
          className="modal-container"
          ref={modalRef}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}>
          <div className="modal-header">
            <BaseLogo />
            <button type="button" onClick={closeModal}>
              <BaseIconSvg iconName="close" width={24} height={24} />
            </button>
          </div>
          <div className="modal-content">{children}</div>
        </motion.div>
      </motion.div>
    </BaseModalWrapper>
  );
};

const BaseModalWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blackPallet1};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-container {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    min-height: 424px;
    min-width: 640px;
    position: relative;
    @media ${device.tablet} {
      min-width: unset;
      min-height: unset;
      width: 100%;
      margin: 0 16px;
    }
  }
  .modal-header {
    padding-top: 32px;
    position: relative;
    display: flex;
    justify-content: center;
    > button {
      cursor: pointer;
      position: absolute;
      right: 16px;
      top: 16px;
    }
    @media ${device.tablet} {
      padding-top: 16px;
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    padding-bottom: 48px;
    @media ${device.tablet} {
      padding-bottom: 32px;
    }
  }
`;

export default memo(BaseModal);
