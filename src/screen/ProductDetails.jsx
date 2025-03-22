import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v170567613/vulb5bckiruhpzt2v8ec.png";
const sizes = ["S", "M", "L", "XL"];
const colors = [
  "#91A1B0",
  "#b11d1d",
  "#1f44a3",
  "#9f632a",
  "#1d752b",
  "#000000",
];

const ProductDetails = () => {
  const route = useRoute();
  const item = route.params.item;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      {/* text container */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      {/* size container */}
      <Text style={styles.sizeText}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedSize(size);
              }}
              style={styles.sizeValueButton}
            >
              <Text
                style={[
                  styles.sizeValueText,
                  selectedSize == size && { color: "#E55B5B" },
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* color container */}
      <Text style={styles.colorText}>Colors</Text>
      <View style={styles.colorContainer}>
        {colors.map((color) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedColor(color);
              }}
              style={[
                styles.circleBorder,
                selectedColor === color && {
                  borderColor: color,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={[styles.circle, { backgroundColor: color }]} />
            </TouchableOpacity>
          );
        })}
      </View>
      {/* button container */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: { padding: 20 },
  coverImage: { width: "100%", height: 400 },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: { fontSize: 20, fontWeight: "medium", color: "#444444" },
  price: { fontSize: 20, color: "#4D4C4C", fontWeight: "semibold" },

  sizeText: {
    fontSize: 20,
    fontWeight: "medium",
    color: "#444444",
    marginTop: 10,
    marginHorizontal: 20,
  },
  sizeContainer: { marginHorizontal: 20, flexDirection: "row" },
  sizeValueButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  sizeValueText: { fontSize: 18, fontWeight: 600, color: "#444444" },
  colorText: {
    fontSize: 20,
    fontWeight: "medium",
    color: "#444444",
    marginTop: 10,
    marginHorizontal: 20,
  },
  colorContainer: { flexDirection: "row", gap: 10, marginHorizontal: 20 },
  circle: { height: 36, width: 36, borderRadius: 18 },
  circleBorder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#E96E6E",
    borderRadius: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
});
