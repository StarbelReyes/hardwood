import { InfoRow } from "@/components/profile/InfoRow";
import { players } from "@/data/players";
import { useLocalSearchParams } from "expo-router";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
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
  <InfoRow label="Position" value={player.position} />

  <InfoRow label="Height" value={player.height} />

  <InfoRow label="Weight" value={player.weight} />

  <InfoRow label="Championships" value={player.championships} />

  <InfoRow label="MVP Awards" value={player.mvps} />
</View>

<Text style={styles.bioTitle}>Biography</Text>

<Text style={styles.bio}>
  {player.bio}
</Text>
</ScrollView>
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

  content: {
    paddingBottom: 40,
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