function test(msgEnter, msgReceived){
   
    if(msgEnter === msgReceived){
        console.log('Tudo certo!')
    }
        console.log(' Para o resultado ' + msgReceived + ' deu ruim! ' );
        
}

test(encode('Abc',1),'Bcd');
test(encode('ABC', 24), 'YZA');
test(encode('CDE', 37), 'NOP');
test(encode('defg', 250), 'tuvw');
test(encode('AbC', -1),'ZaB');

test(decode('Bcd',1),'Abc');
test(decode('YZA', 24),'ABC');
test(decode('NOP',37), 'CDE');
test(decode('tuvw',250), 'defg');
test(decode('ZaB', -1),'AbC');
