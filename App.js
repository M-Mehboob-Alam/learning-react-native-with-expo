import React from "react";
import { ScrollView,Image, Text, View, StyleSheet } from "react-native";
import icon from "./assets/icon.png";
function App() {
  return (
    

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.white, styles.bgRed,{color: 'green'}]}>
        Alam Becoming A Mobile Application Developer
        Visit Our Company Website: www.clicksofts.com
      </Text>
      <Text>Our Company Logo Display by image url</Text>
      <Image source={{ uri: 'https://clicksofts.com/wp-content/uploads/2024/12/cropped-download-44.png' }} style={{ width: 200, height: 100 }} resizeMode="contain" />
      <Text>Image displayed from assets</Text>
      <Image source={icon} style={{ width: 200, height: 200, backgroundColor: 'red' }} resizeMode="contain" />

    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
    color: 'red',
  },
  white: {
    color: 'white',
  },
bgRed:{
  backgroundColor:'red'
}
});
export default App;