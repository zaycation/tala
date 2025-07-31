import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import * as colors from "../theme/colors";
import getStyles from "../styles/login.styles";

type LoginScreenProps = {
  onLogin: (email: string, password: string) => Promise<void>;
};

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await onLogin(email, password);
      // Success: AuthGate will swap screens for you!
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tala</Text>
      <Text style={styles.subtitle}>
        Sign in to explore and plan your next adventure!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.6 }]}
        onPress={handleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>
      {error && (
        <Text
          style={{
            color: "#ff375f",
            marginTop: 14,
            fontFamily: "Inter",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
