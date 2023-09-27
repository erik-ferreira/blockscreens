import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"

export function ScreenB() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela B</Text>
    </View>
  )
}
