import React, { useState } from 'react';
import './DragAndDrop.css'; // You can define your styles

const DragAndDrop = ({ items }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [list, setList] = useState(items);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (index) => {
   if(draggedItem===null) return

   const updatedList=[...list]
   const draggedElement=updatedList[draggedItem]

   updatedList.splice(draggedItem,1)
   updatedList.splice(index,0,draggedElement)

   setList(updatedList)
   setDraggedItem(index)
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <ul className="drag-and-drop-list">
      {list.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
          className={draggedItem === index ? 'dragged' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

// Example usage:


export default DragAndDrop;
