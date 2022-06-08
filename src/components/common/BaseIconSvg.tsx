import { FC, memo } from 'react';
import iconPaths from 'assets/data/icons.json';
import styled from 'styled-components';

type IconName = keyof typeof iconPaths;

type BaseIconProps = {
  iconName: IconName;
  width: number;
  height: number;
};

const BaseIcon: FC<BaseIconProps> = ({ iconName, width, height }) => {
  return (
    <BaseIconWrapper {...{ width, height }}>
      <svg
        {...{ width, height }}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: iconPaths[iconName] }}
      />
    </BaseIconWrapper>
  );
};

const BaseIconWrapper = styled.div`
  display: flex;
`;

export default memo(BaseIcon);
