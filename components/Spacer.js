import React from 'react'
import { View } from 'react-native'

const Spacer = ({ children, margin = 15 }) => {
  return <View style={{ margin }}>{children}</View>
}

export default Spacer
