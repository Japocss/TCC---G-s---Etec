import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfiguracoesScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar nas configurações"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {/* Lista de configurações */}
      <ScrollView style={styles.settingsContainer}>
        {/* Seção 1 */}
        <Text style={styles.sectionTitle}>Configurações</Text>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('NotificacoesConfiScreen')}>
          <Text style={styles.settingText}>Configuração de notificação</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Configuração do dispositivo</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Idioma</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('SomVibracaoScreen')}>
          <Text style={styles.settingText}>Som e Vibração</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* Seção 2 */}
        <Text style={styles.sectionTitle}>Acessibilidade</Text>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Configuração do dispositivo</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Localização</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Suporte ao Usuário</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Text style={styles.settingText}>Atualizações</Text>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* Data */}
        <Text style={styles.dateText}>10 de setembro de 2024</Text>
      </ScrollView>
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
    padding: 15,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 15,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  settingsContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ConfiguracoesScreen;
