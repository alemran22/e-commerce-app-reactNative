import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const Header = ({ isCart }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HOME_STACK");
        }}
        style={styles.barIconContainer}
      >
        {isCart ? (
          <Ionicons name={"chevron-back"} size={28} color={"#E96E6E"} />
        ) : (
          <Image source={require("../asset/bar.png")} style={styles.barIcon} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCartText}>My Cart</Text>}
      <Image source={require("../asset/dp.png")} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barIconContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  barIcon: { height: 28, width: 28 },
  dp: { height: 44, width: 44, borderRadius: 22 },
  myCartText: { color: "black", fontSize: 24, fontWeight: "medium" },
});
