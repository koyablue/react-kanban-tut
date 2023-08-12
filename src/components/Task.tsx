import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border-radius: 10px;
  padding: 8px;
  /* color: #000; */
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const TaskContent = styled.div``

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`

const bgcolorChange = (props) => {
  if (props.isDragging) {
    return 'lightgreen';
  } else if (props.isDraggable) {
    if (props.isBacklog) {
      return '#f2d7d5';
    } else {
      return '#dcdcdc';
    }
  } else {
    if (props.isBacklog) {
      return '#f2d7d5';
    } else {
      return '#fffada';
    }
  }
};

// props = { task, index }

type Props = {
  task: any
  index: number
}
const Task = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{display: "flex", justifyContent: "start", padding: 2}}>
            <span>
              <small>
                #{task.id}
                {" "}
              </small>
            </span>
          </div>
        </Container>
      )}
    </Draggable>
  )
}

export default Task
