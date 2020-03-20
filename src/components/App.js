import React from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd"

function App(props) {
  const { lists } = props;
  const onDragEnd = () => {
    // reorder logic
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <h2>Trello Clone</h2>
      <div style={styles.listsContainer}>
        {lists.map(list => (
          <TrelloList
            listID={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
        <TrelloActionButton list />
      </div>
    </div>
    </DragDropContext>
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
