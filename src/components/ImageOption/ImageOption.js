import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import styles from './styles'


const ImageOption = ({image, text, isSelected, onPress}) => {
  console.log(isSelected);
  return (
    <Pressable onPress={onPress} style={[styles.optionContainer, isSelected ? styles.selectedOptionContainer : {}]}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: image }} />
          <Text style={styles.optionText}>{text}</Text>
    </Pressable >
  )
}


export default ImageOption