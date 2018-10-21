const theme = {
  dark: {
    HEADER: '#262626',
    BACKGROUND: '#313131',
    CARDS: '#292929',
    TEXT: 'rgba(255, 255, 255, 1)',
    TEXT_OPACITY_VAR1: 'rgba(255, 255, 255, 0.9)',
    TEXT_OPACITY_VAR2: 'rgba(255, 255, 255, 0.85)',
    TEXT_DD: 'rgba(0, 0, 0, 0.7)',
  },
  light: {
    HEADER: '#EFEFEF',
    BACKGROUND: '#FFF',
    CARDS: '#F2F2F2',
    TEXT: 'rgba(0, 0, 0, 1)',
    TEXT_OPACITY_VAR1: 'rgba(0, 0, 0, 0.9)',
    TEXT_OPACITY_VAR2: 'rgba(0, 0, 0, 1)',
    TEXT_DD: 'rgba(255, 255, 255, 0.7)',
  },
  ACTION: '#BD00FF'
};

export const getThemeStyle = (darkTheme) => {
  return (darkTheme ? {
    header: theme.dark.HEADER,
    background: theme.dark.BACKGROUND,
    cards: theme.dark.CARDS,
    text: theme.dark.TEXT,
    textOpacity1: theme.dark.TEXT_OPACITY_VAR1,
    textOpacity2: theme.dark.TEXT_OPACITY_VAR2,
    textDD: theme.dark.TEXT_DD,
    action: theme.ACTION
  } : {
      header: theme.light.HEADER,
      background: theme.light.BACKGROUND,
      cards: theme.light.CARDS,
      text: theme.light.TEXT,
      textOpacity1: theme.light.TEXT_OPACITY_VAR1,
      textOpacity2: theme.light.TEXT_OPACITY_VAR2,
      textDD: theme.light.TEXT_DD,
      action: theme.ACTION
    });
}