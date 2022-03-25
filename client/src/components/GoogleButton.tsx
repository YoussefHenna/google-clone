import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const GoogleButton: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
});

export default GoogleButton;
