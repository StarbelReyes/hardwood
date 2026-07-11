import Animated, {
    FadeInUp,
} from "react-native-reanimated";
  
  type Props = {
    children: React.ReactNode;
    delay?: number;
  };
  
  export function AnimatedSection({
    children,
    delay = 0,
  }: Props) {
    return (
      <Animated.View
        entering={FadeInUp
          .delay(delay)
          .duration(500)}
      >
        {children}
      </Animated.View>
    );
  }