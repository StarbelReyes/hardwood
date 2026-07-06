import { PlayerCard } from "@/components/cards/PlayerCard";
import { players } from "@/data/players";
import { Colors } from "@/theme/colors";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View>
          <Text style={styles.title}>🏀 Hardwood</Text>
          <Text style={styles.subtitle}>The Home of NBA Legends</Text>
        </View>
  
        {players.map((player) => (
          <PlayerCard
  key={player.id}
  player={player}
/>
))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
  },

  title: {
    color: Colors.text,
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    color: "#9AA4B2",
    fontSize: 18,
    marginTop: 8,
  },

  content: {

    paddingBottom: 40,
  
  },
});