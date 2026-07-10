import { AwardCard } from "@/components/profile/AwardCard";
import { InfoRow } from "@/components/profile/InfoRow";
import { StatCard } from "@/components/profile/StatCard";
import { TimelineCard } from "@/components/profile/TimelineCard";
import { players } from "@/data/players";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function PlayerScreen() {
  const { id } = useLocalSearchParams();

  const [showAdvancedStats, setShowAdvancedStats] = useState(false);

  const player = players.find((p) => p.id === Number(id));

  if (!player) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Player not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={player.image}
        style={styles.image}
        imageStyle={styles.imageBorder}
      />

      <Text style={styles.title}>{player.name}</Text>

      <Text style={styles.subtitle}>{player.subtitle}</Text>

      <View style={styles.infoCard}>
  <InfoRow label="Position" value={player.info.position} />
  <InfoRow label="Height" value={player.info.height} />
  <InfoRow label="Weight" value={player.info.weight} />
</View>

      <Text style={styles.sectionTitle}>Career Statistics</Text>

      <View style={styles.statsGrid}>
  {player.stats.basic.map((stat) => (
    <StatCard
      key={stat.key}
      label={stat.label}
      value={stat.value}
    />
  ))}
</View>

<Pressable
  onPress={() => setShowAdvancedStats(!showAdvancedStats)}
>
  <Text style={styles.expandText}>
    {showAdvancedStats
      ? "▲ Hide Advanced Stats"
      : "▼ Show Advanced Stats"}
  </Text>
</Pressable>

{showAdvancedStats && (
  <View style={styles.statsGrid}>
    {player.stats.advanced.map((stat) => (
      <StatCard
        key={stat.key}
        label={stat.label}
        value={stat.value}
      />
    ))}
  </View>
)}

<Text style={styles.sectionTitle}>Awards</Text>

<View style={styles.awardsGrid}>
  {player.awards.map((award) => (
    <AwardCard
      key={award.key}
      icon={award.icon}
      label={award.label}
      value={award.value}
    />
  ))}
</View>

<Text style={styles.sectionTitle}>Career Timeline</Text>

{player.timeline?.map((event) => (
  <TimelineCard
    key={`${event.year}-${event.title}`}
    year={event.year}
    icon={event.icon}
    title={event.title}
    description={event.description}
  />
))}

      <Text style={styles.bioTitle}>Biography</Text>

      <Text style={styles.bio}>{player.bio}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F17",
    padding: 24,
  },

  content: {
    paddingBottom: 40,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 24,
  },

  imageBorder: {
    borderRadius: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#9AA4B2",
    fontSize: 18,
    marginTop: 8,
  },

  infoCard: {
    backgroundColor: "#151B28",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },

  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 12,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -6,
  },

  bioTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 32,
  },

  bio: {
    color: "#D1D5DB",
    fontSize: 17,
    lineHeight: 28,
    marginTop: 12,
  },
  expandText: {
    color: "#60A5FA",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
  },
  awardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -6,
  },
});