import React  from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations"; 
import { getContacts } from "redux/contacts/selectors";
import { Box, Button, TextField, Typography } from "@mui/material";

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    number: Yup.string().min(10, 'Too Short!').max(15, 'Too Long!').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Invalid format').required('Required'),  
  });


const isNameInContacts = (name, contacts) => {
    const contactsName = contacts.map(contact => contact.name.toLowerCase());
    return contactsName.includes(name.toLowerCase());
  }

export const ContactFormik = () => {
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch();
    const handlerSubmitForm = (newContact) => {
        if(isNameInContacts(newContact.name, contacts)) {
            return alert(`${newContact.name} is already in contacts`)
        }
       dispatch(addContact(newContact));
    }
    return (
        <Box sx={{mb: "25px"}}>
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                handlerSubmitForm(values);
                actions.resetForm();
            }}
            >
            <Form >
                <Field
                    name="name"
                    label="Name"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    placeholder="Jane Doe"
                    type="text"
                />
                <ErrorMessage name="name" component={Typography} sx={{ color: 'red' }}  />
                <Field
                    name="number"
                    label="Number"
                    as={TextField}
                    placeholder="000-000-00-00"
                    type="tel"
                    fullWidth
                    margin="normal"
                />
                <ErrorMessage name="number" component={Typography} sx={{ color: 'red' }} />
                <Button variant="contained" color="primary" fullWidth type="submit" sx={{padding:"16.5px 14px", mt:"15px"}}>
                    Add contact
                </Button>
            </Form>
        </Formik>
        </Box>
    )
}

