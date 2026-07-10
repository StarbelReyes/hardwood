import { Colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type TimelineCardProps = {
  year: number;
  icon: string;
  title: string;
  description: string;
};

export function TimelineCard({
  year,
  icon,
  title,
  description,
}: TimelineCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.year}>{year}</Text>

        <View style={styles.line} />
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>{icon}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
  },

  left: {
    width: 70,
    alignItems: "center",
  },

  year: {
    color: Colors.accent,
    fontWeight: "700",
    fontSize: 16,
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.divider,
    marginTop: 8,
  },

  card: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 18,
  },

  icon: {
    fontSize: 28,
  },

  title: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },

  description: {
    color: Colors.muted,
    marginTop: 8,
    lineHeight: 24,
    fontSize: 16,
  },
});