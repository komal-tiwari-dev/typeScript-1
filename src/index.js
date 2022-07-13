var first_name = "MyName";
var age = 22;
var isFetching = false;
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var stringArray = ["a", "b", "c", "d"];
console.log(first_name, age, isFetching, numArray, stringArray);
var tuple;
tuple = ["Person", true];
console.log(tuple);
var admins;
(function (admins) {
    admins["user"] = "user";
    admins["Superuser"] = "Superuser";
    admins["admin"] = "admin";
    admins["Superadmin"] = "Superadmin";
})(admins || (admins = {}));
var superAdmin = admins.Superadmin;
console.log("SuperAdmin:-", superAdmin);
var product = function (a, b) {
    return a * b;
};
console.log(product(2, 4));
var divide = function (a, b) {
    return a / b;
};
console.log(divide(8, 8));
// const printName=({firstname,lastname}: person): void => {
//     console.log(`${first_name}`)
// }
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "Masai",
    last_name: "School"
};
printName(person1);
