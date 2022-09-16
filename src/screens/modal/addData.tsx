import React, { FC } from 'react';
import { Size } from '../../enums';
import { CBQButton } from '../../components/button';
import { Block, Container } from './styles';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../redux/modules/data/actions';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CBQInput } from '../../components/input';

type FormProps = {
  name: string;
  email: string;
};
export const AddData: FC<{}> = () => {
  const dispatch = useDispatch();
  const loginValidationSchema = yup.object().shape({
    name: yup.string().required("Name can't be empty"),
    email: yup.string().email("Email can't be either empty or invalid"),
    gender: yup.string().required("Gender can't be empty. Please enter either male or female"),
    status: yup.string().required("Status can't be empty. Please enter either active or inactive"),
  });

  const onSubmit = (values: FormProps) => {
    dispatch(addUserData(values));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        gender: '',
        status: '',
      }}
      validationSchema={loginValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => onSubmit(values)}>
      {({ handleChange, handleSubmit, errors }) => {
        return (
          <Container>
            <Block />
            <CBQInput placeholder="Name" onChangeText={handleChange('name')} error={errors.name} />
            <CBQInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <CBQInput
              placeholder="Gender"
              onChangeText={handleChange('gender')}
              error={errors.gender}
            />
            <CBQInput
              placeholder="Status"
              onChangeText={handleChange('status')}
              error={errors.status}
            />
            <Block />
            <CBQButton title="Done" size={Size.Medium} onPress={handleSubmit} />
          </Container>
        );
      }}
    </Formik>
  );
};

export default AddData;
