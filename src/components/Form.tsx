import { View, Text } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(8, "Password length must be a min of 8 characters")
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
        let characterList = "";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const digitChars = '0123456789';
        const specialChars = "!@#$%^&*()_+'";

        if (upperCase) {
            characterList += upperCase
        }

    }

    const createPassword = (characters: string, passwordLength: number) => {
        let result = "";
        for (let i = 0; i < passwordLength; i++) {
            result += Math.round(Math.random() * characters.length);
        }
        return result
    }

    const resetPassword = () => {

    }
    return (
        <View>
            <Text>Form</Text>
        </View>
    )
}

export default Form