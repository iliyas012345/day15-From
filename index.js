function containers(tagname,attrname,attrvalue){
    var ele2=document.createElement(tagname);
    ele2.setAttribute(attrname,attrvalue);
    return ele2;
}

function Heading(tagname,content){
    var head=document.createElement(tagname);
    head.innerHTML= content;
    return head;
}
function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}
function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}
var container=containers("div","class","container");
var Headings=Heading("h2","FORM SUBMISSION");
var br=linebreak("br");
var Firstname=labels("label","for","name","First Name");
var input=inputs("input","type","text","name","First Name","id","name");
var br1=linebreak("br");
var Lastname=labels("label","for","name","Last Name");
var br2=linebreak("br");
var input1=inputs("input","type","text","name","Last Name","id","name");
var br3=linebreak("br");
var Address=labels("label","for","name","Address");
var br4=linebreak("br");
var input2=inputs("input","type","text","name","Address","id","name");
var br5=linebreak("br");
var pincode=labels("label","for","name","Pincode");
var br6=linebreak("br");
var input3=inputs("input","type","text","name","pincode","id","name");
var br7=linebreak("br");
var Gender=labels("label","for","name","Gender");
var br8=linebreak("br");
var Male=labels("label","for","radio","Male");
var input4=inputs("input","type","radio","name","Male","id","radio");
var Female=labels("label","for","radio","  Female");
var input5=inputs("input","type","radio","name","Female","id","radio");
var br9=linebreak("br");
var Food=labels("label","for","name","choice of food(must choose 2 items out of 5 options)");
var br10=linebreak("br");
var NorthIndian=labels("label","for","checkbox","North Indian");
var input6=inputs("input","type","checkbox","name","North Indian","id","checkbox");
var br11=linebreak("br");
var SouthIndian=labels("label","for","checkbox","South Indian");
var input7=inputs("input","type","checkbox","name","South Indian","id","checkbox");
var br12=linebreak("br");
var Chinese=labels("label","for","checkbox","Chinese");
var input8=inputs("input","type","checkbox","name","Chinese","id","checkbox");
var br13=linebreak("br");
var Japanese=labels("label","for","checkbox","Japanese");
var input9=inputs("input","type","checkbox","name","Japanese","id","checkbox");
var br14=linebreak("br");
var Seafood=labels("label","for","checkbox","Sea food");
var input10=inputs("input","type","checkbox","name","Sea food","id","checkbox");
var br15=linebreak("br");
var State=labels("label","for","name","State");
var br16=linebreak("br");
var input11=inputs("input","type","text","name","State","id","name");
var br17=linebreak("br");
var Country=labels("label","for","name","Country");
var br18=linebreak("br");
var input12=inputs("input","type","text","name","Country","id","name");

document.body.append(Headings,br,br,Firstname,br,input,br1,Lastname,br2,input1,br3,Address,br4,input2,br5,pincode,br6,input3,br7,Gender,br8,input4,Male,input5,Female,br9,Food,br10,input6,NorthIndian,br11,input7,SouthIndian,br12,input8,Chinese,br13,input9,Japanese,br14,input10,Seafood,br15,State,br16,input11,br17,Country,br18,input12);
