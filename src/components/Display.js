// Import principal do react
import React from "react";

// StyleSheet = Trabalhar com estilização do component; 
// Text =  Renderização de textos; 
// View =  Component react para renderizar elementos; 

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    display: {
      // o Flex 1 ele quer dizer que o elemento vai crescer diacordo com a necessidade;  
      flex: 1,
      // O padding define o espaçamento interno do component
      padding: 20,
      //JustifyContent - define o alinhamento do conteudo do elemento
      justifyContent: 'center',
      // backgroundColor - Define a cor de fundo do elemento
      backgroundColor: '#888',
      // alignItems - define o alinhamento dos flexItens
      alignItems: "flex-end",
    },
    // definido propriedade displayValues, para estilizar os valores inseridos no display
    displayValues: {
        // Definindo o tamando da font
        fontSize: 60,
        // Definindo a cor da font 
        color: '#f0f0f0',

    }
});

//Criando componente funcional
export default props =>
// Utilizando o component view para renderizar o display 
<View style={styles.display}>
    {/*Component text utilizado para renderizar os valores 
    no component;
    numberOfLines={1} - Define o número de linhas que o text pode ocupar 
    props.value - Aqui recebemos a propriedade value passada através d elemento pai */}
    <Text style={styles.displayValues} numberOfLines={1}>
        {props.value}
    </Text>

</View> 