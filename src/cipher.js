

 function encode(){
  
  let sentenceBeCode = document.getElementById("enterText").value
  let desloc = document.getElementById("enterNumber").value
  desloc = parseInt(desloc)
  let codLetraAscII = '';
  let sentenceNew = '';
  
  for(let i = 0; i < sentenceBeCode.length; i++){
  codLetraAscII = sentenceBeCode.charCodeAt(i); 
  let sentenceForm = '';
   
    if (sentenceBeCode.charCodeAt(i) >= 65 && sentenceBeCode.charCodeAt(i) <= 90){ 
      sentenceForm  = ((codLetraAscII - 65 + (desloc % 26 ) + 26 ) % 26 + 65);
    
    } else if (sentenceBeCode.charCodeAt(i) >= 97 && sentenceBeCode.charCodeAt(i) <= 122){ 
      sentenceForm = ((codLetraAscII - 97 + ( desloc % 26 ) + 26 ) % 26 + 97);

    } else { sentenceNew += String.fromCharCode(codLetraAscII) 
  }
  console.log(sentenceForm);  
  sentenceNew += String.fromCharCode(sentenceForm);

  console.log(sentenceNew);
  document.getElementById("textCipher").innerHTML = sentenceNew;   
  }
      
  }
       
    
   
function decode(){
  let sentenceBeCode = document.getElementById("enterText").value
  let desloc = document.getElementById("enterNumber").value
  desloc = parseInt(desloc)
  let codLetraAscII = '';
  let sentenceNew = '';
    
    for(let i = 0; i < sentenceBeCode.length; i++){
    codLetraAscII = sentenceBeCode.charCodeAt(i); 
    let sentenceForm = '';
     
      if (sentenceBeCode.charCodeAt(i) >= 65 && sentenceBeCode.charCodeAt(i) <= 90){
         sentenceForm  = ((codLetraAscII - 65 - (desloc % 26) + 26) % 26 + 65);
      
      } else if (sentenceBeCode.charCodeAt(i) >= 97 && sentenceBeCode.charCodeAt(i) <= 122){ 
        sentenceForm = ((codLetraAscII - 97 - (desloc % 26) + 26) % 26 + 97);

      } else { sentenceNew += String.fromCharCode(codLetraAscII) 
        }
      
      sentenceNew += String.fromCharCode(sentenceForm);
      
      console.log(sentenceNew);
      document.getElementById("textDecipher").innerHTML = sentenceNew;  
    }
  }
    