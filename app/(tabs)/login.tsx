import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'expo-router';

const login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setErrorMessage('');

    if (email === '' || password === '') {
      setErrorMessage("Email dan password tidak boleh kosong.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/home');
      setErrorMessage('');
    } catch (error: any) {
      let message = "Terjadi kesalahan. Silakan coba lagi.";
      
      if (error.code === 'auth/invalid-credential') {
        message = "Email atau password salah.";
      } else {
        message = "Terjadi kesalahan: " + error.message;
      }
      
      setErrorMessage(message);
      console.error(error.message);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password ditekan!');
  };

  const handleSignUp = () => {
    router.replace('./signup');
  };

  return (
    <LinearGradient
      colors={['#1E0E3D', '#4B2A80']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.appNameContainer}>
          <Icon name="play-circle" type="ionicon" color="#fff" size={30} style={styles.appNameIcon} />
          <Text style={styles.appName}>THE MOVIE PEZ</Text>
        </View>

        <View style={styles.formContainer}>
          {/* Input Email dengan Ikon */}
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

          {/* Input Password dengan Ikon */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="#ccc"
              secureTextEntry={!showPassword}
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
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>log in</Text>
          </TouchableOpacity>
          
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLinkText}>Sign up</Text>
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
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  appNameIcon: {
    marginRight: 10,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
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
  loginButton: {
    width: '15%', // Ubah lebar tombol login
    backgroundColor: '#643ea0ff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#c485ffff',
    marginTop: 10,
    fontSize: 14,
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  noAccountText: {
    color: '#ccc',
  },
  signUpLinkText: {
    color: '#c485ffff',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ef4444',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  // Gaya baru untuk ikon di dalam input
  inputIcon: {
    marginLeft: 5,
  }
});

export default login;