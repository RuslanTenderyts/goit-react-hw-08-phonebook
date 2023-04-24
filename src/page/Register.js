import React  from "react";
import { Field, Formik,Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations"; 
import { Container, Button, TextField } from "@mui/material";

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    email: Yup.string().email(),
    password: Yup.string().min(6, 'Too Short!').max(15, 'Too Long!').required('Required'),  
  });

export default function Register() {
    const dispatch = useDispatch();
    const handlerSubmitForm = (User) => {
        dispatch(register(User));
    }
    return (
        <Container maxWidth="sm">
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                console.log('кнопку нажато');
                handlerSubmitForm(values);
                console.log('хендел спрацював');
                actions.resetForm();
            }}
            >
            <Form >
                <Field
                    placeholder="Jane Doe"
                    type="text"
                    name="name"
                    label="User name"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    />
                    <ErrorMessage name="name" component='span'/>
                                    
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
                    Register
                </Button>
            </Form>
        </Formik>
    </Container>
    )
}


