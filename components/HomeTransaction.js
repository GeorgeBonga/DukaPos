import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";

const transactionsData = [
  {
    id: 1,
    name: "Fauget Cafe",
    type: "Payment",
    status: "Success",
    date: "May 4th, 2024",
  },
  {
    id: 2,
    name: "Larana, Inc.",
    type: "Payment",
    status: "Success",
    date: "May 3rd, 2024",
  },
  {
    id: 3,
    name: "Claudia Alves",
    type: "Transfer",
    status: "Failed",
    date: "May 2nd, 2024",
  },
  {
    id: 4,
    name: "Borcelle Cafe",
    type: "Payment",
    status: "Success",
    date: "May 1st, 2024",
  },
  {
    id: 5,
    name: "Avery Clinic",
    type: "Payment",
    status: "Success",
    date: "May 1st, 2024",
  },
];

const HomeTransaction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactionsData);
  const theme = useContext(ThemeContext);

  // Filter transactions based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = transactionsData.filter((transaction) =>
      transaction.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <View>
      {/* Search Section */}
      <View
        style={[
          styles.searchSection,
          { backgroundColor: theme.colors.minorcolor },
        ]}
      >
        <TextInput
          style={[styles.searchInput, { color: theme.colors.color }]}
          placeholder="Search here"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Ionicons name="filter-outline" size={24} color={theme.colors.color} />
      </View>

      {/* Transactions */}
      <Text style={[styles.transactionHeader, { color: theme.colors.color }]}>
        Transaction
      </Text>
      <ScrollView style={styles.transactions}>
        {filteredTransactions.map((item) => (
          <View key={item.id} style={styles.transactionRow}>
            <FontAwesome6
              name="sack-dollar"
              size={24}
              color={theme.colors.color}
            />
            <View style={styles.transactionDetails}>
              <Text
                style={[styles.transactionName, { color: theme.colors.color }]}
              >
                {item.name}
              </Text>
              <Text style={styles.transactionMeta}>
                {item.date} • {item.type}
              </Text>
            </View>
            <Text
              style={[
                styles.transactionStatus,
                { color: item.status === "Success" ? "#4CAF50" : "#F44336" },
              ]}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTransaction;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,

    paddingVertical: 8,
  },
  transactionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  transactions: {
    marginBottom: 16,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 12,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionMeta: {
    color: "#BBB",
    fontSize: 12,
    marginTop: 4,
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
