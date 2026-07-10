import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "HARDWOOD_FAVORITES";

export async function getFavorites(): Promise<number[]> {
  try {
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export async function saveFavorites(favorites: number[]) {
  await AsyncStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
}

export async function isFavorite(playerId: number) {
  const favorites = await getFavorites();

  return favorites.includes(playerId);
}

export async function toggleFavorite(playerId: number) {
  const favorites = await getFavorites();

  const updated = favorites.includes(playerId)
    ? favorites.filter((id) => id !== playerId)
    : [...favorites, playerId];

  await saveFavorites(updated);

  return updated;
}