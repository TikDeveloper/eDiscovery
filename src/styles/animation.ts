export const fadeTop = {
  initial: {
    opacity: 0,
    y: '100%'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      transition: {
        type: 'easeInOut'
      }
    }
  }
};

export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      transition: {
        type: 'easeInOut'
      }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      transition: {
        type: 'easeInOut'
      }
    }
  }
};

export const pageFadeAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
