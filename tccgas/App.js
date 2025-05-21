 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './components/LogoScreen'; 
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen'; 
import TelaPrincipal from './components/TelaPrincipal';
import RegisterScreen from './components/RegisterScreen';
import ConfiguracoesScreen from './components/ConfiguracoesScreen';
import NotificacoesConfiScreen from './components/NotificacoesConfiScreen';
import SomVibracaoScreen from './components/SomVibracaoScreen';
import ContasScreen from './components/ContasScreen';
import DadosPessoaisScreen from './components/DadosPessoaisScreen';
import AlterarEmailScreen from './components/AlterarEmailScreen';
import AlterarDataNascimentoScreen from './components/AlterarDataNascimentoScreen';
import AlterarSenhaScreen from './components/AlterarSenhaScreen';
import AlterarEnderecoScreen from './components/AlterarEnderecoScreen';
import ManualUsoScreen from './components/ManualUsoScreen';
import NotificacoesScreen from './components/NotificacoesScreen';
import EletricidadeDicaScreen from './components/EletrecidadeDicaScreen';
import ObstrucaoDicaScreen from './components/ObstrucaoDicaScreen';
import VerificacaoDicaScreen from './components/VerificacaoDicaScreen';
import HistoricoDetecaoScreen from './components/HistoricoDetecaoScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogoScreen"
        screenOptions={{ headerShown: false }}>
        {/* Tela inicial: LogoScreen */}
        <Stack.Screen name="LogoScreen" component={LogoScreen} />

        {/* Tela WelcomeScreen */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

        {/* Tela LoginScreen */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        {/* Tela Principal */}
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        {/* tela de configurações*/}
        <Stack.Screen name="ConfiguracoesScreen"component={ConfiguracoesScreen}/>
        {/*tela de notificações na configurações*/}
        <Stack.Screen name="NotificacoesConfiScreen" component={NotificacoesConfiScreen}/>
        {/* tela de Som e Vibrações na configurações*/}
        <Stack.Screen name="SomVibracaoScreen" component={SomVibracaoScreen} />
        {/* tela de Conta */}
        <Stack.Screen name="ContasScreen" component={ContasScreen} />
        {/* tela para editar dados*/}
        <Stack.Screen name="DadosPessoaisScreen" component={DadosPessoaisScreen} />
        <Stack.Screen name="AlterarEmailScreen" component={AlterarEmailScreen} />
        <Stack.Screen name="AlterarDataNascimentoScreen" component={AlterarDataNascimentoScreen} />
        <Stack.Screen name="AlterarSenhaScreen" component={AlterarSenhaScreen} />
        <Stack.Screen name="AlterarEnderecoScreen" component={AlterarEnderecoScreen} />
        {/* Tela de Manual de Uso*/}
        <Stack.Screen name="ManualUsoScreen" component={ManualUsoScreen} />
        {/* tela de notificações*/}
        <Stack.Screen name="NotificacoesScreen" component={NotificacoesScreen} />
        {/* tela de dica, Eletricidade*/}
        <Stack.Screen name="EletricidadeDicaScreen" component={EletricidadeDicaScreen} />
        {/* tela de dica, Obstrução*/}
        <Stack.Screen name="ObstrucaoDicaScreen" component={ObstrucaoDicaScreen} />
        {/* tela de dica, Verificação*/}
        <Stack.Screen name="VerificacaoDicaScreen" component={VerificacaoDicaScreen} />
        {/* historico de detecção*/}
        <Stack.Screen name="HistoricoDetecaoScreen" component={HistoricoDetecaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;