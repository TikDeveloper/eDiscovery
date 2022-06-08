import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

type BaseTitleProps = {
  textTransform?: string;
  fw?: number;
  type?: string;
};

const BaseTitle = styled.p<BaseTitleProps>`
  text-transform: ${(props) => props.textTransform || 'capitalize'};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${(props) => props.fw || 400};

  ${(props) => {
    switch (props.type) {
      case 'big':
        return css`
          font-size: ${props.theme.typography.title.big.size};
          line-height: ${props.theme.typography.title.big.lineHeight};
          @media ${device.tablet} {
            font-size: ${props.theme.media.typography.title.big.size};
            line-height: ${props.theme.media.typography.title.big.lineHeight};
          }
        `;
      case 'small':
        return css`
          font-size: ${props.theme.typography.title.small.size};
          line-height: ${props.theme.typography.title.small.lineHeight};
          @media ${device.tablet} {
            font-size: ${props.theme.media.typography.title.small.size};
            line-height: ${props.theme.media.typography.title.small.lineHeight};
          }
        `;
      default:
        return css`
          font-size: ${props.theme.typography.title.default.size};
          line-height: ${props.theme.typography.title.default.lineHeight};
          @media ${device.tablet} {
            font-size: ${props.theme.media.typography.title.default.size};
            line-height: ${props.theme.media.typography.title.default.lineHeight};
          }
        `;
    }
  }}
`;

export default BaseTitle;
