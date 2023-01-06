import React, { Component } from 'react';
import {FormControl, InputLabel, Select} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"



const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }))


const PeopleSelector = props =>  {

    const classes = useStyles()


    
    return(

        
        <FormControl fullWidth className={classes.formControl}>
                <InputLabel shrink variant="outlined" >
                    Cake Size
                </InputLabel>
                <Select
                
                native
                labelWidth={50}
                label="Cake Size"
                variant="outlined"
                style={{
                    width: 300
                }}>
                <option value="none">Select Cake Size</option>
                <option value="none">1-2 People</option>
                <option value="none">2-4 People</option>
                <option value="none">4-6 People</option>

                
                </Select>
    
            
        </FormControl>
      
    )
  
}

export default PeopleSelector
