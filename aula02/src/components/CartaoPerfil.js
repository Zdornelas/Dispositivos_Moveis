import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const CartaoPerfil = () => {

  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  return (
    <View style={styles.container}>

      {/* Imagem de Perfil */}
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
        style={styles.imagemPerfil}
      />

      {/* Nome e Ocupação */}
      <Text style={styles.nome}>John Doe</Text>
      <Text style={styles.ocupacao}>Desenvolvedor Mobile</Text>


      {/* Botão de Detalhes */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setDetalhesVisiveis(!detalhesVisiveis)}>
        <Text style={styles.textoBotao}>
          {detalhesVisiveis ? 'Ver Menos' : 'Ver Mais'}
        </Text>
      </TouchableOpacity>

      {/* Área dos Detalhes visíveis apenas quando detalhesVisiveis for true */}
      {detalhesVisiveis && (
        <View style={styles.detalhes}>
          <Text style={styles.textoDetalhe}>Localização: João Pessoa</Text>
          <Text style={styles.textoDetalhe}>E-mail: email@email.com</Text>
          <Text style={styles.textoDetalhe}>Hobbies: Programar, Viajar, Jogar</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  // Container principal do cartão
  container: {
    width: 300, 
    padding: 20, 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 5, 
  },

  // Estilo da imagem de perfil
  imagemPerfil: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 10, 
  },

  // Nome do usuário
  nome: {
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333', 
  },

  // Ocupação do usuário
  ocupacao: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },

  // Estilo do botão
  botao: {
    backgroundColor: '#0077b5', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 10, 
  },

  // Texto do botão
  textoBotao: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },

  // Estilo da área dos detalhes
  detalhes: {
    marginTop: 10, 
    paddingTop: 10, 
    borderTopWidth: 1, 
    borderColor: '#ddd', 
    width: '100%', 
  },

  // Texto dentro da área de detalhes
  textoDetalhe: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
})

export default CartaoPerfil