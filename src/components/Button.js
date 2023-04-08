// Import principal do react
import React from "react";

// StyleSheet = Trabalhar com estilização do component; 
// Text =  Renderização de textos; 
// Dimensions =  Para saber com as dimenções dos dispositivos; 
// TouchableHighlight = Necessario para implementação do botão;
 
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

// Definindo os styles do button
const styles = StyleSheet.create({
    // Definindo a propriedade button que usaremos para estilizar o component
    button: {
        //Definindo o tamanho da fonte
        fontSize: 30,
        //Definindo a altura do button, nesse exemplo estamos pegando as dimenções do dispositivo e dividindo por 4 partes iguais.  
        height: Dimensions.get('window').width / 4,
         //Definindo a largura do button, nesse exemplo estamos pegando as dimenções do dispositivo e dividindo por 4 partes iguais.
         //Definido o width e o height dessa forma, teremos os botãoes quadrados 
        width: Dimensions.get('window').width / 4,
        //Definindo o espaçamento 
        padding: 20,
        // Definidno a cor de fundo do botão
        backgroundColor: '#f0f0f0',
        // Alinhado o texto no centro do button
        textAlign: 'center',
        // Definindo um borda para o button
        borderWidth: 1,
        // Definindo a cor da borda
        borderColor: '#888'
    
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231' 
    },
    buttonDouble: {
        //Definindo a largura do button, nesse exemplo estamos pegando as dimenções do dispositivo e dividindo por 4 partes iguais e multiplicando por 2 para que ele ocupe o espça de dois buttons deiferente da propriedade acima. 
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        //Definindo a largura do button, nesse exemplo estamos pegando as dimenções do dispositivo e dividindo por 4 partes iguais e multiplicando por 3 para que ele ocupe o espça de três buttons deiferente da propriedade acima. 
        width: (Dimensions.get('window').width / 4) * 3
    }
});

// Criando o component 
export default props => {

    // Criar array com styles
    const stylesButton = [styles.button];

    // verificando se props.double é true, se for será adicionado o style buttonDouble ao array de styles  
    if(props.double) stylesButton.push(styles.buttonDouble)
     // verificando se props.triple é true, se for será adicionado o style buttonTriple ao array de styles  
    if(props.triple) stylesButton.push(styles.buttonTriple)
    // verificando se props.opration é true, se for será adicionado o style opration ao array de styles  
    if(props.operation) stylesButton.push(styles.operationButton)

    //Retornando o JSX responsavel por renderizar o component
    return (
        // Utilizando o component TouchableHighlight que é um pepaço onde o usuárion pode tocar, recebendo um evento de click através de um propriedade, sendo disparado em um elemento pai 
         // Em seguida é adicionando o label do button, utilizando a propriedades criada para estilizar o component;
         // No text recebemos a props label que é definida no component pai, com o nome do button
        <TouchableHighlight onPress={ () => props.onClick(props.label)}>
           <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>

    )
};