import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Person from '../assets/person.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


const RollTheDice = () => {

    const triggerHaptic = () => {
        const options = {
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: false,
        };

        ReactNativeHapticFeedback.trigger("impactHeavy", options);
    };

    return (
        <View className='min-h-screen flex-1 items-center justify-center'>
            <Text>RollTheDice</Text>
            <Image source={Person} height={400} width={400} className='h-32 w-32 ' />
            <TouchableOpacity onPress={triggerHaptic} className='my-5 py-2 px-4 border border-gray-300 rounded-lg bg-red-200'>
                <Text>Feel The Haptic Feedback</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RollTheDice