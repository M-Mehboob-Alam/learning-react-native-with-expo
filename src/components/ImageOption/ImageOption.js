import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const ImageOption = ({image, text}) => {
  return (
    <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: image }} />
          <Text style={styles.optionText}>{text}</Text>
    </View>
  )
}

export default ImageOption