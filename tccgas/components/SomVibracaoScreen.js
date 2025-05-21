import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SomVibracaoScreen = ({ navigation }) => {
  const [somAtivo, setSomAtivo] = useState(true);
  const [vibracaoAtiva, setVibracaoAtiva] = useState(true);
  const [notificacaoSilenciosa, setNotificacaoSilenciosa] = useState(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Som e Vibração</Text>
      </View>

      {/* Configurações */}
      <View style={styles.content}>
        {/* Som */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Som</Text>
            <Text style={styles.settingDescription}>
              Personalizar Som
            </Text>
          </View>
          <Switch
            value={somAtivo}
            onValueChange={setSomAtivo}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={somAtivo ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        {/* Vibração */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Vibração</Text>
            <Text style={styles.settingDescription}>
              Vibrar quando receber notificações
            </Text>
          </View>
          <Switch
            value={vibracaoAtiva}
            onValueChange={setVibracaoAtiva}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={vibracaoAtiva ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        {/* Notificação Silenciosa */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Notificação Silenciosa</Text>
            <Text style={styles.settingDescription}>
              Desativar som e vibração
            </Text>
          </View>
          <Switch
            value={notificacaoSilenciosa}
            onValueChange={setNotificacaoSilenciosa}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={notificacaoSilenciosa ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
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
    paddingTop: 30,
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
    padding: 25,
    paddingTop: 30,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default SomVibracaoScreen;