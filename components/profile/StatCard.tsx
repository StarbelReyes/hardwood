import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  label: string;
  value: string | number;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",

    flex: 1,

    margin: 6,
  },

  label: {
    color: Colors.muted,
    fontSize: 14,
  },

  value: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },
});