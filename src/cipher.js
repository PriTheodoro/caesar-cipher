function encode(){
  
  let sentenceBeCode = document.getElementById("enterTextEncode").value
  let desloc = document.getElementById("enterNumberEncode").value
  desloc = parseInt(desloc)
  let codLetraAscII = 0;
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

  sentenceNew += String.fromCharCode(sentenceForm);
  document.getElementById("textCipher").innerHTML = sentenceNew;   
  }
  return false;
}
       
    
   
function decode(){
  let sentenceBeCode = document.getElementById("enterTextDecode").value
  let desloc = document.getElementById("enterNumberDecode").value
  desloc = parseInt(desloc)
  let codLetraAscII = 0;
  let sentenceNew = '';
    
    for(let i = 0; i < sentenceBeCode.length; i++){
    codLetraAscII = sentenceBeCode.charCodeAt(i); 
    let sentenceForm = '';
    console.log(codLetraAscII);
     
      if (sentenceBeCode.charCodeAt(i) >= 65 && sentenceBeCode.charCodeAt(i) <= 90){
         sentenceForm  = ((codLetraAscII - 65 - (desloc % 26) + 26) % 26 + 65);
      
      } else if (sentenceBeCode.charCodeAt(i) >= 97 && sentenceBeCode.charCodeAt(i) <= 122){ 
        sentenceForm = ((codLetraAscII - 97 - (desloc % 26) + 26) % 26 + 97);

      } else { sentenceNew += String.fromCharCode(codLetraAscII) 
      }
      
      sentenceNew += String.fromCharCode(sentenceForm);
      document.getElementById("textDecipher").innerHTML = sentenceNew;  
    }

    return false;
  }

  function newMessenger(){
    let cleanCipher = document.getElementById("enterTextEncode");
    cleanCipher.innerHTML = " ";

    let cleanDecipher = document.getElementById("enterTextDecode");
    cleanDecipher.innerHTML = " ";

    let cleanTexCipher = document.getElementById("textCipher");
    cleanTexCipher.innerHTML = " ";
    
    let cleanTextDecipher = document.getElementById("textDecipher");
    cleanTextDecipher.innerHTML = " ";

    return false; 
  }
    