import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ReactNativeModal from "react-native-modal";
import { theme } from "../theme/theme";
import { Input } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function VerifyEmailModal({ isVisible, onClose }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = () => {
    setIsVerifying(true); // Start showing loader
    setError(""); // Clear any existing error message
  
    setTimeout(() => {
      if (verificationCode === "1234") {
        setModalVisible(false); 
        setIsVerified(true); // Mark as verified
        setIsVerifying(false); // Stop loader
      } else {
        // Failure case
        setIsVerifying(false); // Stop loader
        setError("Invalid code, please try again."); // Show error message
      }
    }, 3000); // Simulated delay
  };
  

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropColor="rgba(0, 0, 0, 0.5)"
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.headerText}>Email Verification</Text>

        {!isVerified && !isVerifying && (
          <View>
            <Input
              label="Enter Verification Code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="numeric"
              style={styles.input}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity onPress={handleVerify} style={styles.button}>
              <Text style={styles.buttonText}>Verify Email</Text>
            </TouchableOpacity>
          </View>
        )}

        {isVerifying && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              animating={true}
              size="large"
              color={theme.colors.primary}
            />
            <Text style={styles.verifyingText}>Verifying...</Text>
          </View>
        )}

        {isVerified && !isVerifying && (
          <View style={styles.successContainer}>
            <View style={styles.successIcon}>
              <FontAwesome name="check" size={40} color="white" />
            </View>
            <Text style={styles.successText}>Email Verified Successfully!</Text>
            <TouchableOpacity onPress={onClose} style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  button: {
    // backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    // color: theme.colors.error,
    fontSize: 12,
    marginTop: 10,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  verifyingText: {
    marginTop: 10,
    fontSize: 16,
    // color: theme.colors.primary,
  },
  successContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    backgroundColor: "green",
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  continueButton: {
    // backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
