import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screen/Home";
import Reorder from "./src/screen/Reorder";
import Cart from "./src/screen/Cart";
import Account from "./src/screen/Account";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./src/screen/ProductDetails";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#E96E6E",
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Reorder}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="bars" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="CART"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => {
                const { carts } = useContext(CartContext);
                return (
                  <View style={{ position: "relative" }}>
                    <MaterialCommunityIcons
                      name="cart"
                      size={size}
                      color={color}
                    />
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 7,
                        backgroundColor: color,
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        top: -10,
                        right: -5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "white",
                          fontWeight: 500,
                        }}
                      >
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Account}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
