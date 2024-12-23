import {  StyleSheet } from 'react-native';
// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        alignSelf: 'stretch',
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#2c3e00',
        borderBottomWidth: 4,
    },
    disabledContainer: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey',
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: 'white',
        borderBottomWidth: 2,
    }
});
export default styles;