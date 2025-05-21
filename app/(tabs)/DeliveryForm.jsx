import React, {useState,useEffect} from 'react';
import { 
  View, Text, TextInput, Button, StyleSheet, ScrollView , Pressable
} from 'react-native';
import {client,config,database} from '../../lib/appwrite'
const DeliveryForm = () => { 
    const [productName, setProductName] = useState('');
    const [city, setCity] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    
    // After defining state handlers, we define the handle submit for the data 
    const handleSubmit = () => { 
      const formData = { 
          coli_product_name: productName, // Fixed variable name (lowercase p)
          coli_receiver_city: city, // Fixed variable name (lowercase c)
          coli_receiver_full_name: fullName, // Fixed variable name (lowercase f)
          coli_receiver_phone_number: phoneNumber, // Fixed variable name (lowercase p)
          coli_receiver_adresse: address, // Fixed variable name (lowercase a)
      };
      console.log('form data : ', formData);
      const  coli_id = formData.coli_product_name + formData.coli_receiver_full_name
      database.createDocument(config.db,config.col.colis,coli_id,formData)
              .then(response=> {  
                console.log("document Created: ",response)
               })
              .catch(error=>{
                console.error("error creating document: ",error)
      });
      alert('form submitted successfully ');
    };
  useEffect( ()=> { 
        init()
   }, [])
       
  const init = async () => {
    getData()
  }
  const getData = async() =>{
     try { 
           const {documents,total} = await database.listDocuments(config.db,config.col.colis) 
            console.log("data found ")
            console.log(documents)
       }
      catch(error){
      console.log(error)
    }

  }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Ajouter nouveau Coli</Text>
        
        <Text style={styles.label}>Nom de produit</Text>
        <TextInput  
          style={styles.input}
          value={productName} // Fixed variable name
          onChangeText={setProductName}
          placeholder="Entrer Le Nom Du Produit" 
        />
        
        <Text style={styles.label}>La Ville Du client</Text> {/* Fixed typo in styles.label */}
        <TextInput  
          style={styles.input}
          value={city} // Fixed variable name
          onChangeText={setCity}
          placeholder="enter La Ville Du Client" 
        />
        
        <Text style={styles.label}>Le Nom Complet Du Client</Text>
        <TextInput 
          style={styles.input}
          value={fullName} // Fixed variable name
          onChangeText={setFullName}
          placeholder="Enter le nom complet Du client" 
        />
        
        <Text style={styles.label}>Numero De Telephone</Text>
        <TextInput 
          style={styles.input}
          value={phoneNumber} // Fixed variable name
          onChangeText={setPhoneNumber}
          placeholder="Telephone Du Client"
          keyboardType="phone-pad" 
        />
        
        <Text style={styles.label}>Address du client :</Text>
        <TextInput 
          style={styles.input}
          value={address} // Fixed variable name
          onChangeText={setAddress}
          placeholder="enter l'address du client"
          multiline 
        />
        
        <View style={styles.buttonContainer}>
     <Pressable
         style={styles.button}
         onPress={handleSubmit} >
         <Text style={styles.buttonText}>Ajoutez ....  </Text>
      </Pressable>


        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({ 
  buttonText: { 
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
  },
  button: {
     backgroundColor: '#000000',
     padding: 12,
     marginBottom: 19,
  },
 
  container: { 
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10, 
  }
}); // Fixed extra comma and closing parenthesis

export default DeliveryForm; // Added export statement
