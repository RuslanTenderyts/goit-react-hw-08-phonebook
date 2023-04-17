import React  from "react";
import { Label, Form, ErrorMessage } from "../components/ContactForm/ContactForm.styled";
import { Field, Formik, } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations"; 


const ContactSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(10, 'Too Short!').max(15, 'Too Long!').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Невірний формат').required('Required'),  
  });

export default function Login() {
    const dispatch = useDispatch();
    const handlerSubmitForm = (User) => {
        dispatch(logIn(User));
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                handlerSubmitForm(values);
                actions.resetForm();
            }}
            >
            <Form >
                <Label>
                    <p> Email </p> 
                    <Field
                    placeholder="Jane_Doe@gmail.com"
                    type="email"
                    name="email"
                    />
                    <ErrorMessage name="email" component='span'/>
                </Label>
                    
                <Label>
                    <p> Password </p>
                    <Field
                    placeholder="*******"
                    type="password"
                    name="password"
                    />
                    <ErrorMessage name="password" component='span'/>
                </Label>
                
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
