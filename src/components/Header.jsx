import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barIconContainer}>
        <Image source={require("../asset/bar.png")} style={styles.barIcon} />
      </View>
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
});
