import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import citacoes from './assets/frases.json';

interface Citacao {
  frase: string;
  autor: string;
  imagem: string;
}

const App: React.FC = () => {
  const [citacaoAtual, setCitacaoAtual] = useState<Citacao | null>(null);

  const getCitacaoAleatoria = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * citacoes.length);
    } 
    while (citacaoAtual && citacoes[randomIndex].frase === citacaoAtual.frase);
  
    setCitacaoAtual(citacoes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {citacaoAtual ? (
        <>
          <Image
            source={{ uri: citacaoAtual.imagem }}
            style={styles.imagem}
          />
          <Text style={styles.textCitacao}>"{citacaoAtual.frase}"</Text>
          <Text style={styles.labelAutor}>- {citacaoAtual.autor}</Text>
        </>
      ) : (
        <Text style={styles.bemvindoLabel}>Bem-vindo ao QuotesApp!</Text>
      )}

      <TouchableOpacity style={styles.botao} onPress={getCitacaoAleatoria}>
        <Text style={styles.textoBotao}>
          {citacaoAtual ? 'Mostrar outra citação' : 'Mostrar citação'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bemvindoLabel: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    marginBottom: 20,
  },
  textCitacao: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  labelAutor: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#3b5998',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
  },
});