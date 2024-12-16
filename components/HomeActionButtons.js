import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";



const actionButtonsData = [
  { id: 1, icon: "arrow-up-circle-outline", label: "Transfer", iconType: Ionicons, navigateTo: "ExpenseReport" },
  { id: 2, icon: "arrow-down-circle-outline", label: "Request", iconType: Ionicons, navigateTo: "SalesReport" },
  { id: 3, icon: "scan-outline", label: "Scan", iconType: Ionicons, navigateTo: "ScanProducts" },
  { id: 4, icon: "swap-horizontal-outline", label: "Swap", iconType: Ionicons, navigateTo: "Products" },
  { id: 5, icon: "more-horiz", label: "More", iconType: MaterialIcons, navigateTo:
  "SalesReport" },
];


const ActionButton = ({ icon, label, IconComponent, navigateTo }) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const handlePress = () => { 
    navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity style={[styles.actionButton]} onPress={handlePress}>
      <View style={[styles.iconContainer, { backgroundColor: theme.colors.minorcolor }]}>
        <IconComponent name={icon} size={30} color={theme.colors.color} />
      </View>
      <Text style={[styles.actionText, { color: theme.colors.color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const HomeActionButtons = () => {
  return (
    <View style={styles.actionButtons}>
      {actionButtonsData.map((button) => (
        <ActionButton
          key={button.id}
          icon={button.icon}
          label={button.label}
          IconComponent={button.iconType}
          navigateTo={button.navigateTo}
        />
      ))}
    </View>
  );
};

export default HomeActionButtons;

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  actionButton: {
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12, 
  },
  actionText: {
    fontSize: 12,
    marginTop: 4,
  },
});
