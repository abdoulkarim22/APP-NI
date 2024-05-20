import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const properties = [
  {
    id: '1',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '2',
    imageUrl: require('../assets/Profile.jpeg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '3',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '4',
    imageUrl: require('../assets/Profile.jpeg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '5',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '6',
    imageUrl: require('../assets/Profile.jpeg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '7',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '8',
    imageUrl: require('../assets/Profile.jpeg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '9',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '10',
    imageUrl: require('../assets/Profile.jpeg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '11',
    imageUrl: require('../assets/Water.jpeg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
];

const Search = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.constructionDate}>Date de construction : {item.constructionDate}</Text>
        <Text style={styles.dateRange}>{item.dateRange} · Professionnel</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Destination"
        />
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  constructionDate: {
    fontSize: 14,
    color: '#555',
  },
  dateRange: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Search;
