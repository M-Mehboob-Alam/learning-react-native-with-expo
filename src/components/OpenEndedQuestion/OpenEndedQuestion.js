import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';
const OpenEndedQuestion = () => {
  return (
    <>
        <Text style={ styles.title }>OpenEndedQuestion</Text>
        <View style={styles.row}>
            <Image source={mascot} style={styles.mascot} resizeMode="contain" />
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>sentence</Text>
            </View>
        </View>    
            <TextInput style={styles.textInput} placeholder='Type in English' />
    </>
  )
}

export default OpenEndedQuestion