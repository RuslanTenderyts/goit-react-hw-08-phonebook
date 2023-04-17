
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { Layout } from "components/Layout/Layout";
import { GlobalStyle } from "components/GlobalStyle"
import { ContactFormik } from "components/ContactForm/ContactFormik";
import ContactList  from "components/ContactList/ContactList" ;
import Filter from "components/Filter/Filter"
    
    
export default function Contacts () { 
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Layout>
            <h1> PhoneBook </h1>
            <ContactFormik />
            <h2> Contacts </h2>
            <Filter  />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
            <GlobalStyle/>
        </Layout>
    );
}
