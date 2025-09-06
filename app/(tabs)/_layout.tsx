import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      {/* Halaman signup akan menjadi yang pertama dimuat */}
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      
      {/* Kemudian halaman login */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      
      {/* Dan halaman home berada di urutan terakhir */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}