import React  from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations"; 
import { Container, Button, TextField } from "@mui/material"

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
        <Container maxWidth="sm">
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
                <Field
                    placeholder="Jane_Doe@gmail.com"
                    type="email"
                    name="email"
                    label="Email"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    />
                    <ErrorMessage name="email" component='span'/>
                                    
                <Field
                    placeholder="*******"
                    type="password"
                    name="password"
                    label="Password"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    />
                    <ErrorMessage name="password" component='span'/>
                                
                <Button variant="contained" color="primary" fullWidth type="submit" sx={{padding:"16.5px 14px", mt:"15px"}}>
                    Login
                </Button>
            </Form>
        </Formik>
        </Container>
    )
}
