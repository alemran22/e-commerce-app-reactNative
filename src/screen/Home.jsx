import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Fontisto from "react-native-vector-icons/Fontisto";
const Home = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name="search" size={20} color={"#C0C0C0"} />
        </View>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonText: { fontSize: 18 },
  headerText: {
    fontSize: 28,
    fontWeight: "regular",
    marginTop: 25,
    color: "#000000",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: { marginHorizontal: 15 },
  input: { flex: 1 },
});
