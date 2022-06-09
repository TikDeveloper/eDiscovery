import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { FC, ReactNode } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { MatterFormActions, MatterTemplateWrapper } from './Matter.styled';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import BaseText from 'components/common/BaseText';
import BaseButton from 'components/common/BaseButton';
import { prevStep } from 'store/slices/matter.slice';

type MatterTemplateProps = {
  children: ReactNode;
};

const MatterTemplate: FC<MatterTemplateProps> = ({ children }) => {
  const { step, loading } = useAppSelector((state) => state.matter);
  const dispatch = useAppDispatch();

  return (
    <MatterTemplateWrapper>
      <div>
        <Stepper activeStep={step}>
          <Step label="Create Matter" className="step-item" />
          <Step label="Upload documents" className="step-item" />
          <Step label="Checkout" className="step-item" />
          <Step label="Query & Analyze" className="step-item" />
        </Stepper>
        {children}
      </div>

      <MatterFormActions>
        {step > 0 ? (
          <BaseButton
            onClick={() => dispatch(prevStep())}
            type="button"
            mode="filled"
            disabled={loading}
          >
            <AiOutlineDoubleLeft size={16} style={{ marginRight: '8px' }} color="#fff" />
            <BaseText fw={500}> Back </BaseText>
          </BaseButton>
        ) : null}

        <BaseButton type="submit" mode="filled" disabled={loading}>
          <BaseText> Next </BaseText>
          <AiOutlineDoubleRight size={16} style={{ marginLeft: '8px' }} color="#fff" />
        </BaseButton>
      </MatterFormActions>
    </MatterTemplateWrapper>
  );
};

export default MatterTemplate;
