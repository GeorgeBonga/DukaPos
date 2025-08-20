import React, { useContext, useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { CartesianChart, BarGroup } from "victory-native";
import { ThemeContext } from "../theme/ThemeContext";

const DATA = [
  { x: "Monday", y: 12000, z: 8000 },
  { x: "Tuesday", y: 18000, z: 12000 },
  { x: "Wednesday", y: 25000, z: 16000 },
  { x: "Thursday", y: 30000, z: 20000 },
  { x: "Friday", y: 50000, z: 35000 },
  { x: "Saturday", y: 65000, z: 50000 },
  { x: "Sunday", y: 55000, z: 40000 },
];

const labels = DATA.map((item) => item.x);

const DashboardSummaryCard = () => {
  const [selectedDay, setSelectedDay] = useState(DATA[0]);
  const theme = useContext(ThemeContext);

  const handleBarPress = (index) => {
    const selectedItem = DATA[index];
    setSelectedDay(selectedItem);
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.minorcolor }]}>
      <Text style={[styles.title, { color: theme.colors.color }]}>
        Weekly Overview
      </Text>
      <Text style={[styles.day, { color: theme.colors.color }]}>
        {selectedDay.x}
      </Text>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendIcon, { backgroundColor: "#34D399" }]} />
          <Text style={[styles.legendText, { color: theme.colors.color }]}>
            Sales: KES {selectedDay.y}
          </Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.legendIcon, { backgroundColor: "#EF4444" }]} />
          <Text style={{ color: theme.colors.color }}>
            Purchase: KES {selectedDay.z}
          </Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <CartesianChart
          data={DATA}
          xKey="x"
          yKeys={["y", "z"]}
          domainPadding={{ left: 35, right: 20 }}
        >
          {({ points, chartBounds }) => (
            <BarGroup
              chartBounds={chartBounds}
              betweenGroupPadding={0.4}
              withinGroupPadding={0.1}
              roundedCorners={{ topLeft: 10, topRight: 10 }}
            >
              <BarGroup.Bar points={points.y} color="#34D399" />
              <BarGroup.Bar points={points.z} color="#EF4444" />
            </BarGroup>
          )}
        </CartesianChart>

        <View style={styles.touchableOverlay}>
          {DATA.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleBarPress(index)}
            >
              <View style={styles.touchableBar} />
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>

      <View style={styles.axisLabels}>
        {labels.map((label, index) => (
          <Text
            key={index}
            style={[styles.axisLabelText, { color: theme.colors.color }]}
          >
            {label.substring(0, 3)}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DashboardSummaryCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",

    marginBottom: 8,
  },
  day: {
    fontSize: 16,
    fontWeight: "bold",
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  legendIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  chartContainer: {
    height: 200,
    position: "relative",
  },
  touchableOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
  },
  touchableBar: {
    flex: 1,
  },
  axisLabels: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  axisLabelText: {
    textAlign: "center",
    width: `${100 / labels.length}%`,
    fontSize: 12,
  },
});
