import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importe o useNavigation

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nSensor, setNSensor] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'facebook' ou 'google'

  const navigation = useNavigation(); // Hook para navegação

  const handleLogin = () => {
    // Simulação de login bem-sucedido
    console.log('Usuário:', username);
    console.log('Senha:', password);
    console.log('N-Sensor:', nSensor);

    // Navega para a TelaPrincipal após o login
    navigation.navigate('TelaPrincipal');
  };

  const handleFacebookLogin = () => {
    setModalType('facebook'); // Define o tipo de modal como Facebook
    setModalVisible(true); // Abre a aba
  };

  const handleGoogleLogin = () => {
    setModalType('google'); // Define o tipo de modal como Google
    setModalVisible(true); // Abre a aba
  };

  const closeModal = () => {
    setModalVisible(false); // Fecha a aba
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0C284D' }]}>
      {/* Logo no lugar do texto "Login" */}
      <Image
        source={require('./assets/logo.png')} // Ajuste o caminho da logo
        style={styles.logo}
      />

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>N-Sensor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o N-Sensor"
        placeholderTextColor="#999"
        value={nSensor}
        onChangeText={setNSensor}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
  <Text style={styles.link}>Cadastrar-se</Text>
</TouchableOpacity>

      <Text style={styles.otherOptions}>Outras opções</Text>

      {/* Ícones do Facebook e Google com fundo circular branco */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={handleFacebookLogin} style={styles.socialIconBackground}>
          <Icon name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoogleLogin} style={styles.socialIconBackground}>
          <Icon name="google" size={24} color="#db4a39" />
        </TouchableOpacity>
      </View>

      {/* Modal (aba) para login com e-mail aleatório */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Botão para fechar a aba */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Icon name="times" size={20} color="white" />
            </TouchableOpacity>

            {/* Título da aba (Facebook ou Google) */}
            <Text style={styles.modalTitle}>
              {modalType === 'facebook' ? 'Facebook' : 'Google'}
            </Text>

            {/* Opções de login com e-mail aleatório */}
            <TouchableOpacity style={styles.emailOption}>
              <View style={styles.emailIconCircle}>
                <Image
                  source={modalType === 'facebook' ? require('./assets/logo1.jpeg') : require('./assets/logo1.jpeg')}
                  style={styles.emailLogo}
                />
              </View>
              <Text style={styles.emailText}>Cjramos@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailOption}>
              <View style={styles.emailIconCircle}>
                <Image
                  source={modalType === 'facebook' ? require('./assets/logo3.jpeg') : require('./assets/logo3.jpeg')}
                  style={styles.emailLogo}
                />
              </View>
              <Text style={styles.emailText}>Pauloplinio@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailOption}>
              <View style={styles.emailIconCircle}>
                <Image
                  source={modalType === 'facebook' ? require('./assets/logo2.jpeg') : require('./assets/logo2.jpeg')}
                  style={styles.emailLogo}
                />
              </View>
              <Text style={styles.emailText}>Caju1212@gmail.com</Text>
            </TouchableOpacity>

            {/* Botão para adicionar outra conta */}
            <TouchableOpacity style={styles.addAccountButton}>
              <Icon name="plus" size={20} color="white" />
              <Text style={styles.addAccountText}>Adicionar outra conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#1A3A5A',
    borderRadius: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1A3A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#4A90E2',
    marginBottom: 10,
  },
  otherOptions: {
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 10,
  },
  socialIconBackground: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#262121',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  emailIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20, // Metade da largura/altura para criar um círculo
    backgroundColor: 'white', // Fundo branco para o círculo
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  emailLogo: {
    width: 42,
    height: 42,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  emailText: {
    color: 'white',
    fontSize: 16,
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addAccountText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default LoginScreen;