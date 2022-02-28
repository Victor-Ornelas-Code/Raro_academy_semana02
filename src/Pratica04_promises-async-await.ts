// Questao 01:
// Utilizando o enunciado e código do exercício "as rosas não falam", presentes no bloco de exercícios anterior,
//  você deve implementar a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**).
//  **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts promisificados.

const desafio1asRosasNaoFalam = async () => {
    type callbackFn = () => void;

    const geraIntervaloAleatrio = (): number => Math.floor(Math.random() * 3 * 1000);
    
    // métodos de versos. Estes métodos deverão ser modificados.
     const queixoMeAsRosas = () => {
     return new Promise((resolve: any) => {setTimeout(() => {
     console.log('Queixo-me às rosas');
     resolve();
     }, geraIntervaloAleatrio())
     });
    };
  
    const masQueBobagem = () => {
        return new Promise((resolve: any) => {setTimeout(() => {
         console.log('Mas que bobagem');
         resolve();
         }, geraIntervaloAleatrio())
         });
        };
  
    const asRosasNaoFalam = () => {
        return new Promise((resolve: any) => {setTimeout(() => {
        console.log('As rosas não falam');
         resolve();
         }, geraIntervaloAleatrio())
         });
        };
  
    const simplesmenteAsRosasExalam = () => {
      return new Promise((resolve: any) => {setTimeout(() => {
             console.log('Simplesmente as rosas exalam');
             resolve();
             }, geraIntervaloAleatrio())
             });
    };
    
    const oPerfumeQueRoubamDeTi = () => {
        return new Promise((resolve: any) => {setTimeout(() => {
     console.log('O perfume que roubam de ti, ai');
     }, geraIntervaloAleatrio())
     });
    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas()
    .then(() => masQueBobagem())
    .then(() => asRosasNaoFalam())
    .then(() => simplesmenteAsRosasExalam())
    .then(() => oPerfumeQueRoubamDeTi());
    
    // await queixoMeAsRosas();
    // await asRosasNaoFalam();
    // await simplesmenteAsRosasExalam();
    // await oPerfumeQueRoubamDeTi();
  }
  
  desafio1asRosasNaoFalam();