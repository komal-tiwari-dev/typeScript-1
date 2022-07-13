let first_name: string = "MyName";
let age: number = 22;
let isFetching: boolean = false
let numArray : number []=[0,1,2,3,4,5,6,7,8,9]
let stringArray : string []=["a","b","c","d"]

console.log(first_name, age, isFetching, numArray, stringArray)

let tuple:[string,boolean]
tuple=["Person",true]
console.log(tuple)

enum admins{
    user="user",
    Superuser="Superuser",
    admin="admin",
    Superadmin="Superadmin"
}
let superAdmin=admins.Superadmin
console.log("SuperAdmin:-",superAdmin)

const product=(a:number,b:number)=>{
    return a*b
}
console.log(product(2,4))


const divide=(a:number,b:number)=>{
    return a/b
}
console.log(divide(8,8))

// const printName=({firstname,lastname}: person): void => {
//     console.log(`${first_name}`)
// }
const printName = ({ first_name, last_name }): void => {
  console.log(`${first_name}_${last_name}`);
};
const person1 = {
  first_name: "Masai",
  last_name: "School",
};
printName(person1)