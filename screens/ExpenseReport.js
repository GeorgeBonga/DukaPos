import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";

const { width, height } = Dimensions.get("window");

const ExpenseReport = () => {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.header}>
          <Header title="Expense" />
        </View>

        <View style={[styles.tableHeader, { backgroundColor: theme.colors.minorcolor }]}>
          <Text style={[styles.tableText, styles.column1, { color: theme.colors.color }]}>
            Expense For
          </Text>
          <Text style={[styles.tableText, styles.column2, { color: theme.colors.color }]}>
            Date
          </Text>
          <Text style={[styles.tableText, styles.column3, { color: theme.colors.color }]}>
            Amount
          </Text>
        </View>

        <View style={styles.messageContainer}>
          <Text style={[styles.noDataText, { color: theme.colors.color }]}>
            No Data Available
          </Text>
        </View>

        <View style={[styles.footer, { backgroundColor: theme.colors.minorcolor }]}>
          <Text style={[styles.footerText, { color: theme.colors.color }]}>
            Total Expense
          </Text>
          <Text style={[styles.footerAmount, { color: theme.colors.color }]}>
            KES 0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpenseReport;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  tableHeader: {
    flexDirection: "row",
    paddingVertical: height * 0.015,
    marginHorizontal: width * 0.04,
    borderRadius: 8,
    marginBottom: height * 0.02,
  },
  tableText: {
    fontSize: width * 0.035,
    fontWeight: "bold",
  },
  column1: {
    flex: 2,
    textAlign: "left",
    paddingLeft: width * 0.02,
  },
  column2: {
    flex: 1,
    textAlign: "center",
  },
  column3: {
    flex: 1,
    textAlign: "right",
    paddingRight: width * 0.02,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: width * 0.04,
  },
  footer: {
    flexDirection: "row",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.04,
    justifyContent: "space-between",
    borderRadius: 8,
  },
  footerText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  footerAmount: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
