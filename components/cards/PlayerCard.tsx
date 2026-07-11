import { Player } from "@/data/players";
import { isFavorite, toggleFavorite } from "@/lib/favorites";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

type PlayerCardProps = {
  player: Player;
};

export function PlayerCard({ player }: PlayerCardProps) {
  const [favorite, setFavorite] = useState(false);

  const scale = useRef(new Animated.Value(1)).current;
  const imageScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    async function loadFavorite() {
      const result = await isFavorite(player.id);
      setFavorite(result);
    }

    loadFavorite();
  }, [player.id]);

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
    >
      <Pressable
        style={styles.card}
        onPressIn={() => {
          Animated.spring(scale, {
            toValue: 0.97,
            useNativeDriver: true,
          }).start();

          Animated.spring(imageScale, {
            toValue: 1.05,
            useNativeDriver: true,
          }).start();
        }}
        onPressOut={() => {}}
        onPress={() => {
          Animated.spring(scale, {
            toValue: 1,
            friction: 5,
            tension: 120,
            useNativeDriver: true,
          }).start();

          Animated.spring(imageScale, {
            toValue: 1,
            useNativeDriver: true,
          }).start();

          setTimeout(() => {
            router.push(`/players/${player.id}`);
          }, 120);
        }}
      >
        <AnimatedImageBackground
          source={player.image}
          style={[
            styles.image,
            {
              transform: [{ scale: imageScale }],
            },
          ]}
          imageStyle={styles.imageBorder}
        >
          <Pressable
            style={styles.favoriteButton}
            onPress={async () => {
              const updated = await toggleFavorite(player.id);
              setFavorite(updated.includes(player.id));
            }}
          >
            <Ionicons
              name={favorite ? "star" : "star-outline"}
              size={28}
              color="#FFD700"
            />
          </Pressable>

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={styles.overlay}
          >
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.subtitle}>{player.subtitle}</Text>
          </LinearGradient>
        </AnimatedImageBackground>
      </Pressable>
    </Animated.View>
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

  favoriteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 999,
    padding: 8,
  },
});