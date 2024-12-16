import React, { useContext } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { ThemeContext } from "../theme/ThemeContext";

export default function Button({
  mode,
  style,
  image,
  imageStyle,
  label,
  ...props
}) {
  const theme = useContext(ThemeContext);

  return (
    <PaperButton
      style={[
        styles.button,
        mode === "contained" && { backgroundColor: theme.colors.primary },

        style,
      ]}
      mode={mode}
      {...props}
      contentStyle={styles.content}
    >
      <View style={styles.container}>
        {image && <Image source={image} style={[styles.image, imageStyle]} />}
        <Text
          style={[
            styles.text,
            mode === "contained"
              ? { color: theme.colors.color }
              : mode === "outlined"
              ? { color: theme.colors.color }
              : null,
          ]}
        >
          {label}
        </Text>
      </View>
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
