import { Redirect } from 'expo-router';

// Halaman ini berfungsi sebagai halaman utama aplikasi
// yang akan langsung mengarahkan pengguna ke halaman 'signup'
export default function AppIndex() {
  return <Redirect href="/(tabs)/signup" />;
}