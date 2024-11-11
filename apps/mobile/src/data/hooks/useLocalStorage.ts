import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLocalStorage() {
  const getItem = useCallback(async (key: string) => {
    const localValue = await AsyncStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : null;
  }, []);

  const salveItem = useCallback(async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  return { getItem, salveItem };
}