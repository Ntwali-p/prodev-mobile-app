import { BACKGROUNDIMAGE } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(home)" />;
}

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
      >
        <View style={styles.buttonGroup}>
          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
