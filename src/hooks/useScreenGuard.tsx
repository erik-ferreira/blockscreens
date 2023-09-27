import { useEffect, useState } from "react"
import * as LocalAuthentication from "expo-local-authentication"
import { useNavigationState } from "@react-navigation/native"

export function useScreenGuard(screenName: string) {
  const navigationState = useNavigationState((state) => state)

  const [sessionTime, setSessionTime] = useState(1)

  async function onAuthentication() {
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Sessão expirada",
    })

    if (auth.success) {
      setSessionTime(1)
    } else {
      onAuthentication()
    }
  }

  useEffect(() => {
    if (sessionTime <= 10) {
      const timer = setTimeout(() => {
        setSessionTime((prevState) => prevState + 1)
        console.log(sessionTime)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      if (navigationState.routes) {
        const currentScreen = navigationState.routes[navigationState.index]

        if (currentScreen.name === screenName) {
          onAuthentication()
        }
      }
    }
  }, [sessionTime])
}
