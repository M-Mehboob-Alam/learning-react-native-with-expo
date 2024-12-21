import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 40,
    },
   title:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch'
   },
   optionsContainer:{
    // backgroundColor: 'red',
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'

   },
   optionContainer:{
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderBottomWidth: 4,
    width: '48%',
    height: '48%',
    alignItems: 'center',
    paddingBottom: 10
   },
   optionImage:{
    flex:1,
    width: '100%'
   },
   optionText:{

   }
  });

  export default styles;