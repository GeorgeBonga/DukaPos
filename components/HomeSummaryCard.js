import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";

const HomeSummaryCard = ({ data }) => {
 
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.colors.minorcolor }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.color }]}>Today's Summary</Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Coming Soon");
          }}
          style={styles.seeAllButton}
        >
          <Text style={[styles.seeAllText, { color: theme.colors.color}]}>See All</Text>
          <Feather color={theme.colors.color} name="chevron-right" size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.column}>
          <View>
            <Text style={[styles.label, { color: theme.colors.color }]}>Sales</Text>
            <Text style={[styles.value, { color: theme.colors.color }]}>
              KES{" "}
              {parseFloat(data.sales).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View>
            <Text style={[styles.label, { color: theme.colors.color}]}>Expense</Text>
            <Text style={[styles.value, { color: theme.colors.color }]}>
              KES{" "}
              {parseFloat(data.expense).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeSummaryCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16, 
    borderRadius: 8, 
    marginBottom: 24,
   

  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10, 
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14, 
    fontWeight: "600", 
    marginRight: 4, 
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16, 
   
  },
  column: {
    flex: 1,
    alignItems: "center",
    padding:10
  },
  label: {
    fontSize: 14, 
  },
  value: {
    fontSize: 18,
    fontWeight: "600", 
    marginTop: 4,
  },
});


