import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { getContacts, getValueFilter } from "redux/contacts/selectors"
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';




const getVisibleContacts = (contacts, valueFilter = '') => {
    if(!valueFilter) {
        return contacts;
      }
      return contacts.filter(contact => contact.name.toLowerCase().includes(valueFilter));
    }

const ContactList = () => {
    // Отримуємо масив завдань із стану Redux
    const contacts = useSelector(getContacts);
    // Отримуємо значення фільтра із стану Redux
    const valueFilter = useSelector(getValueFilter);
    // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
    const visibleContacts = getVisibleContacts(contacts, valueFilter);
    const dispatch = useDispatch(); 
    const handleDeleteContact = (id) => { dispatch(deleteContact(id) );
    }
    return (
      <List >
        
        {visibleContacts.map(({id, name, number}) => (
            <ListItem key={id} sx={{paddingLeft: "0"}}>
              <ListItemText 
                primary={ name }
                secondary={number}
                />
              <ListItemSecondaryAction>
                <IconButton type="button" sx={{ "&:hover": { color: "white", backgroundColor: "#1976d2" } }} edge="end" aria-label="delete" onClick={()=> handleDeleteContact(id) }>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
              
            </ListItem>          
        ))}
      </List>
    );
  };


export default ContactList;

