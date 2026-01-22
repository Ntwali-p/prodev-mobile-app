import { styles } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Sign up to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/signin")}>
        <Text style={styles.forgotPasswordText}>
          Already have an account? Sign in
        </Text>
      </Pressable>
    </View>
  );
}
