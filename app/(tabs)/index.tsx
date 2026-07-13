import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { PlayerCard } from "@/components/cards/PlayerCard";
import { players } from "@/data/players";
import {
  Colors,
  Radius,
  Spacing,
  Typography,
} from "@/theme";

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
       <View style={styles.header}>
  <Text style={styles.badge}>NBA LEGENDS</Text>

  <Text style={styles.title}>Hardwood</Text>

  <Text style={styles.subtitle}>
    Discover the greatest players in basketball history.
  </Text>
</View>

<View style={styles.searchContainer}>
  <Ionicons
    name="search"
    size={20}
    color={Colors.muted}
  />

  <TextInput
    placeholder="Search NBA Legends..."
    placeholderTextColor={Colors.muted}
    value={search}
    onChangeText={setSearch}
    style={styles.searchInput}
  />
</View>

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
    fontSize: Typography.h1,
    fontWeight: "800",
    marginTop: Spacing.md,
  },

  subtitle: {
    color: Colors.muted,
    fontSize: 17,
    marginTop: 10,
    lineHeight: 26,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  
    backgroundColor: Colors.card,
  
    borderRadius: Radius.md,
  
    paddingHorizontal: Spacing.md,
    height: 58,
  
    marginBottom: Spacing.lg, 
  
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  
  searchInput: {
    flex: 1,
  
    color: Colors.text,
  
    fontSize: 17,
  
    marginLeft: 12,
  },

  content: {
    paddingBottom: Spacing.xxl,
  },
 
  emptyText: {
    color: Colors.muted,
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },

  header: {
    marginTop: 16,
    marginBottom: 28,
  },
  
  badge: {
    alignSelf: "flex-start",
  
    backgroundColor: "#1D4ED8",
  
    color: "white",
  
    paddingHorizontal: 12,
    paddingVertical: 6,
  
    borderRadius: 999,
  
    fontSize: 12,
    fontWeight: "700",
  
    letterSpacing: 1,
  },
});