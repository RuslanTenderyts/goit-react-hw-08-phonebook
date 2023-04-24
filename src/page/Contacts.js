
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { ContactFormik } from "components/ContactForm/ContactFormik";
import ContactList  from "components/ContactList/ContactList" ;
import Filter from "components/Filter/Filter"
import { Container, Typography } from "@mui/material";
    
    
export default function Contacts () { 
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container  maxWidth="sm" >
            <Typography
            variant="h3"
            component="h1">
                PhoneBook
            </Typography>

            <ContactFormik />

            <Typography
            variant="h4"
            component="h2"
            >
                Contacts
            </Typography>
            
            <Filter  />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
        </Container>
    );
}
