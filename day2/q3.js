//  student > 75%
// if he has more than 75, allow to exam
// if he doesnt has ask for permission, if yes allow him, if not dont allow him

var a=76
var permission='T';
if(a>=75){
    console.log("allow  to exam ");
}
    else if( a<75 && (permission=='T')){
        console.log("allow  to exam becoz has permission ")
    }
    else{
        console.log("don't allow")
    }
