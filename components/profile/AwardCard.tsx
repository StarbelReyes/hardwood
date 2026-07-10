import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type AwardCardProps = {
  icon: string;
  label: string;
  value: number;
};

export function AwardCard({
  icon,
  label,
  value,
}: AwardCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,

    alignItems: "center",

    flex: 1,

    margin: 6,
  },

  icon: {
    fontSize: 32,
    marginBottom: 12,
  },

  value: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: "700",
  },

  label: {
    color: Colors.muted,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});