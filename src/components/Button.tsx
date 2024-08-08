import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  label: string;
}

const Button = (props: Props) => {
  const { label } = props;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});
