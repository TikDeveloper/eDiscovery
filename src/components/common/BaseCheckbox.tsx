import { memo, FC, ChangeEvent } from 'react';
import { useField, useFormikContext } from 'formik';
import styled from 'styled-components';
import BaseText from './BaseText';

type BaseCheckboxProps = {
  name: string;
  label?: string;
};

const BaseCheckbox: FC<BaseCheckboxProps> = ({ name, label }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, e.target.checked);
  };

  const configCheckbox = {
    ...field,
    id: name,
    type: 'checkbox',
    onChange: handleChange,
    checked: field.value
  };

  return (
    <BaseCheckboxWrapper>
      <input {...configCheckbox} />
      {label && (
        <BaseCheckboxLabel htmlFor={name}>
          <BaseText>{label}</BaseText>
        </BaseCheckboxLabel>
      )}
    </BaseCheckboxWrapper>
  );
};

const BaseCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  > input {
    width: 16px;
    height: 16px;
  }
`;

const BaseCheckboxLabel = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;

export default memo(BaseCheckbox);
