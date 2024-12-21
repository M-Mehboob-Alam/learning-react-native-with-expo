import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const ImageOption = () => {
  return (
    <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }} />
          <Text style={styles.optionText}>Glass</Text>
    </View>
  )
}

export default ImageOption