import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";
const DashBoardQuickOverviewCard = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.minorcolor }]}>
      <Ionicons name={data.icon} size={30} color={data.iconColor} />
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { color: theme.colors.color }]}>
          {data.label}
        </Text>
        <Text style={[styles.amount, { color: theme.colors.color }]}>
          KES {data.amount.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

export default DashBoardQuickOverviewCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: "center",
    marginLeft: 16,
  },
  label: {
    fontSize: 16,
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
  },
});
