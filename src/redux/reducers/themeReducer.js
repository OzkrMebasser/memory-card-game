
const initialState = {
  currentTheme: 'light-theme',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        
        currentTheme:
          state.currentTheme === 'light-theme'
            ? 'dark-theme'
            : state.currentTheme === 'dark-theme'
            ? 'colorful-theme'
            : 'light-theme',
      };
    default:
      console.log("state del reducer: " ,state)  
    return state;
      
  }
};

export default themeReducer;
