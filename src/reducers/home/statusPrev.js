var initinalState = "unfulfilled!";

var myReducer = (state = initinalState, action) => {
  switch (action.type) {
    case "ADD":
      state = "addition!";
      break;
    case "SUB":
      state = "subtraction!";
      break;
    default:
      state = "unfulfilled!";
      break;
  }

  return state;
};

export default myReducer;
