import BaseButton from 'components/common/BaseButton';
import BaseTitle from 'components/common/BaseTitle';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import React, { FC, memo, ReactNode, useCallback, useState } from 'react';
import { INITIAL_VALUES_SIGN_IN, VALUES_SIGN_IN } from 'utils/validations';
import { MatterFormActions, MatterFormContainer, MatterFormWrapper } from './Matter.styled';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import BaseText from 'components/common/BaseText';
import { Stepper, Step } from 'react-form-stepper';

const MatterForm: FC = () => {
  const onSubmit = async (values: VALUES_SIGN_IN, helpers: FormikHelpers<VALUES_SIGN_IN>) => {
    console.log('values', values);
    console.log('helpers', helpers);
  };

  return (
    <MatterFormWrapper>
      <div className="matter-content">
        <BaseTitle> Logo </BaseTitle>
        <MatterFormContainer>
          <MatterFormStepper initialValues={INITIAL_VALUES_SIGN_IN} onSubmit={onSubmit}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </MatterFormStepper>
        </MatterFormContainer>
      </div>
      <div className="matter-image" />
    </MatterFormWrapper>
  );
};

type MatterFormStepperProps = {
  children: ReactNode;
};

const MatterFormStepper: FC<MatterFormStepperProps & FormikConfig<VALUES_SIGN_IN>> = ({
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [, setCompleted] = useState(false);

  const isLastStep = useCallback(() => {
    return step === childrenArray.length - 1;
  }, [step, childrenArray]);

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setStep(0);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div>
            <Stepper activeStep={step}>
              <Step label="Create Matter" className="step-item" />
              <Step label="Upload documents" className="step-item" />
              <Step label="Checkout" className="step-item" />
              <Step label="Query & Analyze" className="step-item" />
            </Stepper>

            {currentChild}
          </div>

          <MatterFormActions>
            {step > 0 ? (
              <BaseButton
                disabled={isSubmitting}
                onClick={() => setStep((s) => s - 1)}
                type="button"
                mode="filled"
              >
                <AiOutlineDoubleLeft size={16} style={{ marginRight: '8px' }} color="#fff" />
                <BaseText fw={500}> Back </BaseText>
              </BaseButton>
            ) : null}

            <BaseButton disabled={isSubmitting} type="submit" mode="filled">
              {!isLastStep() ? (
                <>
                  <BaseText> Next </BaseText>
                  <AiOutlineDoubleRight size={16} style={{ marginLeft: '8px' }} color="#fff" />
                </>
              ) : (
                <>
                  <BaseText> Submit </BaseText>
                </>
              )}
            </BaseButton>
          </MatterFormActions>
        </Form>
      )}
    </Formik>
  );
};

export default memo(MatterForm);
