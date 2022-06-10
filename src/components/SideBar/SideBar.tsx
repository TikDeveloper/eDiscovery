import BaseIconSvg from 'components/common/BaseIconSvg';
import { Dispatch, FC, SetStateAction } from 'react';
import { SideBarWrapper, SideBarHeader, SideBarMenu, SideBarMenuItem } from './SideBar.style';
const menuItems = [
  {
    iconName: '',
    title: 'Home'
  },
  {
    iconName: '',
    title: 'Upload'
  },
  {
    iconName: '',
    title: 'Tags'
  },
  {
    iconName: '',
    title: 'History'
  }
];
type SideBarProps = {
  selectedBar: string;
  setSelectedBar: Dispatch<SetStateAction<string>>;
};
const SideBar: FC<SideBarProps> = ({ selectedBar, setSelectedBar }) => {
  return (
    <SideBarWrapper>
      <SideBarHeader>
        <h1>eDiscovery</h1>
      </SideBarHeader>
      <SideBarMenu>
        {menuItems.map(({ title }, key) => (
          <SideBarMenuItem
            key={key}
            isSelected={selectedBar === title}
            onClick={() => setSelectedBar(title)}
          >
            <BaseIconSvg iconName="lenseShow" width={24} height={24} />

            <p>{title}</p>
          </SideBarMenuItem>
        ))}
      </SideBarMenu>
    </SideBarWrapper>
  );
};

export default SideBar;
