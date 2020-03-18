const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a static list and a static card"
      },
      {
        id: 1,
        text: "we used a mix between material UI React and styled component"
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "we will create our first reducer"
      },
      {
        id: 1,
        text: "and render many cards on our list with static data"
      },
      {
        id: 2,
        text: "we will also make some other changes"
      }
    ]
  }
];
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;