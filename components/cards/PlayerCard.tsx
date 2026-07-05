import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type PlayerCardProps = {
  name: string;
  subtitle: string;
};

export function PlayerCard({ name, subtitle }: PlayerCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B2130",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
  },

  name: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    color: "#9AA4B2",
    marginTop: 6,
    fontSize: 16,
  },
});