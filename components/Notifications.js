import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Notifications() {

  const [selectedTab, setSelectedTab] = useState('Messages');
  return (
    <View style={styles.container}>
    <View style={styles.tabContainer}>
      <TouchableOpacity 
        style={[styles.tab, selectedTab === 'Messages' && styles.activeTab]}
        onPress={() => setSelectedTab('Messages')}
      >
        <Text style={[styles.tabText, selectedTab === 'Messages' && styles.activeTabText]}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tab, selectedTab === 'Notifications' && styles.activeTab]}
        onPress={() => setSelectedTab('Notifications')}
      >
        <Text style={[styles.tabText, selectedTab === 'Notifications' && styles.activeTabText]}>Notifications</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentContainer}>
      {selectedTab === 'Notifications' && (
        <Text style={styles.caughtUpText}>You're all caught up</Text>
      )}
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caughtUpText: {
    fontSize: 16,
    color: '#888',
  },

})