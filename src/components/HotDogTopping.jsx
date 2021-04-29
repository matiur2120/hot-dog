import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 hot_dog_topping_box:{
   border: '1px solid lightblue',
   background: '#FAFAFA',
   marginBottom: '20px',
   borderRadius: '5px',
   '&>h2':{
     alignItem: 'center',
     fontSize: '2rem',
     width: '100%',
     padding: '5px 0px',
     textAlign: 'center'
   }
  
 }
}));

const HotDogTopping = ({title}) => {
  const classes = useStyles()
  return (
    <div className={classes.hot_dog_topping_box}>
      <h2>{title}</h2>
    </div>
  )
}

export default HotDogTopping
