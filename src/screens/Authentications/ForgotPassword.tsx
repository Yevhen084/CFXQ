import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { useTheme } from '@hooks';
import { Button, TextInput, Text, Brand, Loading } from '@components';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const API_URL = process.env.API_URL;

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invaild emaill address!')
    .required('Email is required!'),
});

const ResetPasswordConfirmSchema = Yup.object().shape({
  code: Yup.string().required('Code is required!'),
  password: Yup.string().required('Password is required!'),
});

interface ResetPasswordFormValues {
  email: string;
}

interface ResetPasswordConfirmValues {
  code: string;
  password: string;
}

const ForgotPassword = () => {
  const { Layout, Gutters, Colors } = useTheme();
  const initialValues: ResetPasswordFormValues = {
    email: '',
  };
  const initialValuesConfirm: ResetPasswordConfirmValues = {
    code: '',
    password: '',
  };
  const navigation = useNavigation();

  const [isDone, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [icEye, setIcEye] = React.useState('eye-off');
  const [showPassword, setShowPassword] = React.useState(true);
  const [loader, setLoader] = React.useState(false);
  const onSubmit = ({ email }: ResetPasswordFormValues) => {
    setLoading(true);
    axios
      .post(`${API_URL}/Investors/reset-password?email=${email}`)
      .then(res => {
        setDone(true);
        setShowModal(true);
        setLoading(false);
        setEmail(email);
      })
      .catch(error => {
        Alert.alert(error.response.data?.detail);
        setLoading(false);
      });
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye('eye');
    } else {
      setIcEye('eye-off');
    }
  };

  const onConfirm = ({ code, password }: ResetPasswordConfirmValues) => {
    if (!email) return;
    console.log(email);
    setLoading(true);
    axios
      .post(
        `${API_URL}/api/Investors/reset-password/confirm?email=${email}&code=${code}&password=${password}`,
      )
      .then(res => {
        console.log(res);
        setLoading(false);
        navigation.navigate('AuthHome' as never);
      })
      .catch(error => {
        console.log(error.response.data);
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient
        colors={['rgba(8, 9, 14, 20)', 'rgba(22, 36, 53, 20)']}
        style={[Layout.fill]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={[Layout.fill]}>
          <View style={[Layout.alignItemsCenter]}>
            <Brand />
          </View>
          <View style={[Layout.alignItemsCenter, Gutters.regularHPadding]}>
            <Text
              color="white"
              weight="bold"
              size="large"
              mt={20}
              align="center"
            >
              Password Recovery
            </Text>
            <Text
              mt={10}
              size="regular"
              align="center"
              lineHeight={24}
              color="textGray500"
              pl={20}
              pr={20}
            >
              Enter your email to recover your password
            </Text>
          </View>
          {!isDone ? (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={ResetPasswordSchema}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={[Gutters.regularVPadding, Gutters.tinyHPadding]}>
                  <TextInput
                    label="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Enter Your Email"
                    placeholderTextColor={Colors.highlight}
                    error={errors.email}
                    autoCapitalize="none"
                  />
                  <Button
                    color="white"
                    title="Confirm"
                    onPress={() => handleSubmit()}
                    style={[Gutters.largeTMargin]}
                  />
                </View>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={initialValuesConfirm}
              onSubmit={onConfirm}
              validationSchema={ResetPasswordConfirmSchema}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={[Gutters.regularVPadding, Gutters.tinyHPadding]}>
                  <TextInput
                    label="Code"
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                    placeholder="Enter Your Verification Code"
                    placeholderTextColor={Colors.highlight}
                    error={errors.code}
                    autoCapitalize="none"
                  />

                  <TextInput
                    label="New Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Enter Your New Password"
                    placeholderTextColor={Colors.highlight}
                    error={errors.password}
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                  />
                  <View style={{ position: 'absolute', top: 182, left: 370 }}>
                    <Ionicons
                      name={icEye}
                      color={Colors.white}
                      size={20}
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                  <Button
                    color="white"
                    title="Reset Password"
                    onPress={() => handleSubmit()}
                    style={[Gutters.largeTMargin]}
                  />
                </View>
              )}
            </Formik>
          )}
          <View style={{ position: 'absolute', top: 50, left: 10 }}>
            <TouchableOpacity onPress={navigation.goBack}>
              <MCIcon name="close" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Modal isVisible={showModal}>
          <View style={styles.content}>
            <Text color="white" weight="bold" size="medium" mb={16}>
              Check Your Email
            </Text>
            <Text color="white" align="center" mb={10} mt={10}>
              Verification code has been sent to your email
            </Text>
            <Button
              color="white"
              title="Okay"
              style={[Layout.fullWidth, Gutters.regularTMargin]}
              onPress={onCloseModal}
            />
          </View>
        </Modal>
        {loading && <Loading />}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0D1018',
    paddingVertical: 36,
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});