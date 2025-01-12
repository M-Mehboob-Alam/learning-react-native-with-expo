import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
   title:{
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
   },
   row:{
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
   },
   mascot:{
    width: '30%',
    aspectRatio: 3/4,
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'green'
   },
   sentenceContainer:{
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    
   },
   sentence:{
    fontSize: 18,
    marginBottom: 10,
   },
   textInput:{
    alignSelf: 'stretch',
    backgroundColor: '#ebebeb',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    fontSize: 18, 
   },
   
});