import { SafeAreaView, ScrollView, View, Text, Linking } from "react-native";
import { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "@rneui/base";
import { Menu } from "./components/dayCard/day";
import { Sponsors } from "./components/sponsors/sponsors";
import { Header } from "./components/title/title";

export default function App() {
  const [days, setDays] = useState([]);
  const [reload, setReload] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMenu = async () => {
    setLoading(true);
    setDays([]);

    await axios
      .get("https://cardapio-ifc-scrapper-production.up.railway.app/cardapios")
      .then((res) => {
        setLoading(false);
        setDays(res.data.cardapio);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <Header />
      <View className="w-full h-3/5 items-center justify-center">
        {error ? (
          <View className="flex-1 items-center justify-center">
            <Text className="text-red-400 text-center p-2">
              Erro ao carregar o cardápio, por favor tente novamente mais tarde.
            </Text>
            <Text className="text-white text-center p-2 mb-3">
              Caso o erro persista, entre em contato com o desenvolvedor através
              dos canais de suporte
            </Text>
            <Text
              className="text-blue-500"
              onPress={() =>
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=5547999607917&text=Erro%20no%20Aplicativo%20de%20card%C3%A1pios%20do%20Ifc"
                )
              }
            >
              Suporte
            </Text>
          </View>
        ) : (
          <Menu days={days} loading={loading} />
        )}
      </View>
      <Sponsors />
    </SafeAreaView>
  );
}
