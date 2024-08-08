import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Sing_up = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Sing Up</Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="password" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footerLink}>Log in.</Text>
        </View>
      </View>
    </View>
  );
};

export default Sing_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#000000",
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});
