
function enterText()


function encode(setenceBeCode, desloc){
    let codLetraAscII = '';
    let setenceNew = '';
    
    for(let i = 0; i < setenceBeCode.length; i++){
    codLetraAscII = setenceBeCode.charCodeAt(i); 
     let setenceFormCxAlta = '';
     let setenceFormCxBaixa = '';
      if (setenceBeCode.charCodeAt(i) >= 65 && setenceBeCode.charCodeAt(i) <= 90){ setenceFormCxAlta  = ((codLetraAscII - 65 + (desloc % 26 ) + 26 ) % 26 + 65);
      
      } else if (setenceBeCode.charCodeAt(i) >= 97 && setenceBeCode.charCodeAt(i) <= 122){ setenceFormCxBaixa = ((codLetraAscII - 97 + ( desloc % 26 ) + 26 ) % 26 + 97);
      } else { setenceNew += String.fromCharCode(codLetraAscII) 
      }
      
    setenceNew += String.fromCharCode(setenceFormCxAlta, setenceFormCxBaixa);
    
    
    }
    console.log(setenceNew);
    return setenceNew;
        
    }
    const cifrar = encode('Olá, tudo bem?', 1)
    console.log(cifrar);
    
    
    function decode(setenceBeCode, desloc){
    let codLetraAscII = '';
    let setenceNew = '';
    
    for(let i = 0; i < setenceBeCode.length; i++){
    codLetraAscII = setenceBeCode.charCodeAt(i); 
     let setenceFormCxAlta = '';
     let setenceFormCxBaixa = '';
      if (setenceBeCode.charCodeAt(i) >= 65 && setenceBeCode.charCodeAt(i) <= 90){ setenceFormCxAlta  = ((codLetraAscII - 65 - (desloc % 26) + 26) % 26 + 65);
      
      } else if (setenceBeCode.charCodeAt(i) >= 97 && setenceBeCode.charCodeAt(i) <= 122){ setenceFormCxBaixa = ((codLetraAscII - 97 - (desloc % 26) + 26) % 26 + 97);
      } else { setenceNew += String.fromCharCode(codLetraAscII) 
      }
      
    setenceNew += String.fromCharCode(setenceFormCxAlta, setenceFormCxBaixa);
        
    }
    console.log(setenceNew);
    return setenceNew;
         
    }
    const decifrar = decode('Pmá, uvep cfn?', 1)
    console.log(decifrar);