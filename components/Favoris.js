import { View, Text, Button,TouchableWithoutFeedback,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'

export default function Favoris() {
  return (
    <View>
      <Text>Favoris</Text>


      <Button title="Appuie ici" color={"green"} onPress={() => console.log('Appuyé')} />


      <TouchableWithoutFeedback onPress={() => console.log('Appuyé toucha')}>
         <Text>Appuie ici</Text>
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => console.log('Appuyé opo')}>
        <Text>Appuie ici</Text>
       </TouchableOpacity>

       <Pressable onPress={() => console.log('Appuyé rou')}>
         <Text>Appuie ici</Text>
       </Pressable>


    </View>
  )
}