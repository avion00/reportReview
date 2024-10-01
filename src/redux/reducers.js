const initialState = {
  reportData: null,
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPORT_DATA':
      return {
        ...state,
        reportData: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
