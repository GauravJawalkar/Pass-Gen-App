import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import Person from '../assets/person.png'

export class RollTheDice extends Component {
    render() {
        return (
            <View className='min-h-screen flex-1 items-center justify-center'>
                <Text>RollTheDice</Text>
                <Image source={Person} height={400} width={400} className='h-32 w-32 ' />
            </View>
        )
    }
}

export default RollTheDice