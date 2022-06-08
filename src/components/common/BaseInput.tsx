import { FC, memo } from 'react';
import { useField } from 'formik';
import styled, { css } from 'styled-components';
import BaseText from './BaseText';
import BaseIconSvg from './BaseIconSvg';

export type BaseInputProps = {
  type: string;
  name: string;
  label?: string;
  placeHolder?: string;
};

const BaseInput: FC<BaseInputProps> = ({ name, label, placeHolder, type }) => {
  const [field, meta] = useField(name);
  const configInput = {
    ...field,
    id: name,
    autoComplete: 'off',
    type: type,
    placeholder: placeHolder!,
    status: ''
  };
  const configsInputWrapper = {
    status: ''
  };

  if (meta && meta.error) {
    configInput.status = 'invalid';
    configsInputWrapper.status = 'invalid';
  }
  if (meta && !meta.error) {
    configInput.status = 'valid';
    configsInputWrapper.status = 'valid';
  }
  if (field.value === '') {
    configInput.status = '';
    configsInputWrapper.status = '';
  }

  return (
    <BaseInputWrapper>
      {label && (
        <BaseInputLabel htmlFor={name}>
          <BaseText>{label}</BaseText>
        </BaseInputLabel>
      )}

      <StyledInputWrapper {...configsInputWrapper}>
        <StyledInput {...configInput} />
        {meta && meta.error && field.value !== '' && (
          <div className="input-icons">
            <BaseIconSvg iconName="error" width={24} height={24} />
          </div>
        )}
        {meta && !meta.error && field.value !== '' ? (
          <div className="input-icons">
            <BaseIconSvg iconName="success" width={24} height={24} />
          </div>
        ) : null}
      </StyledInputWrapper>

      {meta && meta.error && field.value !== '' && <BaseText type="small">{meta.error}</BaseText>}
    </BaseInputWrapper>
  );
};

export const BaseInputWrapper = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 32px;
  }

  .input-icons {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    > button {
      cursor: pointer;
    }
    > div {
      margin-left: 8px;
    }
  }
`;

export const StyledInputWrapper = styled.div<{ status: string }>`
  position: relative;
  ${({ status }) => {
    return (
      status === 'invalid' &&
      css`
        & ~ p {
          margin-top: 5px;
          color: ${({ theme }) => theme.colors.red};
          padding: 0px 10px;
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
        }
      `
    );
  }}
`;

export const StyledInput = styled.input<{ status: string }>`
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;
  padding: 16px 24px;
  padding-right: 84px;
  width: 100%;
  ${({ status }) => {
    switch (status) {
      case 'invalid':
        return css`
          background-color: ${({ theme }) => theme.colors.redPallet1};
          border: 1px solid ${({ theme }) => theme.colors.red};
        `;
      case 'valid':
        return css`
          background-color: ${({ theme }) => theme.colors.greenPallet1};
          border: 1px solid ${({ theme }) => theme.colors.green};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.gray};
        `;
    }
  }}
`;

export const BaseInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 6px;
  cursor: pointer;
`;

export default memo(BaseInput);
