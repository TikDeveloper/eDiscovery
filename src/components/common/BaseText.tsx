import styled, { css } from 'styled-components';

type BaseTextProps = {
  textTransform?: string;
  fw?: number;
  type?: string;
};

const BaseText = styled.p<BaseTextProps>`
  text-transform: ${(props) => props.textTransform};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${(props) => props.fw || 400};

  ${(props) => {
    switch (props.type) {
      case 'small':
        return css`
          font-size: ${props.theme.typography.text.small.size};
          line-height: ${props.theme.typography.text.small.lineHeight};
        `;
      case 'big':
        return css`
          font-size: ${props.theme.typography.text.big.size};
          line-height: ${props.theme.typography.text.big.lineHeight};
        `;
      default:
        return css`
          font-size: ${props.theme.typography.text.default.size};
          line-height: ${props.theme.typography.text.default.lineHeight};
        `;
    }
  }}
`;

export default BaseText;
