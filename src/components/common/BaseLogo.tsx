import { FC, memo } from 'react';
import srcLogo from 'assets/images/logo-colored.svg';
import srcLogoWhite from 'assets/images/logo-white.svg';
import styled from 'styled-components';

type BaseLogoProps = {
  whiteLogo?: boolean;
};

const BaseLogo: FC<BaseLogoProps> = ({ whiteLogo }) => {
  return (
    <BaseLogoWrapper>
      <img src={!whiteLogo ? srcLogo : srcLogoWhite} alt="Logo" width="100%" height="100%" />
    </BaseLogoWrapper>
  );
};

const BaseLogoWrapper = styled.div`
  display: flex;
  width: 134px;
  height: 80px;
`;

export default memo(BaseLogo);
