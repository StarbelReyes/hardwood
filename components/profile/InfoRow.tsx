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
    color: "#7B8794",
    fontSize: 14,
  },

  value: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },
});