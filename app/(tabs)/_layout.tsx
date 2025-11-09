import { Tabs } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  const renderHeaderRight = () => (
    <View style={{ flexDirection: 'row', gap: 16, marginRight: 20, alignItems: 'center' }}>
      {/* Notificações */}
      <Pressable style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
        <View style={{
          position: 'absolute',
          top: 2,
          right: 2,
          width: 18,
          height: 18,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          borderWidth: 2,
          borderColor: Colors.fatec.red,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 9, fontWeight: '800', color: Colors.fatec.red }}>3</Text>
        </View>
      </Pressable>

      {/* Perfil */}
      <Pressable style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Ionicons name="person-outline" size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );

  const headerTitleComponent = (title: string) => () => (
    <View style={{
      marginLeft: 20,
    }}>
      <Text style={{
        color: Colors.fatec.white,
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: -0.5,
      }}>
        {title}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: 'rgba(255, 255, 255, 0.1)',
          borderTopWidth: 1,
          height: 75,
          paddingBottom: 20,
          paddingTop: 8,
        },
        tabBarActiveTintColor: Colors.fatec.red,
        tabBarInactiveTintColor: '#64748B',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
          marginBottom: 0,
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: 0,
        },
        headerStyle: {
          backgroundColor: '#b00208',
          elevation: 0,
          shadowOpacity: 0,
          height: 150,
          borderBottomWidth: 0,
        },
        headerBackground: () => (
          <View style={{ 
            flex: 1, 
            backgroundColor: '#940409ff',
            overflow: 'hidden',
          }}>
            
            
            {/* Gradiente na parte inferior */}
            <View style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              backgroundColor: 'rgba(0, 0, 0, 0.16)',
            }} />
            
            {/* Detalhe decorativo canto superior direito */}
            <View style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'rgba(105, 5, 5, 0.43)',
            }} />
            
            {/* Detalhe decorativo canto inferior esquerdo */}
            <View style={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: 'rgba(105, 5, 5, 0.43)',
            }} />
          </View>
        ),
        headerTitleAlign: 'left',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: () => (
            <View style={{ marginLeft: 20 }}>
              <Text style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: 14,
                fontWeight: '600',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 2,
              }}>INFO</Text>
              <Text style={{
                color: Colors.fatec.white,
                fontSize: 26,
                fontWeight: '800',
                letterSpacing: -0.5,
              }}>Fatec Cotia</Text>
            </View>
          ),
          headerRight: renderHeaderRight,
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cultura"
        options={{
          headerShown: true,
          headerTitle: headerTitleComponent('Cultura'),
          headerRight: renderHeaderRight,
          tabBarLabel: 'Cultura',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="educacao"
        options={{
          headerShown: true,
          headerTitle: headerTitleComponent('Educação'),
          headerRight: renderHeaderRight,
          tabBarLabel: 'Educação',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="empregos"
        options={{
          headerShown: true,
          headerTitle: headerTitleComponent('Empregos'),
          headerRight: renderHeaderRight,
          tabBarLabel: 'Empregos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="seguranca"
        options={{
          headerShown: true,
          headerTitle: headerTitleComponent('Segurança'),
          headerRight: renderHeaderRight,
          tabBarLabel: 'Segurança',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}