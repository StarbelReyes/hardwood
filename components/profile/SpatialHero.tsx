import { DeviceMotion } from "expo-sensors";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

type Props = {
  backgroundImage: any;
  cutoutImage: any;
};

export function SpatialHero({
  backgroundImage,
  cutoutImage,
}: Props) {
  const [motion, setMotion] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    DeviceMotion.setUpdateInterval(16);

    const subscription = DeviceMotion.addListener((event) => {
      setMotion({
        x: event.rotation?.beta ?? 0,
        y: event.rotation?.gamma ?? 0,
      });
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={[
          styles.background,
          {
            transform: [
              { translateX: motion.y * 6 },
              { translateY: motion.x * 6 },
            ],
          },
        ]}
      />

      {/* Foreground */}
      <Image
  source={cutoutImage}
  resizeMode="contain"
  style={{
    position: "absolute",
    width: 700,
    height: 700,
    left: -230,
    top: -80,
    transform: [
      { translateX: motion.y * 14 },
      { translateY: motion.x * 14 },
    ],
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 420,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: "#000",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  cutout: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});