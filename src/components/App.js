import React from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";

function App(props) {
  const { lists } = props;
  return (
    <div className="App">
      <h2>Trello Clone</h2>
      <div style={styles.listsContainer}>
        {lists.map(list => (
          <TrelloList title={list.title} cards={list.cards} key={list.id} />
        ))}
        <TrelloActionButton list />
      </div>
    </div>
  );
}

const styles = {
  listsContainer: {
    display: "flex"
  }
};

// return an object that will receive this component as props
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
