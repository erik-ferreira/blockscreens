import { View, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"

export function ScreenA() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Button title="Ir para tela B" onPress={() => navigate("screenB")} />
    </View>
  )
}
