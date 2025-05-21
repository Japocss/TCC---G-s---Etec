import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlterarSenhaScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alterar Senha</Text>
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          A senha deve ter no mínimo 6 caracteres e incluir uma combinação de números e símbolos (!@#$).
        </Text>

        {/* Campo Senha Atual */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha atual</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Digite sua senha atual"
            placeholderTextColor="#999"
          />
        </View>

        {/* Campo Nova Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nova senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Digite a nova senha"
            placeholderTextColor="#999"
          />
        </View>

        {/* Campo Confirmar Nova Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirmar nova senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirme a nova senha"
            placeholderTextColor="#999"
          />
        </View>

        {/* Botão Alterar Senha */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6DDDD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#0C284D',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  instructionText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#0C284D',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 60,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlterarSenhaScreen;