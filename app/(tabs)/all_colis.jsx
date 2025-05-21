import 'setimmediate'; // This should be the very first import
import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, FlatList, View, Image, Platform, StyleSheet, Text , TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native'
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { connectToDatabase } from '../../db/db';

// demo data before implementing the database
const demoColis = [
  {
    id: '1',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
  {
    id: '2',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
  {
    id: '3',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
  {
    id: '4',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
  {
    id: '5',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
  {
    id: '6',
    coli_product_name: 'laptop',
    coli_receiver_city: 'casablanca',
    coli_receiver_full_name: 'youssef amrani',
    coli_receiver_phone_number: '076728875',
    coli_receiver_adresse: 'marrakech bab doukala',
    coli_delivery_status: 'pending',
  },
];

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.coli_product_name}</Text>
      <Text>To: {item.coli_receiver_full_name}</Text>
      <Text>City: {item.coli_receiver_city}</Text>
      <Text>Phone: {item.coli_receiver_phone_number}</Text>
      <Text>Address: {item.coli_receiver_adresse}</Text>
      <Text>Status: {item.coli_delivery_status}</Text>
    </View>
  );
};

export default function AllColis() {
  const navigation = useNavigation();
  const goToDeliveryFrom = () => { 
        navigation.navigate('DeliveryForm');
   };

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    
    <View style={styles.container}>
      <Pressable
         style={styles.button}
         onPress={goToDeliveryFrom} >
         <Text style={styles.buttonText}>Ajoutez nouveau Coli </Text>
      </Pressable>


      <FlatList 
        data={demoColis}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: { 
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
  },
  button: {
     backgroundColor: '#000000',
     padding: 12,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
