import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`

// props = { title, tasks, id }

type Props = {
  title: string
  id: string
}

const Column = ({ title, id }: Props) => {
  return (
    <Container>
      <Title style={{
        backgroundColor: 'lightblue',
        position: 'sticky',
      }}>
        {title}
      </Title>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            //TODO: provide your task
            {provided.placeholder}
          </TaskList>
        }}
      </Droppable>

    </Container>
  )
}

export default Column
