import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type TeamCardProps = {
  name: string;
  years: string;
};

export function TeamCard({ name, years }: TeamCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.team}>{name}</Text>

      <Text style={styles.years}>{years}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },

  team: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "700",
  },

  years: {
    color: Colors.muted,
    fontSize: 16,
    marginTop: 6,
  },
});