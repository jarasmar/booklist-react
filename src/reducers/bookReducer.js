// Include all functions that interact with a state into one single function (reducer)
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: state.length,
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
