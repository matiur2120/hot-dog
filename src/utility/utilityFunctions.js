const onDragEnd = (result, columns, setColumns) =>{
  if(!result.destination) return;
 const {source, destination} = result
 if(source.droppableId !== destination.droppableId){
   const sourceCol = columns[source.droppableId]
   const destiCol = columns[destination.droppableId]
   
   const sourceColItem = [...sourceCol.items]
   const [removeItem] = sourceColItem.splice(source.index, 1)
   const destionColItem = [...destiCol.items]
   destionColItem.splice(destination.index, 0, removeItem)
   setColumns({
     ...columns,
     [source.droppableId]:{
       ...sourceCol,
       items: sourceColItem
     },
     [destination.droppableId]:{
       ...destiCol,
       items: destionColItem
     }
   })

 }else{
  const column = columns[source.droppableId]
  const copiedItems = [...column.items]
  const [removed] = copiedItems.splice(source.index, 1);
  copiedItems.splice(destination.index, 0, removed)
  setColumns({
    ...columns,
    [source.droppableId]:{
      ...column,
      items: copiedItems
    }
  })
 }
}
const  capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { onDragEnd, capitalizeFirstLetter };

