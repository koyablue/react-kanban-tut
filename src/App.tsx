import { useState } from "react"
import "./App.css"
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd"

// https://www.youtube.com/watch?v=dRLYO1-dhQU

const listItems = [
  {
    id: "1",
    name: "Study Spanish",
  },
  {
    id: "2",
    name: "Workout",
  },
  {
    id: "3",
    name: "Film YouTube",
  },
  {
    id: "4",
    name: "Grocery Shop",
  },
]

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px`,
  background: isDragging ? "#4a2975" : "white",
  color: isDragging ? "white" : "black",
  border: `1px solid black`,
  borderRadius: `5px`,

  ...draggableStyle,
})

function App() {
  const [todo, setTodo] = useState(listItems)

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result
    if (!destination) return

    const items = Array.from(todo)

    const [newOrder] = items.splice(source.index, 1)
    // const newOrder = items.splice(source.index, 1)[0]
    console.log("newOrder:", newOrder)

    items.splice(destination.index, 0, newOrder)

    setTodo(items)
  }

  return (
    <div className="
    ">
      <h1>Drag and Drop</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="todo"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todo.map(({id, name}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {name}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}

export default App
