import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/Login";
import RegistarUsuarioScreen from "./screens/RegistrarUsuario";
import AccionesDisponiblesScreen from "./screens/AccionesDisponibles";
import PaisesScreen from "./screens/Paises";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={30} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Registar Usuario"
        component={RegistarUsuarioScreen}
        options={{
          tabBarLabel: "Registar Usuario",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={30}
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Acciones Disponibles"
        component={AccionesDisponiblesScreen}
        options={{
          tabBarLabel: "Acciones Disponibles",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-cash"
              color={color}
              size={30}
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Paises"
        component={PaisesScreen}
        options={{
          tabBarLabel: "Paises",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="earth" color={color} size={30} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
