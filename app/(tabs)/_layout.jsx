import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Hardcoded active tab color
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Page Principal',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="home" color="black" />,
        }}
      />
      <Tabs.Screen
        name="all_ramassages"
        options={{
          title: 'Les Ramassages ',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="truck" color="black" />,
        }}
      />
      <Tabs.Screen
        name="all_colis"
        options={{
          title: 'Les Colis',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="box-open" color="black" />,
        }}
      />
    <Tabs.Screen 
        name="DeliveryForm"
        options={{
           href: null,
        }}
        />
    </Tabs>
  );
}
