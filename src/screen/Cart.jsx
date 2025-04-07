import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import CartCard from "../components/CartCard";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const Cart = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <Header isCart={true} style={styles.headerContainer} />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={CartCard}
          ListHeaderComponent={<></>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          ListFooterComponent={
            <>
              <View style={styles.pricingContainer}>
                <View style={styles.PriceAndTitle}>
                  <Text style={styles.PriceTextAndValue}>Total:</Text>
                  <Text style={styles.PriceTextAndValue}>$119.70</Text>
                </View>
                <View style={styles.PriceAndTitle}>
                  <Text style={styles.PriceTextAndValue}>Shipping:</Text>
                  <Text style={styles.PriceTextAndValue}>$0.0</Text>
                </View>
              </View>
              <View style={styles.hr} />
              <View style={[styles.PriceAndTitle, { marginHorizontal: 10 }]}>
                <Text style={styles.PriceTextAndValue}>Grand Total:</Text>
                <Text
                  style={[
                    styles.PriceTextAndValue,
                    { color: "black", fontWeight: 600 },
                  ]}
                >
                  $119.70
                </Text>
              </View>
            </>
          }
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { paddingHorizontal: 15, flex: 1 },
  headerContainer: { marginBottom: 20 },
  pricingContainer: {
    marginHorizontal: 10,
    marginTop: 40,
    flexDirection: "column",
    gap: 10,
  },
  PriceAndTitle: { flexDirection: "row", justifyContent: "space-between" },
  PriceTextAndValue: { fontSize: 18, fontWeight: "medium", color: "#757575" },
  hr: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    height: 1,
    width: "auto",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonWrapper: {
    paddingVertical: 15,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    padding: 10,
    marginHorizontal: 10,
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
