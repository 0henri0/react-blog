var initinalState = 0;

var myReducer = (state = initinalState, action) => {
  switch (action.type) {
    case "ADD":
      state = ++state;
      break;
    case "SUB":
      state = --state;
      break;
    default:
      state = 0;
      break;
  }

  return state;
};

export default myReducer;
