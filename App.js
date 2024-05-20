import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './components/Profile';
import Favoris from './components/Favoris';
import Search from './components/Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search-web" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favoris'
        component={Favoris}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
