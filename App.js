import React, { useState } from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import Question from './assets/data/oneQuestionWithOption';
function App() {
  const [isSelected, setIsSelected] = useState(null);
  return (
    <View style={styles.root}>
      <Text style={[styles.title]}>
        {Question.question}
      </Text>
      <View style={styles.optionsContainer}>
        {Question.options.map((option) => (
          <ImageOption key={option.id} image={option.image} onPress={()=>setIsSelected(option)} isSelected={isSelected?.id === option.id} text={option.text} />
        ))}
       

        {/* <View style={styles.optionContainer}>
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
        </View> */}
      </View>
    </View>
  )
}
export default App;