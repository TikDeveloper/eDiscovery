import { FC, memo } from 'react';
import BaseTitle from 'components/common/BaseTitle';
import { MatterFormContainer, MatterFormWrapper } from './Matter.styled';
import MatterTemplate from './MatterTemplate';
import { useAppSelector } from 'hooks/useRedux';
import MatterFormStep1 from './MatterFormStep1';
import BaseSpinner from 'components/common/BaseSpinner';
import MatterFormStep2 from './MatterFormStep2';

const MatterForm: FC = () => {
  const { step, loading } = useAppSelector((state) => state.matter);

  return (
    <MatterFormWrapper>
      <div className="matter-content">
        <BaseTitle> Logo </BaseTitle>
        <MatterFormContainer>
          <MatterTemplate>
            {step === 0 && <MatterFormStep1 />}
            {step === 1 && <MatterFormStep2 />}
          </MatterTemplate>
          {loading && <BaseSpinner forLayout />}
        </MatterFormContainer>
      </div>
      <div className="matter-image" />
    </MatterFormWrapper>
  );
};

export default memo(MatterForm);
