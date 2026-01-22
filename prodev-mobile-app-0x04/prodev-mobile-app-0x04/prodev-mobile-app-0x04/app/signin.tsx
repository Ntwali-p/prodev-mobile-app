import { styles } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/join")}>
        <Text style={styles.forgotPasswordText}>
          Don’t have an account? Join
        </Text>
      </Pressable>
    </View>
  );
}
