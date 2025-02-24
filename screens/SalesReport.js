import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";

const SalesReport = () => {
  const [fromDate, setFromDate] = useState("Nov 1, 2024");
  const [toDate, setToDate] = useState("Nov 20, 2024");
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header title="Sales Report" />

      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={[styles.dateLabel, { color: theme.colors.color }]}>
            From Date
          </Text>
          <View style={styles.dateContent}>
            <Text style={[styles.dateText, { color: theme.colors.color }]}>
              {fromDate}
            </Text>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={theme.colors.color}
            />
          </View>
        </View>

        <View style={styles.dateBox}>
          <Text style={[styles.dateLabel, { color: theme.colors.color }]}>
            To Date
          </Text>
          <View style={styles.dateContent}>
            <Text style={[styles.dateText, { color: theme.colors.color }]}>
              {toDate}
            </Text>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={theme.colors.color}
            />
          </View>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Text style={[styles.message, { color: theme.colors.color }]}>
          Please Add A Sale
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SalesReport

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  dateBox: {
    flex: 1,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  dateLabel: {
    fontSize: 12,
  },
  dateContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  dateText: {
    fontSize: 12,
  },
  messageContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

