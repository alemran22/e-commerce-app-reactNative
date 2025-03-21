import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ProductCard = ({ isLiked, setIsLiked }) => {
  // const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../asset/girl-2.png")}
        style={styles.productImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.9</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setIsLiked(!isLiked);
        }}
        style={styles.heartContainer}
      >
        {isLiked ? (
          <FontAwesome name={"heart"} size={20} color={"#E96E6E"} />
        ) : (
          <FontAwesome name={"heart-o"} size={20} color={"#E96E6E"} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: { marginTop: 20, position: "relative", marginRight: 10 },
  productImage: { height: 256, width: 167, borderRadius: 16 },
  title: { fontSize: 18, fontweight: 600, color: "#444444" },
  price: { fontSize: 18, fontweight: 600, color: "#9C9C9C" },
  textContainer: { padding: 10 },
  heartContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    height: 34,
    width: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    top: 6,
    right: 6,
  },
});
