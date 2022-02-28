// Questao 01:
//  As rosas não falam
// "As rosas não falam", música do compositor Cartola, possui a seguinte estrofe:

//  Queixo-me às rosas
//  Mas que bobagem
//  As rosas não falam
//  Simplesmente as rosas exalam
//  O perfume que roubam de ti, ai
// No código abaixo, esta música foi implementada, porém cada verso leva um tempo indefinido (aleatório) para ser "cantado" na tela.
// A consequência disso é que raramente a música será cantada da forma correta.

// Modifique os métodos de versos, utilizando callbacks, de forma que a música seja reproduzida na sequência correta. o tipo do callback já está definido em callbackFn

import { AnyRecord } from "dns";

const desafio1asRosasNaoFalam = () => {
    type callbackFn = () => void;
    const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
    
    // métodos de versos. Estes métodos deverão ser modificados.
    
    const queixoMeAsRosas = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        return callback() 
      }, geraIntervaloAleatorio());          
    };
  
    const masQueBobagem = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        return callback() 
      }, geraIntervaloAleatorio());
      
    };
  
    const asRosasNaoFalam = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('As rosas não falam');
        return callback() 
      }, geraIntervaloAleatorio());
      
    };
  
    const simplesmenteAsRosasExalam = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        return callback() 
      }, geraIntervaloAleatorio());

    };
  
    const oPerfumeQueRoubamDeTi = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
        return callback() 
      }, geraIntervaloAleatorio());

    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas(() => {
        masQueBobagem(() => {
            asRosasNaoFalam(() => {
                simplesmenteAsRosasExalam(() => {
                    oPerfumeQueRoubamDeTi(() => {
                    });
                });
            });
        });
    });
    
    
    
  }
  
  // desafio1asRosasNaoFalam();


//   Questao02:
// Neste desafio, precisamos criar duas funções: A primeira o `despertador`, deverá receber um parâmetro de intervalo em segundos.
// O despertador deverá "tocar" após o intervalo definido pelo parâmetro.
// A segunda função, o `relogio`, deverá escrever na tela a hora atual, a cada segundo. O formato da saída deverá ser em horas:minutos:segundos.
// Importante 1: Ambos os métodos recebem o intervalo em segundos, mas os `setInterval` e `setTimeout` trabalham com milissegundos. A conversão de medida será necessária.
// Importante 2: a princípio, o relógio deverá rodar indefinidamente. Para parar a execução dele, você pode apetar um `ctrl + c`, para finalizar a execução do relógio

const despertador = (intervaloEmSegundos: number) => {
    const intervaloEmMiliSegundos = intervaloEmSegundos * 1000;
    setTimeout(() => {
        console.log(`passaram-se os ${intervaloEmSegundos} segundos`);
    }, intervaloEmMiliSegundos)
    
  }
  
  const relogio = () => {
    setInterval(function() {
        const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
      }, 1000);

    
  };
  
  // despertador(10);
  //  relogio();