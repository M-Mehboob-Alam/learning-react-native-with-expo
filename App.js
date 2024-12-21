import React from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";
function App() {
  return (
    <View style={styles.root}>
      <Text style={[styles.title]}>
        Which of these is the "Glass"?
      </Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }} />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }} />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }} />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image style={styles.optionImage} resizeMode="contain" source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }} />
          <Text style={styles.optionText}>Glass</Text>
        </View>
      </View>
    </View>
  )
}
export default App;