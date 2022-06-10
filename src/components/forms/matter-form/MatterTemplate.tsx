import { useAppSelector } from 'hooks/useRedux';
import { FC, ReactNode } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { MatterTemplateWrapper } from './Matter.styled';

type MatterTemplateProps = {
  children: ReactNode;
};

const MatterTemplate: FC<MatterTemplateProps> = ({ children }) => {
  const { step } = useAppSelector((state) => state.matter);

  return (
    <MatterTemplateWrapper>
      <Stepper activeStep={step}>
        <Step label="Create Matter" className="step-item" />
        <Step label="Upload documents" className="step-item" />
        <Step label="Checkout" className="step-item" />
        <Step label="Query & Analyze" className="step-item" />
      </Stepper>
      {children}
    </MatterTemplateWrapper>
  );
};

export default MatterTemplate;
