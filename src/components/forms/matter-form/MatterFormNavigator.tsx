import BaseButton from 'components/common/BaseButton';
import { FC, memo } from 'react';
import { MatterFormActions } from './Matter.styled';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { nextStep, prevStep } from 'store/slices/matter.slice';
import BaseText from 'components/common/BaseText';

type MatterFormNavigatorProps = {
  isSubmitting: boolean;
};

const MatterFormNavigator: FC<MatterFormNavigatorProps> = ({ isSubmitting }) => {
  const { step, loading, matterId } = useAppSelector((state) => state.matter);
  const dispatch = useAppDispatch();

  return (
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
        type={matterId && step === 0 ? 'button' : 'submit'}
        mode="filled"
        disabled={loading || isSubmitting}
        onClick={matterId && step === 0 ? () => dispatch(nextStep()) : undefined}
      >
        <BaseText> Next </BaseText>
        <AiOutlineDoubleRight size={16} style={{ marginLeft: '8px' }} color="#fff" />
      </BaseButton>
    </MatterFormActions>
  );
};

export default memo(MatterFormNavigator);
