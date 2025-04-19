import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import productData from "../data/productData.json";
const categories = ["Trending Now", "All", "New", "Men's", "Women's"];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now");
  const [isLiked, setIsLiked] = useState(false);
  const [products, setProducts] = useState(productData.products);
  const handleLiked = (item) => {
    const NewProducts = products.map((product) => {
      if (product.id === item.id) {
        return { ...product, isLiked: true };
      }
      return product;
    });
    setProducts(NewProducts);
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* header */}
      <Header />

      {/* products list */}
      <View style={styles.productList}></View>
      <FlatList
        keyExtractor={(item, index) => index}
        ListHeaderComponent={
          <>
            <Text style={styles.headerText}>Match Your Style</Text>
            {/* input container */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={20} color={"#C0C0C0"} />
              </View>
              <TextInput style={styles.input} placeholder="Search" />
            </View>
            {/* category tags */}
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard item={item} handleLiked={handleLiked} key={item.id} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
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
  productList: { flexDirection: "row", justifyContent: "space-between" },
});
