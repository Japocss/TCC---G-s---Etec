import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ManualUsoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Faixa superior azul */}
      <View style={styles.blueHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Manual de Uso</Text>
        
        <Text style={styles.sectionTitle}>Introdução</Text>
        <Text style={styles.text}>
          Bem-vindo ao Smart G, seu assistente para a segurança ambiental! Este aplicativo é projetado para monitorar a qualidade do ar e detectar vazamentos de gás, mantendo você informado e seguro.
        </Text>

        <Text style={styles.sectionTitle}>Tela Principal</Text>
        <Text style={styles.text}>
          Na tela principal, você encontrará:
          {"\n\n"}• Porcentagem de Gás no Ambiente: Um gráfico ou medidor que exibe a concentração de gás detectada.
          {"\n"}  - Verde: Níveis seguros
          {"\n"}  - Amarelo: Níveis de alerta
          {"\n"}  - Vermelho: Níveis perigosos
        </Text>

        <Text style={styles.sectionTitle}>Notificações</Text>
        <Text style={styles.text}>
          • Alertas em Tempo Real: O aplicativo enviará notificações imediatas caso um vazamento de gás seja detectado.
          {"\n"}• Dicas de Segurança: Após um alerta, o aplicativo fornecerá dicas para agir rapidamente e garantir sua segurança.
        </Text>

        <Text style={styles.sectionTitle}>Dicas de Prevenção de Vazamentos</Text>
        <Text style={styles.text}>
          • Inspeções Regulares: Verifique suas instalações de gás regularmente para detectar possíveis vazamentos.
          {"\n"}• Ventilação Adequada: Mantenha o ambiente bem ventilado.
          {"\n"}• Equipamentos em Boas Condições: Certifique-se de que os aparelhos que utilizam gás estão em bom estado.
        </Text>

        <Text style={styles.sectionTitle}>Histórico de Detecção</Text>
        <Text style={styles.text}>
          • Registro de Leituras: O aplicativo armazenará um histórico das detecções de gás, incluindo data, hora e níveis detectados.
          {"\n"}• Exportar Dados: Você pode exportar o histórico para um formato de arquivo (como CSV) para revisão futura.
        </Text>

        <Text style={styles.sectionTitle}>Configurações</Text>
        <Text style={styles.text}>
          • Notificações: Personalize as configurações de notificação para escolher como e quando deseja ser avisado.
          {"\n"}• Sensibilidade do Sensor: Ajuste a sensibilidade do sensor de gás conforme necessário.
          {"\n"}• Dados Pessoais: Gerencie suas informações pessoais e preferências de segurança.
        </Text>

        <Text style={styles.sectionTitle}>Conclusão</Text>
        <Text style={styles.text}>
          O Smart G é sua ferramenta para garantir a segurança e o bem-estar em casa. Utilize-o de forma proativa e siga as dicas de segurança para manter um ambiente seguro.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blueHeader: {
    backgroundColor: '#0C284D',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 15,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#0C284D',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#0C284D',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
});

export default ManualUsoScreen;