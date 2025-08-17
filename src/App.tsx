import { View, Text } from 'react-native'
import React from 'react'
import Form from './components/Form'
import RollTheDice from './components/RollTheDice'

const App = () => {
  return (
    <View className='dark:bg-neutral-800'>
      <RollTheDice />
    </View>
  )
}

export default App