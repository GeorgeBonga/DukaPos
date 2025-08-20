import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";

const DashBoardLossProfitCard = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.minorcolor }]}>
      <Ionicons name={data.icon} size={30} color={data.iconColor} />
      <Text style={[styles.label, { color: theme.colors.color }]}>
        {data.label}
      </Text>
      <Text style={[styles.amount, { color: theme.colors.color }]}>
        KES {data.amount.toLocaleString()}
      </Text>
    </View>
  );
};

export default DashBoardLossProfitCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    margin: 8,
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
  },
});
