export type ThemeType = typeof theme;
export const theme = {
  // ************* Fonts ************* //
  typography: {
    family: 'Montserrat, sans-serif',
    title: {
      default: {
        size: '36px',
        lineHeight: '48px'
      },
      big: {
        size: '48px',
        lineHeight: '72px'
      },
      small: {
        size: '28px',
        lineHeight: '36px'
      }
    },
    text: {
      default: {
        size: '16px',
        lineHeight: '24px'
      },
      big: {
        size: '24px',
        lineHeight: '32px'
      },
      small: {
        size: '12px',
        lineHeight: '16px'
      }
    }
  },

  // ************* Colors ************* //
  colors: {
    white: '#FFFFFF',

    black: '#000000',
    blackPallet1: 'rgba(0, 0, 0, 0.4)',

    gray: '#abaaaa',
    grayPallet1: '#f3f2ef',

    red: '#d83e4b',
    redPallet1: '#fbeced',

    green: '#87c87b',
    greenPallet1: '#dff1dc',

    blue: '#2F4858',
    bluePallet1: '#183241',
    bluePallet2: '#ECF2F8',
    bluePallet3: '#EEF2F9',
    bluePallet4: '#F9FAFD',
    bluePallet5: '#2C7BE6'
  },

  // ************* Media ************* //
  media: {
    typography: {
      title: {
        default: {
          size: '28px',
          lineHeight: '36px'
        },
        big: {
          size: '32px',
          lineHeight: '48px'
        },
        small: {
          size: '20px',
          lineHeight: '30px'
        }
      }
    }
  }
};
