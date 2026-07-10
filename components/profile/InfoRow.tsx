import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type InfoRowProps = {
  label: string;
  value: string | number;
};

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 16,
  },

  label: {
    color: Colors.muted,
    fontSize: 14,
  },

  value: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },
});