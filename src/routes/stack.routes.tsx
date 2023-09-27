import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ScreenA } from "../pages/ScreenA"
import { ScreenB } from "../pages/ScreenB"

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="screenA" component={ScreenA} />
      <Screen name="screenB" component={ScreenB} />
    </Navigator>
  )
}
