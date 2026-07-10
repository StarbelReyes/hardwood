import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { PlayerCard } from "@/components/cards/PlayerCard";
import { players } from "@/data/players";
import { Colors } from "@/theme/colors";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

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

        <TextInput
          placeholder="Search players..."
          placeholderTextColor={Colors.muted}
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />

{filteredPlayers.length > 0 ? (
  filteredPlayers.map((player) => (
    <PlayerCard
      key={player.id}
      player={player}
    />
  ))
) : (
  <Text style={styles.emptyText}>
    No players found.
  </Text>
)}
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
    color: Colors.muted,
    fontSize: 18,
    marginTop: 8,
  },

  search: {
    backgroundColor: Colors.card,
    color: Colors.text,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  content: {
    paddingBottom: 40,
  },
  emptyText: {
    color: Colors.muted,
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
});