import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'expo-router';

const signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    setErrorMessage('');

    if (username === '' || email === '' || password === '' || birthday === '') {
      setErrorMessage("Semua kolom harus diisi.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      router.replace('/(tabs)/home');
      
    } catch (error: any) {
      let message = "Terjadi kesalahan. Silakan coba lagi.";
      if (error.code === 'auth/email-already-in-use') {
        message = "Email ini sudah digunakan. Silakan gunakan email lain.";
      } else if (error.code === 'auth/weak-password') {
        message = "Password terlalu lemah. Minimal 6 karakter.";
      } else {
        message = "Terjadi kesalahan: " + error.message;
      }
      
      setErrorMessage(message);
      console.error(error.message);
    }
  };

  const handleLoginPress = () => {
    router.replace('./login');
  };

  return (
    <LinearGradient
      colors={['#1E0E3D', '#4B2A80']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
        <View style={styles.header}>
          <Icon name="play-circle" type="ionicon" color="#fff" size={30} style={styles.logoIcon} />
          <Text style={styles.logoText}>THE MOVIE PEZ</Text>
        </View>

        <View style={styles.formContainer}>
          {/* Kolom Username */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={setUsername}
            />
            <Icon
              name="person-outline"
              type="ionicon"
              color="#ccc"
              size={20}
              style={styles.inputIcon}
            />
          </View>
          
          {/* Kolom Email */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Icon
              name="mail-outline"
              type="ionicon"
              color="#ccc"
              size={20}
              style={styles.inputIcon}
            />
          </View>

          {/* Kolom Password */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="#ccc"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Icon
              name="lock-closed-outline"
              type="ionicon"
              color="#ccc"
              size={20}
              style={styles.inputIcon}
            />
          </View>
          
          {/* Kolom Ulang Tahun */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="birthday"
              placeholderTextColor="#ccc"
              value={birthday}
              onChangeText={setBirthday}
            />
            <Icon
              name="calendar-outline"
              type="ionicon"
              color="#ccc"
              size={20}
              style={styles.inputIcon}
            />
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>sign up</Text>
          </TouchableOpacity>
          
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>

        <View style={styles.loginLinkContainer}>
          <Text style={styles.alreadyText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginLinkText}>log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(58, 31, 103, 0.7)',
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    letterSpacing: 1,
  },
  appName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  signUpButton: {
    width: '15%',
    backgroundColor: '#643ea0ff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  alreadyText: {
    color: '#fff',
  },
  loginLinkText: {
    color: '#c485ffff',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ef4444',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default signup;