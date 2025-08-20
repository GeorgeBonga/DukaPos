import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Dimensions,
  View,
  AppState,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Animated
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Canvas, DiffRect, rrect, rect } from "@shopify/react-native-skia";
import {Ionicons} from "@expo/vector-icons";

// Get window dimensions
const { width, height } = Dimensions.get("window");

// Overlay style and dimensions
const innerDimension = 300;
const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2,
    height / 2 - innerDimension / 2,
    innerDimension,
    innerDimension
  ),
  50,
  50
);

export default function ScanProduct() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [refreshing, setRefreshing] = useState(false); // for the refresh animation
  const spinValue = useRef(new Animated.Value(0)).current; // for the spin animation


  

  useEffect(() => {
    // Function to request camera permissions
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
  
    // Handle AppState change
    const handleAppStateChange = (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    };
  
    // Request camera permissions
    getCameraPermissions();
  
    // Add AppState listener
    const subscription = AppState.addEventListener("change", handleAppStateChange);
  
    // Cleanup function
    return () => {
      subscription.remove();
    };
  }, []);
  


  // Handle barcode scan
  const handleBarcodeScanned = ({ type, data }) => {
    if (data && !qrLock.current) {
      qrLock.current = true;
      console.log("Scanned Data:", data); // Log the scanned data to the console
      setScanned(true);
      alert(`Scanned barcode with type ${type} and data: ${data}`);
    }
  };





  const reloadCamera = () => {
    setRefreshing(true);
    setScanned(false); // Reset the scanned state to allow rescan
    qrLock.current = false;

    // Start spinning animation for refresh effect
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Reset spin animation after it's done
    setTimeout(() => {
      spinValue.setValue(0); // Reset the spin to 0
      setRefreshing(false); // Stop refreshing
    }, 500);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      {/* {Platform.OS === "android" && <StatusBar hidden />} */}

    
      <View style={styles.header}>
        <Text style={styles.title}>Scan Products</Text>
      </View>

  
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: [
            "qr", // QR Codes
            "pdf417", // PDF417 barcodes
            "upc", // UPC barcodes (Common for retail products)
            "ean13", // EAN-13 barcodes (Common for retail products)
            "ean8", // EAN-8 barcodes
            "code128", // Code128 barcodes
            "code39", // Code39 barcodes
            "itf14", // ITF14 barcodes (common for packaging)
          ],
        }}
      />

    
      <Canvas
        style={
          Platform.OS === "android"
            ? { flex: 1 }
            : StyleSheet.absoluteFillObject
        }
      >
        <DiffRect inner={inner} outer={outer} color="black" opacity={0.5} />
      </Canvas>

     
      {scanned && (
        <View style={styles.reloadButton}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <TouchableOpacity onPress={reloadCamera}>
              <Ionicons
                name={refreshing ? "reload-circle" : "reload-circle-outline"}
                size={50}
                color="white"
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  reloadButton: {
    position: "absolute",
    bottom: 50,
    left: width / 2 - 25,
    zIndex: 1, 
    padding: 10,
  },
  scanAgainButton: {
    backgroundColor: "#0E7AFE",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20,
    left: width / 2 - 100,
    zIndex: 1, 
  },
  scanAgainText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});



