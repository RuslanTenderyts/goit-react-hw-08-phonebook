import React  from "react";
import { Label, Form, ErrorMessage } from "../components/ContactForm/ContactForm.styled";
import { Field, Formik, } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations"; 




const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    email: Yup.string().email(),
    password: Yup.string().min(6, 'Too Short!').max(15, 'Too Long!').required('Required'),  
  });

export default function Register() {
    const dispatch = useDispatch();
    const handlerSubmitForm = (User) => {
        dispatch(register(User));
    
        console.log('будемо реєструвати')
    }
    return (
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
                <Label>
                    <p> User name </p> 
                    <Field
                    placeholder="Jane Doe"
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component='span'/>
                </Label>
                    
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


