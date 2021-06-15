import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// fake data generator
const getItems = (count) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,
    boxShadow: 'var(--elevation-z4)',
    borderRadius: '4px',
    // change background colour if dragging
    background: isDragging ? 'var(--primary)' : 'var(--bg-paper)',

    // styles we need to apply on draggables
    ...draggableStyle,
})

const getListStyle = (isDraggingOver) => ({
    borderRadius: '4px',
    background: isDraggingOver ? 'rgba(0,0,0, .1)' : 'var(--bg-default)',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
})

const SimpleHorizontalList = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(getItems(6))
    }, [])

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return
        }

        const tempItems = reorder(
            item,
            result.source.index,
            result.destination.index
        )
        setItem(tempItems)
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {item.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default SimpleHorizontalList
