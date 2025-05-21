import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contas</Text>
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        {/* Perfil */}
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require('./assets/logo1.jpeg')}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Carl Johnson Ramos</Text>
              <Text style={styles.profileEmail}>Cjramos@gmail.com</Text>
            </View>
          </View>
          <Icon name="check" size={20} color="#0C284D" />
        </View>

        {/* Botão Gerenciar Contas */}
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageButtonText}>Gerenciar contas</Text>
        </TouchableOpacity>

        {/* Adicionar Conta */}
        <TouchableOpacity style={styles.addAccountButton}>
          <Icon name="plus" size={16} color="#0C284D" style={styles.plusIcon} />
          <Text style={styles.addAccountText}>Adicionar Outra Conta</Text>
        </TouchableOpacity>

        {/* Opções */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.optionItem}
            onPress={() => navigation.navigate('ConfiguracoesScreen')}
          >
            <Text style={styles.optionText}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>Política de privacidade</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.optionItem}
            onPress={() => navigation.navigate('DadosPessoaisScreen')}
          >
            <Text style={styles.optionText}>Editar dados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>Ajuda</Text>
          </TouchableOpacity>
        </View>

        {/* Sair */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    color: '#0C284D',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileText: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  manageButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  manageButtonText: {
    color: '#0C284D',
    fontSize: 16,
    textAlign: 'center',
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#0C284D',
    borderRadius: 8,
    marginBottom: 30,
  },
  plusIcon: {
    marginRight: 10,
  },
  addAccountText: {
    color: '#0C284D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
    marginBottom: 20,
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    padding: 15,
  },
  logoutText: {
    color: '#FF0000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ContasScreen;