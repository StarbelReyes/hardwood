import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";

import { PlayerCard } from "@/components/cards/PlayerCard";
import { players } from "@/data/players";
import { getFavorites } from "@/lib/favorites";
import { Colors } from "@/theme/colors";

export default function FavoritesScreen() {
  const [favoritePlayers, setFavoritePlayers] = useState(players);

  useFocusEffect(
    useCallback(() => {
      async function loadFavorites() {
        const favorites = await getFavorites();

        const filtered = players.filter((player) =>
          favorites.includes(player.id)
        );

        setFavoritePlayers(filtered);
      }

      loadFavorites();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>⭐ Favorites</Text>

        {favoritePlayers.length > 0 ? (
          favoritePlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))
        ) : (
            <Text style={styles.empty}>
            {"You haven't favorited any players yet."}
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

  content: {
    paddingBottom: 40,
  },

  title: {
    color: Colors.text,
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  empty: {
    color: Colors.muted,
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});