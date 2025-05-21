import { Stack } from 'expo-router';
import  React , {useEffect,useState} from 'react';
import {account} from '../lib/appwrite'


export default function RootLayout() {
     
  return (

    <Stack> 
          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
}
