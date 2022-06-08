const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px'
};

export const device = {
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  mobile: `screen and (max-width: ${size.mobile})`
};
