// falsy
// 0
// "" faka   string  false //( " " )space string is true
// undefine 
// null 
// Nan 
// false

// truthy

// "0"
// " "
// []
//  {}
// 'false'

const name = 0;

if(name || name == 0 ){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}