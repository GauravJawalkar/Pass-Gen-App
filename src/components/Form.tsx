import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckBox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(8, "Minimum 8 char password length")
        .max(16, "Password can't be greater than 16 characters")
        .required("This field is required")
})

const Form = () => {
    const [password, setPassword] = useState("");
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let characterList = '';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitChars = '0123456789';
        const specialChars = '!@#$%^&*()_+';

        if (upperCase) {
            characterList += upperCaseChars
        }

        if (lowerCase) {
            characterList += lowerCaseChars
        }

        if (numbers) {
            characterList += digitChars
        }

        if (symbols) {
            characterList += specialChars
        }

        const finalPassword = createPassword(characterList, passwordLength)
        setPassword(finalPassword);
        setIsPasswordGenerated(true);
    }

    const createPassword = (characters: string, passwordLength: number) => {
        console.log(characters, "Characters are");
        let result = "";
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result
    }

    const resetPassword = () => {
        setPassword("");
        setIsPasswordGenerated(false);
        setNumbers(false);
        setLowerCase(false);
        setUpperCase(false);
        setSymbols(false);
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView>
                <View className='items-center justify-center flex-1 min-h-screen px-4'>
                    <Text className='py-10 text-2xl font-bold text-center uppercase dark:text-white'>
                        Password Generator
                    </Text>
                    <Formik
                        initialValues={{ passwordLength: '' }}
                        validationSchema={PasswordSchema}
                        onSubmit={(values) => {
                            console.log("The values are : ", values);
                            generatePasswordString(+values?.passwordLength);
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            handleReset
                        }) => (
                            <View className='gap-4'>
                                <View className='flex flex-row items-center justify-between w-full gap-2'>
                                    <View className='flex items-start justify-center'>
                                        <Text className='dark:text-gray-400'>Password Length</Text>
                                        {touched.passwordLength && errors.passwordLength && (
                                            <Text className='text-sm text-red-500 capitalize'>{errors.passwordLength}</Text>
                                        )}
                                    </View>
                                    <TextInput
                                        value={values?.passwordLength}
                                        onChangeText={handleChange('passwordLength')}
                                        placeholder='Ex.8'
                                        keyboardType='numeric'
                                        className='w-1/4 px-3 text-sm border rounded-lg border-gray-300 dark:border-neutral-700 dark:text-white' />
                                </View>

                                <View className='flex flex-row items-center justify-between w-full gap-2'>
                                    <Text className='dark:text-gray-400'>Include Lowercase</Text>
                                    <View className='flex items-end justify-center w-1/4'>
                                        <View>
                                            <BouncyCheckBox
                                                isChecked={lowerCase}
                                                onPress={() => setLowerCase(!lowerCase)}
                                                fillColor='#29AB87' />
                                        </View>
                                    </View>
                                </View>

                                <View className='flex flex-row items-center justify-between w-full gap-2'>
                                    <Text className='dark:text-gray-400'>Include Uppercase</Text>
                                    <View className='flex items-end justify-center w-1/4'>
                                        <View>
                                            <BouncyCheckBox
                                                isChecked={upperCase}
                                                onPress={() => setUpperCase(!upperCase)}
                                                fillColor='#C9A0DC' />
                                        </View>
                                    </View>
                                </View>

                                <View className='flex flex-row items-center justify-between w-full gap-2'>
                                    <Text className='dark:text-gray-400'>Include Numbers</Text>
                                    <View className='flex items-end justify-center w-1/4'>
                                        <View>
                                            <BouncyCheckBox
                                                isChecked={numbers}
                                                onPress={() => setNumbers(!numbers)}
                                                fillColor='#FC80A5' />
                                        </View>
                                    </View>
                                </View>

                                <View className='flex flex-row items-center justify-between w-full gap-2'>
                                    <Text className='dark:text-gray-400'>Include Symbols</Text>
                                    <View className='flex items-end justify-center w-1/4'>
                                        <View>
                                            <BouncyCheckBox
                                                isChecked={symbols}
                                                onPress={() => setSymbols(!symbols)} />
                                        </View>
                                    </View>
                                </View>

                                <View className='flex items-center justify-center gap-4 flex-row'>
                                    <TouchableOpacity
                                        // disabled={isValid}
                                        onPress={() => handleSubmit()}
                                        className='bg-teal-600 px-3 py-2 rounded-md'>
                                        <Text className='text-center text-white'>Generate Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            handleReset();
                                            resetPassword();
                                        }}
                                        className='bg-red-400 px-3 py-2 rounded-md'>
                                        <Text className='text-center text-white'>Reset Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                    {
                        isPasswordGenerated ? (
                            <View className='py-5 m-5 border w-full border-gray-200 dark:border-neutral-700 rounded-lg'>
                                <Text selectable className='text-center text-xl dark:text-white'>
                                    {password}
                                </Text>
                                <Text className='text-sm text-center text-gray-500 pt-2'>Long Press To Copy</Text>
                            </View>
                        ) : null
                    }
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Form