enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR'
}

type UserData = [string, Role, Date]

function createUserData(
  username: string,
  role: Role,
  createdDate: Date
) : UserData {
  return [username, role, createdDate]
}

function printUserData(user: UserData): void {
  const [username, role, createdDate] = user

  console.log('username..', username)
  console.log('role...', role)
  console.log('created date...', createdDate)
}

const user1 = createUserData(
  "swati123",
  Role.ADMIN,
  new Date()
);

const user2 = createUserData(
  "john456",
  Role.AUTHOR,
  new Date("2024-02-15")
);

printUserData(user1);
console.log("-------------------");
printUserData(user2);