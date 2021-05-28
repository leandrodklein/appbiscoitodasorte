import React, { Component } from 'react';
import {
  View,
  Text,  
  StyleSheet,  
  Image, 
  TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/public/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Não importa a cor do céu. Quem faz o dia bonito é você.',
      'Bom dia! Que seu dia seja igual a vontade de Deus: bom, perfeito e agradável.',
      'Sorria! Deus acaba de te dar um novo dia e coisas extraordinárias podem acontecer se você crer!',
      'Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.',
      'Que o dia seja leve, que a tristeza seja breve e que o dia seja feliz. Bom dia!',
      'Pra hoje: sorrisos bobos, uma mente tranquila e um coração cheio de paz.',
      'A cada nova manhã, nasce junto uma nova chance. Bom dia!'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/public/biscoitoAberto.png')
    });
  }


  render(){
    return(
      <View style={styles.container}>

        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>  
    );
  }  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 30,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
