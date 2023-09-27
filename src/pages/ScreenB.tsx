import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { useScreenGuard } from "../hooks/useScreenGuard"

import { styles } from "./styles"

export function ScreenB() {
  useScreenGuard("screenB")
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela B</Text>
    </View>
  )
}
