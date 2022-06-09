import { FC, memo } from 'react';
import BaseTitle from 'components/common/BaseTitle';
import { MatterFormContainer, MatterFormWrapper } from './Matter.styled';

const MatterForm: FC = () => {
  // const onSubmit = async (values: VALUES_SIGN_IN, helpers: FormikHelpers<VALUES_SIGN_IN>) => {
  //   console.log('values', values);
  //   console.log('helpers', helpers);
  // };

  return (
    <MatterFormWrapper>
      <div className="matter-content">
        <BaseTitle> Logo </BaseTitle>
        <MatterFormContainer></MatterFormContainer>
      </div>
      <div className="matter-image" />
    </MatterFormWrapper>
  );
};

export default memo(MatterForm);
