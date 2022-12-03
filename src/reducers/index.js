const initialState = {
  jobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        jobs: {
          ...state.cities,
          content: [...state.cities.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        cities: {
          ...state.cities,
          content: state.cities.content.filter((cities, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
