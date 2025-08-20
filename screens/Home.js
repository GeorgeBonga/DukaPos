import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import HomeSummaryCard from "../components/HomeSummaryCard";
import HomeFeatureGrid from "../components/HomeFeatureGrid";
import { ThemeContext } from "../theme/ThemeContext";
import HomeActionButtons from "../components/HomeActionButtons";
import HomeTransaction from "../components/HomeTransaction";
const Home = () => {
  const theme = useContext(ThemeContext)
  const summaryData = {
    sales: 45000,
    purchased: 55000.234,
    income: 50000,
    expense: 1000,
  };



  const features = [
    { id: "1", name: "Sales", icon: "cart-outline" },
    { id: "2", name: "Purchase", icon: "wallet-outline" },
    { id: "3", name: "Parties", icon: "people-outline" },
    { id: "4", name: "Products", icon: "cube-outline" },
    { id: "5", name: "Sales list", icon: "receipt-outline" },
    { id: "6", name: "Purchase list", icon: "clipboard-outline" },
    { id: "7", name: "Dues List", icon: "calendar-outline" },
    { id: "8", name: "Loss/Profit", icon: "analytics-outline" },
    { id: "9", name: "Income", icon: "cash-outline" },
    { id: "10", name: "Expense", icon: "card-outline" },
    { id: "11", name: "Stock", icon: "layers-outline" },
    { id: "12", name: "Reports", icon: "stats-chart-outline" },
  ];

  return (
    <SafeAreaView style={[styles.safeArea,{  backgroundColor:theme.colors.background}]}>
      
      <HomeHeader />
     
      <ScrollView 
        style={[styles.scrollView,{ backgroundColor:theme.colors.background}]} 
        showsVerticalScrollIndicator={false}
      >
        <HomeSummaryCard data={summaryData} />
        <HomeActionButtons/>
        <HomeTransaction/>
        {/* <Text style={[styles.featuresTitle,{ color: theme.colors.color,}]}>Our Awesome Features</Text>
        <HomeFeatureGrid features={features} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};



export default Home;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  
 

  },
  scrollView: {
    flex: 1,
   
    padding:10,
    paddingTop:5
  },
  featuresTitle: {
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 16,
  },
});