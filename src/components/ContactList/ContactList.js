import React from "react";
import { Item, SpanNumber } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { getContacts, getValueFilter } from "redux/contacts/selectors"



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
      <ul>
        {visibleContacts.map(({id, name, number}) => (
          <Item key={id}>
            <span> { name } : </span>
                <SpanNumber> { number } </SpanNumber> 
                <button onClick={()=> handleDeleteContact(id) }>Delete</button>
            </Item>
        ))}
      </ul>
    );
  };


export default ContactList;

