import { players } from "@/data/players";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function PlayerScreen() {
  const { id } = useLocalSearchParams();
  const player = players.find((p) => p.id === Number(id));
  if (!player) {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Player not found.</Text>
      </View>
    );
  } 


  return (
    <View style={styles.container}>
      <ImageBackground
        source={player.image}
        style={styles.image}
        imageStyle={styles.imageBorder}
      />
  
      <Text style={styles.title}>{player.name}</Text>
  
      <Text style={styles.subtitle}>
        {player.subtitle}
      </Text>
      <View style={styles.infoCard}>
  <Text style={styles.label}>Position</Text>
  <Text style={styles.value}>{player.position}</Text>

  <Text style={styles.label}>Height</Text>
  <Text style={styles.value}>{player.height}</Text>

  <Text style={styles.label}>Weight</Text>
  <Text style={styles.value}>{player.weight}</Text>

  <Text style={styles.label}>Championships</Text>
  <Text style={styles.value}>{player.championships}</Text>

  <Text style={styles.label}>MVP Awards</Text>
  <Text style={styles.value}>{player.mvps}</Text>
</View>

<Text style={styles.bioTitle}>Biography</Text>

<Text style={styles.bio}>
  {player.bio}
</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F17",
        padding: 24,
      },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#9AA4B2",
    fontSize: 18,
    marginTop: 8,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 24,
  },
  
  imageBorder: {
    borderRadius: 20,
  },
  infoCard: {
    backgroundColor: "#151B28",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },
  
  label: {
    color: "#7B8794",
    fontSize: 14,
    marginTop: 12,
  },
  
  value: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  
  bioTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 30,
  },
  
  bio: {
    color: "#D1D5DB",
    fontSize: 17,
    lineHeight: 28,
    marginTop: 12,
  },
});