import React, { useEffect, useState } from "react";
import { ScrollView, Image, Text, View, StyleSheet, Alert } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import Question from './assets/data/imageMulatipleChoiceQuestions';
import Button from "./src/components/Button";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
function App() {
  const [isSelected, setIsSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(Question[currentIndex]);
  const onPressHandler = () => {
    if (isSelected.correct) {
      Alert.alert('Correct');
      const getNextIndex = currentIndex + 1;
      if ( getNextIndex >= Question.length ) {
          setCurrentIndex(0);
          setSelectedQuestion(Question[0]);
          setIsSelected(null);
          Alert.alert('Won');        
      } else {
        console.log('get lenth', Question.length);
        setCurrentIndex(getNextIndex);
        setSelectedQuestion(Question[getNextIndex]);
        setIsSelected(null);
       
      }
    } else {
      Alert.alert('Wrong');
    }
  };
  useEffect(() => {
  }, [setSelectedQuestion])
  return (
    <View style={styles.root}>
      <Text style={[styles.title]}>
        {selectedQuestion?.question}
      </Text>
      <View style={styles.optionsContainer}>
        {selectedQuestion?.options?.map((option) => (
          <ImageOption key={option.id} image={option.image} onPress={() => setIsSelected(option)} isSelected={isSelected?.id === option.id} text={option.text} />
        ))}
      </View>
      <Button name="Check" onPress={onPressHandler} disabled={isSelected === null ? true : false} />
    </View>
  )
}
export default App;