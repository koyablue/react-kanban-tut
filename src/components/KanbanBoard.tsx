import { useState } from 'react'

import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column'

const KanbanBoard = () => {
  const [completed, setCompleted] = useState([])
  const [incomplete, setIncomplete] = useState([])

  return (
    <DragDropContext>
      <h2 style={{ textAlign: 'center' }}>PROGRESS BOARD</h2>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >

      <Column title='TODO' tasks={incomplete} id={'1'} />
    </div>

    </DragDropContext>
  )
}

export default KanbanBoard
