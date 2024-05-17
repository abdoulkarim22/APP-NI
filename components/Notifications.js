import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Notifications() {

  const [selectedTab, setSelectedTab] = useState('Messages');
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  )
}