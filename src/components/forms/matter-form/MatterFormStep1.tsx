import { FC, memo } from 'react';
import BaseInput from 'components/common/BaseInput';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { FORM_VALIDATION_MATTER_NAME, VALUES_MATTER_NAME } from 'utils/validations';
import { Step1Wrapper } from './Matter.styled';
import BaseText from 'components/common/BaseText';
import { createMatter, fillMatterName, nextStep } from 'store/slices/matter.slice';
import BaseTitle from 'components/common/BaseTitle';
import MatterFormNavigator from './MatterFormNavigator';

const MatterFormStep1: FC = () => {
  const { matterName } = useAppSelector((state) => state.matter);
  const dispatch = useAppDispatch();

  const onSubmitMatterName = async (
    values: VALUES_MATTER_NAME,
    helpers: FormikHelpers<VALUES_MATTER_NAME>
  ) => {
    const asyncAction = await dispatch(createMatter({ matter_name: values.matterName }));
    if (asyncAction.type === String(createMatter.fulfilled)) {
      dispatch(fillMatterName(values));
      dispatch(nextStep());
    } else {
      helpers.resetForm();
    }
    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        matterName: matterName
      }}
      validationSchema={FORM_VALIDATION_MATTER_NAME}
      onSubmit={onSubmitMatterName}
    >
      {({ isSubmitting }) => (
        <Form>
          <Step1Wrapper>
            <BaseTitle>Matter Name</BaseTitle>
            <BaseInput type="text" name="matterName" />
            <BaseText>{`(This can be customer name or any meaningful name for the matter)`}</BaseText>
          </Step1Wrapper>
          <MatterFormNavigator isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default memo(MatterFormStep1);
