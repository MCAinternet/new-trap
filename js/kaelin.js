function test() {

var x=1;
var ione='#imageone';
var itwo='#imagetwo';
var ithree='#imagethree';
var ifour='#imagefour';
var i='a';
while (x<5)
{


setTimeout(function () {
 if (x=1){
 i= ione;
 }
 else if (x=2){
 i=itwo;
 }
 else if (x=3){
 i=ithree;
 }
 else if (x=4){
 i=ifour;
 }
 $(i).css("visibility","hidden");
 x=x+1;
 }
,1000 );



}
}