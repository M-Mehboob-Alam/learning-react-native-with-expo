import React from "react";
import { ScrollView,Image, Text, View } from "react-native";
import icon from "./assets/icon.png";
function App() {
  return (
    

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Alam Becoming A Mobile Application Developer
        Visit Our Company Website: www.clicksofts.com
      </Text>
      <Image source={{ uri: 'https://clicksofts.com/wp-content/uploads/2024/12/cropped-download-44.png' }} style={{ width: 200, height: 100 }} resizeMode="contain" />
      <Image source={icon} style={{ width: 200, height: 200, backgroundColor: 'red' }} resizeMode="contain" />

    </View>
    
  )
}

export default App;