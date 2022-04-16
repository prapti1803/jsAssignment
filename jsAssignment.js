//ASSIGNMENT 1 
const objOne={
    a:1,
    b:3,
    c:{
        d:"Hey!!"
    }
}
const objTwo={
    a:1,
    b:3,
    c:{
        d:"Hey!!"
    }
}

function compare(objOne,objTwo){
    for(const key in objOne){
        if(typeof objOne[key]=='object')
        {   
            var result=compare(objOne[key],objTwo[key]);
            return result;
        }
        else{
            if(objOne[key]!=objTwo[key]) 
            {
            return false;}
    }
        

    }
    return true

}
console.log(compare(objOne,objTwo))
//ASSIGNMENT 2
const obj={a:1,b:2}
function stringifyDemo(obj){
    var str="";
    for(key in obj){
      if (typeof obj[key]=="object") 
        {var str1=stringifyDemo(obj[key]);
         str=str+str1;}   

         else{
            str=str+JSON.stringify(obj[key]);
         }
        

    }
    return str

}
console.log(stringifyDemo(objOne))
console.log(stringifyDemo(obj))