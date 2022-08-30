

// if condition
//0,null,false,NaN,undefined,'' empty string     -->F
//1,true,numbers,"false" ,[],{},(' ')space       -->T
//syntex
// if (condition) {
//      statement/task
// }

if (1){ console.log('I am one')}

if (true){ console.log('I am one')}

if ('hey'){ console.log('I am one')}

if ('0'){ console.log('I am one')}

if (4){ console.log('I am one')}

if (0){ console.log('I am one')}

if ([]){ console.log('I am zone')}

if (''){ console.log('I am tone')}

if ('zero'){ console.log('I am mone')}

if ('0.0'){ console.log('I am gone')}

if (0.0){ console.log('I am one')}

if ('null'){ console.log('I am two')}

if (null){ console.log('I am three')}



if (3<4){
    console.log('monkey1')
}


if ((0) && '[]'){
  console.log('hey') }

if (8&7){
  console.log('hey1')
}


if ([1,2]==[1,2])//string is an object,both objs are different
{
    console.log('hey')
}

if ((2 == '2')| ((2) == 2.0)){
    console.log('hey2')
}

if ((4^2)<<(6|7)){
        console.log('hey2')
}
var a=3,b=5
if (a&b | b|a) {
    console.log('hey3')
}


var a=5,b=7
if (a>=b & a<b){
    console.log('hey2')
}
//case sensitive

if ('Sahana' == 'Sahana'){
    console.log('hey1')
}
if ('Sahana' == 'sahana'){
    console.log('hey3')
}
//case sensitive with type also
if ('Sahana' === 'sahana'){
    console.log('hey4')
}
if ('Sahana' === 'Sahana'){
    console.log('hey5')
}