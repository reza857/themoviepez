import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

// Tipe data untuk properti item film
interface MovieItemProps {
  poster: any;
}

// Komponen untuk menampilkan poster film
const MovieItem: React.FC<MovieItemProps> = ({ poster }) => {
  return (
    <View style={styles.movieItem}>
      <Image source={poster} style={styles.moviePoster} />
    </View>
  );
};

// Data dummy untuk poster film
const favouriteMovies = [
  { poster: require('../../assets/images/beekeeper.png') },
  { poster: require('../../assets/images/lord_war.png') },
  { poster: require('../../assets/images/the_butterflyeffect.png') },
  { poster: require('../../assets/images/tenet.jpg') },
  { poster: require('../../assets/images/v-for-vendetta.jpg') },
];

const upcomingMovies = [
  { poster: require('../../assets/images/shin_ultraman.png') },
  { poster: require('../../assets/images/shin_godzilla.png') },
  { poster: require('../../assets/images/transformers_one.jpg') },
  { poster: require('../../assets/images/zootopia.jpg') },
];

const nowStreamingMovies = [
  { poster: require('../../assets/images/interstellar.png') },
  { poster: require('../../assets/images/thelastdays_onmars.png') },
  { poster: require('../../assets/images/kamenrider_blacksun.jpg') },
  { poster: require('../../assets/images/avengers_infinity_war.jpg') },
  { poster: require('../../assets/images/project_gemini.jpg') },
];

const App = () => {
  // Fungsi yang akan dipanggil saat tautan diklik
  const handlePress = (category: string) => {
    console.log(`Anda mengklik kategori: ${category}`);
    // Di sini Anda bisa menambahkan logika lain, misalnya mengubah state
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header (sesuai gambar, tapi tanpa elemen akun & search) */}
        <View style={styles.header}>
          <Icon name="play-circle" type="ionicon" color="#fff" size={30} style={styles.logoIcon} />
          <Text style={styles.logoText}>THE MOVIE PEZ</Text>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => handlePress('Home')}>
            <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Movies')}>
            <Text style={styles.navText}>Movies</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Serials')}>
            <Text style={styles.navText}>Serials</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Documentaries')}>
            <Text style={styles.navText}>Documentaries</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('TV Shows')}>
            <Text style={styles.navText}>TV shows</Text>
          </TouchableOpacity>
        </View>

        {/* Konten Utama yang dapat digulir */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Section: Favourite */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Favourite</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
              {favouriteMovies.map((item, index) => (
                <MovieItem key={index} poster={item.poster} />
              ))}
            </ScrollView>
          </View>
          
          {/* Section: Upcoming */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
              {upcomingMovies.map((item, index) => (
                <MovieItem key={index} poster={item.poster} />
              ))}
            </ScrollView>
          </View>

          {/* Section: Now Streaming */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Now Streaming</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
              {nowStreamingMovies.map((item, index) => (
                <MovieItem key={index} poster={item.poster} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E0E3D',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3A1F67',
  },
  logoIcon: {
    marginRight: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3A1F67',
    paddingVertical: 10,
  },
  navText: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeNavText: {
    color: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
    backgroundColor: '#1E0E3D',
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieList: {
    flexDirection: 'row',
  },
  movieItem: {
    marginRight: 15,
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
});

export default App;