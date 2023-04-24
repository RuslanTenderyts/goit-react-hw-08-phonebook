import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValueFilter } from "redux/contacts/filterSlice";
import { getValueFilter } from "redux/contacts/selectors"
import { InputLabel, Input, Typography } from "@mui/material";



const Filter = () =>  {    
    const dispatch = useDispatch(); 
    const handlerFilterChanch = (evt) => { 
        const value = evt.target.value.toLowerCase();
        dispatch(setValueFilter(value));
    };
    const valueFilter = useSelector(getValueFilter);
    
    return (
    
        <InputLabel   >
             <Typography 
             variant="h6"
             component="p"

             >
                Find contacts by name</Typography >
            <Input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Find contacts by name"
                required
                value={valueFilter}
                onChange={handlerFilterChanch}
                sx={{width: "350px"}}
            />
        </InputLabel >
    )
}

export default Filter;
