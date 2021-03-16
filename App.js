import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, FlatList } from 'react-native';
import Items from './components/item'

export default function App() {
  const [txtvalue, setTxtvalue] = useState('')
  const [goals, setGoals] = useState([])
    
  const addValue = () => setGoals((curGoals) => (
    [...curGoals, {id:  Math.random().toString(), value: txtvalue}]))
  const changeHandler = (txt) => setTxtvalue(txt)

  return (
    <View style={styles.screen} >
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="input here"
          value={txtvalue}
          onChangeText={changeHandler}
        />
        <Button title="ADD" onPress={addValue}/>
      </View>
      <Items items={goals} />
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  goals: {
    marginVertical: 3
  },
  item: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 3,
    backgroundColor: '#ccc'
  }

});
