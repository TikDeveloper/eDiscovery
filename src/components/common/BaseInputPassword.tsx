import { FC, memo, useCallback, useState } from 'react';
import { useField } from 'formik';
import BaseText from './BaseText';
import BaseIconSvg from './BaseIconSvg';
import { BaseInputLabel, BaseInputProps, BaseInputWrapper, StyledInput } from './BaseInput';

const BaseInput: FC<BaseInputProps> = ({ name, label, placeHolder, type }) => {
  const [inputType, setInputType] = useState(type);

  const [field, meta] = useField(name);
  const configInput = {
    ...field,
    id: name,
    autoComplete: 'off',
    type: inputType,
    placeholder: placeHolder!,
    status: ''
  };

  if (meta && meta.error) {
    configInput.status = 'invalid';
  }
  if (meta && !meta.error) {
    configInput.status = 'valid';
  }
  if (field.value === '') {
    configInput.status = '';
  }
  const togglePassInputType = useCallback(() => {
    setInputType((prev) => {
      if (prev === 'password') {
        return 'text';
      }
      return 'password';
    });
  }, []);

  return (
    <BaseInputWrapper>
      {label && (
        <BaseInputLabel htmlFor={name}>
          <BaseText>{label}</BaseText>
        </BaseInputLabel>
      )}
      <StyledInput {...configInput} />

      <div className="input-icons">
        <button type="button" onClick={() => togglePassInputType()}>
          {inputType === 'password' ? (
            <BaseIconSvg iconName="lenseShow" width={24} height={24} />
          ) : (
            <BaseIconSvg iconName="lenseHide" width={24} height={24} />
          )}
        </button>

        {meta && meta.error && field.value !== '' && (
          <BaseIconSvg iconName="error" width={24} height={24} />
        )}
        {meta && !meta.error && field.value !== '' ? (
          <BaseIconSvg iconName="success" width={24} height={24} />
        ) : null}
      </div>

      {meta && meta.error && field.value !== '' && <BaseText type="small">{meta.error}</BaseText>}
    </BaseInputWrapper>
  );
};

export default memo(BaseInput);
