import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificacoesConfiScreen = ({ navigation }) => {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(false);
  const [estadoSensorAtivo, setEstadoSensorAtivo] = useState(true);
  const [segundoPlanoAtivo, setSegundoPlanoAtivo] = useState(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho com mais margem no topo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configuração de Notificações</Text>
      </View>

      {/* Configurações com mais espaçamento */}
      <View style={styles.content}>
        {/* Ativar Notificações */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Ativar notificações</Text>
            <Text style={styles.settingDescription}>
              Informar quando um sensor estiver ativado, desativado ou fora de operação.
            </Text>
          </View>
          <Switch
            value={notificacoesAtivas}
            onValueChange={setNotificacoesAtivas}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={notificacoesAtivas ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        {/* Estado do Sensor */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Estado do Sensor</Text>
            <Text style={styles.settingDescription}>
              Informar quando um sensor estiver ativado, desativado ou fora de operação.
            </Text>
          </View>
          <Switch
            value={estadoSensorAtivo}
            onValueChange={setEstadoSensorAtivo}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={estadoSensorAtivo ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        {/* Segundo Plano */}
        <View style={styles.settingItem}>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Segundo Plano</Text>
            <Text style={styles.settingDescription}>
              Notificar mesmo quando o app estiver em segundo plano
            </Text>
          </View>
          <Switch
            value={segundoPlanoAtivo}
            onValueChange={setSegundoPlanoAtivo}
            trackColor={{ false: "#767577", true: "#0C284D" }}
            thumbColor={segundoPlanoAtivo ? "#f4f3f4" : "#f4f3f4"}
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
    paddingTop: 30, // Aumentei o padding no topo
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22, // Aumentei o tamanho da fonte
    color: '#0C284D',
    fontWeight: 'bold',
  },
  content: {
    padding: 25,
    paddingTop: 30, // Aumentei o espaçamento no topo do conteúdo
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30, // Aumentei o espaçamento entre itens
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 18, // Aumentei o tamanho da fonte
    color: '#333',
    marginBottom: 8, // Aumentei o espaçamento
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 14, // Aumentei o tamanho da fonte
    color: '#666',
    lineHeight: 18, // Melhorei o espaçamento entre linhas
  },
});

export default NotificacoesConfiScreen;