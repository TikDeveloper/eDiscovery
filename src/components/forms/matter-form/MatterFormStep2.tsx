import { FC, memo } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { Step2Wrapper } from './Matter.styled';
import { addDocuments, nextStep } from 'store/slices/matter.slice';
import MatterFormNavigator from './MatterFormNavigator';
import BaseTitle from 'components/common/BaseTitle';
import BaseText from 'components/common/BaseText';

const MatterFormStep2: FC = () => {
  const { files } = useAppSelector((state) => state.matter);
  const dispatch = useAppDispatch();

  const onSubmitDocuments = async (
    values: { files: File[] },
    helpers: FormikHelpers<{ files: File[] }>
  ) => {
    const asyncAction = await dispatch(addDocuments(values));
    if (asyncAction.type === String(addDocuments.fulfilled)) {
      dispatch(nextStep());
    }
    helpers.setSubmitting(false);
    helpers.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          files: files
        }}
        onSubmit={onSubmitDocuments}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <Step2Wrapper>
              <BaseTitle>Upload Documents</BaseTitle>
              <div>
                <input
                  name="files"
                  type="file"
                  multiple
                  onChange={(event) => {
                    setFieldValue('files', event.currentTarget.files);
                  }}
                />
              </div>

              <BaseText>{`Dont worry you can upload files later too`}</BaseText>
            </Step2Wrapper>
            <MatterFormNavigator isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default memo(MatterFormStep2);
