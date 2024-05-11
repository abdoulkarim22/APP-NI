import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet,ScrollView } from 'react-native';

export default function Profile() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveProfile = () => {
    // Logique pour sauvegarder le profil (par exemple, enregistrement local)
    console.log('Profil sauvegardé :', { username, email, phoneNumber });
  };
  return (
    <ScrollView>
      <View style={styles.container1}>
      <View style={styles.container}>
      <Text style={styles.heading}>Mon Profil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Connecter" onPress={saveProfile} />
    </View>
    </View>
    </ScrollView>
  )
}
 const styles = StyleSheet.create({
  container1:{
    flex: 1,
    padding: 20,
  }, 
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:170,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
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
 })