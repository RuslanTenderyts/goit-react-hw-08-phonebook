import React  from "react";
import { Label, Form, ErrorMessage } from "./ContactForm.styled";
import { Field, Formik, } from "formik";
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations"; 
import { getContacts } from "redux/contacts/selectors";

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Перейди на англійську').required('Required'),
    number: Yup.string().min(10, 'Too Short!').max(15, 'Too Long!').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Невірний формат').required('Required'),  
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
                <Label>
                    <p> Name </p> 
                    <Field
                    placeholder="Jane Doe"
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component='span'/>
                </Label>
                    
                <Label>
                    <p> Number </p>
                    <Field
                    placeholder="000-000-00-00"
                    type="tel"
                    name="number"
                    />
                    <ErrorMessage name="number" component='span'/>
                </Label>
                
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

