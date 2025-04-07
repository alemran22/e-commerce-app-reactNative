import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const image = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2";
const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$35.80</Text>
        <View style={styles.colorSizeContainer}>
          <View style={styles.circle} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>L</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="delete-outline"
          color={"#F68CB5"}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: { marginVertical: 10, flexDirection: "row" },
  image: { borderRadius: 12, height: 125, width: "27%" },
  cardContent: { flex: 1, marginLeft: 17 },
  title: { fontSize: 20, fontWeight: "medium", marginBottom: 7 },
  price: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#797979",
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: "#7094C1",
  },
  colorSizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 10,
  },
  sizeCircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: { fontSize: 18, fontWeight: "medium" },
});
