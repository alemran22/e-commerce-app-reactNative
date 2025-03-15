import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            backgroundColor: "#E96E6E",
            color: "white",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    backgroundColor: "#DFDCDC",
    color: "#938F8F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 16,
    marginHorizontal: 10,
  },
});
