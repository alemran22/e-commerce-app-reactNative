import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const ProductCard = ({ handleLiked, item }) => {
  // const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PRODUCT_DETAILS", { item });
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleLiked(item);
        }}
        style={styles.heartContainer}
      >
        {item?.isLiked ? (
          // filled heart
          <FontAwesome name={"heart"} size={20} color={"#E96E6E"} />
        ) : (
          <FontAwesome name={"heart-o"} size={20} color={"#E96E6E"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: { marginTop: 20, position: "relative", marginHorizontal: 7 },
  productImage: { height: 256, width: 165, borderRadius: 16 },
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
