import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Importando o component button
import Button from './src/components/Button';

//Importanto o component Display
import Display from './src/components/Display';

//Definindo o stado inicial da calculadora
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  //Definindo um array para guardar os valores
  values: [0, 0],
  //define qual valor do array está sendo setado
  current: 0,
}

export default class App extends Component {
  
  // Utilizando o operador spread para setar o estado inicial
  state = { ...initialState };

  // Função para inserir o valor digitado alterando os tado de displayValue
  addDigit = n => {

    
   // Verificando se o display value for 0 o clearDisplay estiver setada, será limpado o value da calculadora
   const clearDisplay =  this.state.displayValue === '0' 
   || this.state.clearDisplay ;

    // Verificando se já existe o ponto dentro do displayvalue, se exister devemos ignorar o novo ponto digitado
    if (n === '.' && !clearDisplay &&this.state.displayValue.includes('.')) {
      return
    }

   // Definindo valor atual caso o clear display seja false
   const currentValue = clearDisplay ? '' : this.state.displayValue;
   // concatenando os valores que serão exibidos no display, onde n é o valor recebido na função
   const displayValue = currentValue + n;
   // Alterando o estado do displayValue e alterando o clearDisplay para false
   this.setState({ displayValue, clearDisplay: false });

   // Verificando se foi digitado um valor valido
   if (n !== '.'){
    // Fazendo um parse float do valor do display
    const newValue = parseFloat(displayValue);
    // Utilizando o operador spread para clonar o array value
    const values = [...this.state.values];
    //setando o novo valor dentro do array
    values[this.state.current] = newValue
    //Fazendo a mudança do estado do array de valores, setando o novo array
    this.setState({ values });

   }



  };

  //Função para zerar a calculadora, alterando o estado de displayValue
  clearMemory = () => {
    //Restaurando o stado inicial da cauculadora
    this.setState({ ...initialState });
  }

  // Recebendo a operação
  setOperation = operation => {
    //Verificando se o current é igual a 0
    if (this.state.current === 0) {
      // Vamos setar a operação digitada, setar o current para posição 1 do array e limpar o display
      this.setState({ operation, current: 1, clearDisplay: true})
    }else{
      // Se a operção for igual a '=' equals vai receber true
      const equals = operation === '=';
      // Usando o spread para gerar o clone do array
      const values = [...this.state.values];

      //Será utilizado o try and cache para utilizarmos e eval, caso ocorra algum erro ele retornarar para o estado anterior. Exemplo se inserirmos 22 = 3 ele apresentarar erro, pois não é uma operação valida.  
      try {
        // O eval() será responsavel por executar a opeção
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch{
        // Se por acaso ocorrer algum erro o valor da variavel receberá o seu antigo valor.
        values[0] = this.state.values[0]
      }
      // Definindo a posição 1 com o valor de 0 após realizar a operação
      values[1] = 0;
      // Setando novos estados, diplay value sempre sera aposição 0 do array e operation se receber um '=' será setado null, caso contratio, será setado a opeção digitada
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      })
    }

  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* Intanciando o component display e passando a props value com o valor definido no estado inicial em state */}
        <Display value={this.state.displayValue} />
        { 
          //Criando uma nova view par renderizar o button, vamos utilizar o styles button
        }
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />        
          <Button label='/' operation onClick={() => this.setOperation('/')}/>        
          <Button label='7' onClick={this.addDigit}/>        
          <Button label='8' onClick={this.addDigit}/>       
          <Button label='9' onClick={this.addDigit}/>     
          <Button label='*'  operation onClick={() => this.setOperation('*')} />
          <Button label='4' onClick={this.addDigit}/>     
          <Button label='5' onClick={this.addDigit}/>      
          <Button label='6' onClick={this.addDigit}/>      
          <Button label='-'  operation onClick={() => this.setOperation('-')} /> 
          <Button label='1' onClick={this.addDigit}/>        
          <Button label='2' onClick={this.addDigit}/>        
          <Button label='3' onClick={this.addDigit}/>  
          <Button label='+'  operation onClick={() => this.setOperation('+')} />
          <Button label='0' double onClick={this.addDigit}/>  
          <Button label='.'  onClick={this.addDigit}/> 
          <Button label='='  operation onClick={() => this.setOperation('=')}/>                           
        </View>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    //Definidndo o flex direction para alinar o flexitens na horizontal
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
