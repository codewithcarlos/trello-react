import React from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
`;

function App(props) {
  const { lists } = props;
  const onDragEnd = result => {
    const { destination, source, draggableID, type } = result;

    if (!destination) return;
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h2>Trello Clone</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton list />
            </ListContainer>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

// return an object that will receive this component as props
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
