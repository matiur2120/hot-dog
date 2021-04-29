import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 get_hot_dog_topping_box:{
  
   border: '1px solid lightblue',
   background: '#FAFAFA',
   marginBottom: '20px',
   borderRadius: '5px',
   '&>a':{
     display: 'block',
     fontSize: '1rem',
     width: '100%',
     padding: '30px 0px',
     textAlign: 'center'
   }
  
 }
}));

const GetHotDogTopping = ({title}) => {
  const classes = useStyles()
  return (
    <div className={classes.get_hot_dog_topping_box}>
      <a href="#">{title}</a>
    </div>
  )
}

export default GetHotDogTopping
