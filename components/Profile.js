import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, TextInput, Button, TouchableWithoutFeedback, Alert,Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSignUpModal = () => {
    setIsSignUpModalVisible(!isSignUpModalVisible);
  };

  const toggleLoginModal = () => {
    setIsLoginModalVisible(!isLoginModalVisible);
  };

  const handleSignUp = () => {
    if (!username || !email || !password) {
      Alert.alert('Please fill in all fields.');
    } else {
      console.log('Creating account...');
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setIsSignUpModalVisible(false);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields.');
    } else {
      console.log('Logging in...');
      console.log('Email:', email);
      console.log('Password:', password);

      setIsLoginModalVisible(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>Log in to start planning your next trip</Text>
        <View style={styles.containertouchable}>
          <TouchableOpacity onPress={toggleLoginModal} style={styles.login}>
            <Text style={styles.textbutton}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 12 }}>Don't have an account ?
            <TouchableOpacity onPress={toggleSignUpModal}>
              <Text style={styles.link}> Sign up</Text>
            </TouchableOpacity>
          </Text>
             <View style={styles.container}>
                <Text style={styles.orText}>OU</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <MaterialCommunityIcons name="facebook" size={24} color="#4267B2" style={styles.icon} />
                    <Text style={styles.buttonText}>Continuer avec Facebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <MaterialCommunityIcons name="google" size={24} color="#DB4437" style={styles.icon} />
                    <Text style={styles.buttonText}>Continuer avec Google</Text>
                  </TouchableOpacity>
              </View>

        </View>
        <Modal
          visible={isSignUpModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleSignUpModal}
        >
          <TouchableWithoutFeedback onPress={toggleSignUpModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={() => null}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalHeading}>Create an Account</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Button title="Sign Up" onPress={handleSignUp} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          visible={isLoginModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleLoginModal}
        >
          <TouchableWithoutFeedback onPress={toggleLoginModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={() => null}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalHeading}>Login</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Button title="Login" onPress={handleLogin} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
      <View style={{ flexDirection: 'row', padding: 10, border: 3, borderColor: '#ccc',justifyContent: "space-around", }}>
      <View style={{ marginLeft: 10, padding:20 }}>
        <Text  style={{fontSize:15,fontWeight:"bold"}}>Airbnb your place</Text>
        <Text>It's simple to get set up and start  earning.</Text>
      </View>
      <Image source={require('../assets/House.png')} style={{ width: 130, height: 130 }} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
   login: {
     backgroundColor: 'green',
     borderRadius: 5,
     padding: 8,
   },
  textbutton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center"
  },
  containertouchable: {
    marginVertical: 30,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
  },

  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listingPrice: {
    fontSize: 14,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  orText: {
    marginBottom: 16,
    fontSize: 16,
    color: '#666',
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Profile;
