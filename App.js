import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Email or username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="example@gmail.com"
          placeholderTextColor='#9b9b9b'/>

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="minimum 6 characters"
          placeholderTextColor='#9b9b9b'/>

        <Button 
          title="Forgot Password?"
          color="#9b9b9b"
          onPress={() => null}
        />

        <Pressable style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignContent: 'center',
    justifyContent: 'flex-start',
    padding: 16
  },
  text: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 21,
    margin: 8,
  },
  textInput: {
    fontSize: 18,
    margin: 8,
    paddingVertical: 8,
    color: 'red',
    borderBottomColor: '#9b9b9b',
    borderBottomWidth: 1
  },
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    margin: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9b9b9b' 
  },
});
