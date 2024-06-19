import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const ExploreScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login with name:', name);
    console.log('Login with email:', email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.subtitle}>Welcome Back 👋</Text>
        <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialLogin}>
        <Text style={styles.socialLoginText}>Or continue with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Haven't an account? <Text style={styles.registerText}>Register</Text></Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'left',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 102,
    color:"#356899",
    alignItems: 'Left',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
   
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color:"#0D0D26",
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLogin: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 35,
  },
  socialLoginText: {
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  socialButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  footerText: {
    fontSize: 16,
  },
  registerText: {
    fontWeight: 'bold',
    color: '#356899',
  },
  devMode: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  devModeImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  devModeText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  devModeButton: {
    backgroundColor: '#3498DB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  devModeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;