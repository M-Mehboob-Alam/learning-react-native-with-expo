//import liraries
import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';
// create a component
const Button = ({name, onPress, disabled}) => {
    return (
        <Pressable onPress={onPress} disabled ={disabled} style={[styles.buttonContainer, disabled ? styles.disabledContainer : {}]}>
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    );
};


//make this component available to the app
export default Button;
