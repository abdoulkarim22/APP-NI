import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity,} from 'react-native';



export default function Profile() {

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  // const saveProfile = () => {
  //   // Logique pour sauvegarder le profil (par exemple, enregistrement local)
  //   console.log('Profil sauvegardé :', { username, email, phoneNumber });

  //   // Réinitialisation des champs après sauvegarde
  //   setUsername('');
  //   setEmail('');
  //   setPhoneNumber('');
  // };

 
  return (
    <ScrollView>
      <View style={styles.container}>
       <Text>Log in to start planning your next trip</Text>
       <View>
          <TouchableOpacity>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
       </View>
       <Text>Don't have a account ? </Text>
        {/* <View style={{marginVertical:50}}>
        <Image 
           source = {require('../assets/Profile.jpeg')}
           style={{width:100, height:100,}}
       />
          <Text style={styles.heading}>Mon Profil</Text>
        </View> */}
        {/* <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
          onPress={saveProfile}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          onPress={saveProfile}
        />
        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          onPress={saveProfile}
        />
        <Button title="Connecter" onPress={saveProfile} /> */}
       

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:20,
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
});
