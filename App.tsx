import { View, Text } from 'react-native'
import React from 'react'
import Form from './src/components/Form'
import RollTheDice from './src/components/RollTheDice'

const App = () => {
  return (
    <View className='dark:bg-neutral-800'>
      <RollTheDice />
    </View>
  )
}

export default App