import React from "react";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import * as colors from "../theme/colors";
import getStyles from "../styles/login.styles";

type LoginScreenProps = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tala</Text>
      <Text style={styles.subtitle}>
        Sign in to explore and plan your next adventure!
      </Text>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
