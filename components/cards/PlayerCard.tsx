import { Player } from "@/data/players";
import { Colors } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

type PlayerCardProps = {
    player: Player;
  };

  export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={player.image}
        style={styles.image}
        imageStyle={styles.imageBorder}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.overlay}
        >
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.subtitle}>{player.subtitle}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    height: 340,
    justifyContent: "flex-end",
  },

  imageBorder: {
    borderRadius: 20,
  },

  overlay: {
    padding: 24,
    justifyContent: "flex-end",
    height: "100%",
  },

  name: {
    color: Colors.text,
    fontSize: 34,
    fontWeight: "700",
  },

  subtitle: {
    color: "#D1D5DB",
    fontSize: 18,
    marginTop: 6,
  },
});