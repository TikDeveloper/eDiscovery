import { FC, memo } from 'react';
import BaseButton from 'components/common/BaseButton';
import BaseInput from 'components/common/BaseInput';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { FORM_VALIDATION_MATTER_NAME, VALUES_MATTER_NAME } from 'utils/validations';
import { MatterFormActions, Step1Wrapper } from './Matter.styled';
import BaseText from 'components/common/BaseText';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { fillMatterName, prevStep } from 'store/slices/matter.slice';
import BaseTitle from 'components/common/BaseTitle';

const MatterFormStep1: FC = () => {
  const { step, loading, matterName } = useAppSelector((state) => state.matter);
  const dispatch = useAppDispatch();

  const onSubmitMatterName = async (
    values: VALUES_MATTER_NAME,
    helpers: FormikHelpers<VALUES_MATTER_NAME>
  ) => {
    console.log('values', values);
    console.log('helpers', helpers);
    await dispatch(fillMatterName(values));
  };

  return (
    <Formik
      initialValues={{
        matterName: matterName
      }}
      validationSchema={FORM_VALIDATION_MATTER_NAME}
      onSubmit={onSubmitMatterName}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Step1Wrapper>
            <BaseTitle>Matter Name</BaseTitle>
            <BaseInput type="text" name="matterName" />
          </Step1Wrapper>

          <MatterFormActions>
            {step > 0 ? (
              <BaseButton
                onClick={() => dispatch(prevStep())}
                type="button"
                mode="filled"
                disabled={loading || isSubmitting}
              >
                <AiOutlineDoubleLeft size={16} style={{ marginRight: '8px' }} color="#fff" />
                <BaseText fw={500}> Back </BaseText>
              </BaseButton>
            ) : null}

            <BaseButton
              type="button"
              mode="filled"
              disabled={loading || isSubmitting}
              onClick={() => submitForm()}
            >
              <BaseText> Next </BaseText>
              <AiOutlineDoubleRight size={16} style={{ marginLeft: '8px' }} color="#fff" />
            </BaseButton>
          </MatterFormActions>
        </Form>
      )}
    </Formik>
  );
};

export default memo(MatterFormStep1);
