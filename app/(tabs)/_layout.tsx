import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.fatec.red,
        },
        headerTintColor: Colors.fatec.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: Colors.fatec.white,
          borderTopColor: Colors.fatec.lightGray,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: Colors.fatec.red,
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Início',
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
        }} 
      />
      <Tabs.Screen 
        name="cultura" 
        options={{
          title: 'Cultura',
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="educacao" 
        options={{
          title: 'Educação',
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="empregos" 
        options={{
          title: 'Empregos',
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="seguranca" 
        options={{
          title: 'Segurança',
          href: null,
        }} 
      />
    </Tabs>
  );
}