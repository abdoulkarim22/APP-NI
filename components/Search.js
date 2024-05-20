import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet,Modal,Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const properties = [
  {
    id: '1',
    imageUrl: require('../assets/House1.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '2',
    imageUrl: require('../assets/House2.jpg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '3',
    imageUrl: require('../assets/House3.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '4',
    imageUrl: require('../assets/House4.jpg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '5',
    imageUrl: require('../assets/House5.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '6',
    imageUrl: require('../assets/House6.jpg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '7',
    imageUrl: require('../assets/House7.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '1170 € par nuit',
    rating: '5,0',
  },
  {
    id: '8',
    imageUrl: require('../assets/House8.jpg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    constructionDate: '1909',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '9',
    imageUrl: require('../assets/House9.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
  {
    id: '10',
    imageUrl: require('../assets/House10.jpg'), // Use require function directly
    location: 'Seixas, Caminha, Portugal',
    dateRange: '18-23 mai',
    price: '1170 € par nuit',
    rating: '4,8',
  },
  {
    id: '11',
    imageUrl: require('../assets/House11.jpg'), // Use require function directly
    location: 'Estercuel, Espagne',
    constructionDate: '1628',
    dateRange: '19-24 mai',
    price: '55 € par nuit',
    rating: '5,0',
  },
];

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.imageUrl} style={styles.image} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        setSelectedProperty(item);
        setModalVisible(true);
      }}>
       <Text style={{ textAlign: 'right', padding: 20, textDecorationLine: 'underline', color: 'green' }}>More details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#000" />
        <TextInput style={styles.searchInput} placeholder="Destination" />
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {selectedProperty && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <Text style={styles.location}>{selectedProperty.location}</Text>
            <Text style={styles.price}>{selectedProperty.price}</Text>
            <Text style={styles.constructionDate}>Construction Date: {selectedProperty.constructionDate}</Text>
            <Text style={styles.dateRange}>Available: {selectedProperty.dateRange}</Text>
            <Text style={styles.rating}>Rating: {selectedProperty.rating}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      )}
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
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
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
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 200,

  },
  cardContent: {
    padding: 10,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  constructionDate: {
    fontSize: 14,
    color: '#555',
  },
  dateRange: {
    fontSize: 14,
    color: '#555',
    textAlign:"right"
  },
  price: {
    fontSize: 16,
    fontWeight: 'normal',
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
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Search;
