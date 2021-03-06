import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function CandidateInfoTop({ picture, name, contest }) {
  return (
    <View style={styles.row}>
      <Image style={styles.picture} source={picture}></Image>
      <View style={styles.rowWrap}>
        <View style={styles.candidateInfo}>
          <Text style={styles.candidateName}>{name}</Text>
          <Text style={styles.contest}>{contest}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingLeft: 22,
    paddingRight: 22,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingRight:30
  },
  picture: {
    width: 150,
    height: 150,
    backgroundColor: "#101433",
    borderRadius: 900,
  },
  candidateInfo: {
    paddingLeft: 20,
    paddingRight: 100,
  },
  candidateName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    color: "#FFFFFF",
    paddingBottom: 23,
    paddingRight:22
  },
  contest: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 23,
    color: "#ffffff",
    paddingRight:22
  },
});
