function removeProperty(obj, key){
delete obj[key];
return obj;
}
obj={name:"Ajith",age:22}
console.log(removeProperty(obj,"name"));
