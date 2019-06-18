export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({ type: TOGGLE_THEME });

const initialState = {
  themeId: 'light',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TOGGLE_THEME:
      return {
        ...state,
        themeId: state.themeId === 'light' ? 'dark' : 'light'
      };
   
    default: return state;
  }
};