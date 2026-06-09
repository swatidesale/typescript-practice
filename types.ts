type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate : Date;
}

type ElevatedEmployee = Admin & Employee

type User = Admin | Employee

function createElevatedEmployee(name: string, privileges: string[], startDate: Date): ElevatedEmployee {
  return {
    name,
    privileges,
    startDate
  }
}

const elvaltedEmployee = createElevatedEmployee('Swati',  ["create-server", "manage-users"], new Date)
console.log('elvaltedEmployee...', elvaltedEmployee)

function isAdmin(user: User): user is Admin {
  return 'privileges' in user
}

function printUserDetails(user: User): void {
  console.log('Name...', user.name)

  if(isAdmin(user)) {
    console.log('privileges...', user.privileges.join(', '))
  } else {
    console.log('Start Date...', user.startDate.toDateString())
  }
}

const adminUser: Admin = {
  name: 'Swati',
  privileges: ["create-server", "manage-users"],
}

const employeeUser: Employee = {
  name: "David",
  startDate: new Date("2024-01-01"),
}

printUserDetails(adminUser);
printUserDetails(employeeUser);


function merge<T, U>(objA: T, objB: U): T & U {
  return {
    ...objA,
    ...objB
  }
}

const mergedUser = merge(
  { name: 'Swati'},
  { age: 28 }
)

console.log('Merged User:', mergedUser)

const mergedEmployee = merge(
  { employeeId: 101 },
  { department: "Engineering" }
)

console.log("Merged Employee:", mergedEmployee);

// Example 3
const mergedProduct = merge(
  { productName: "Laptop" },
  { price: 70000, brand: "Dell" }
);

console.log("Merged Product:", mergedProduct);