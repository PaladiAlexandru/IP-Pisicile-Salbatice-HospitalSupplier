const users = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    username: "Alex",
    email: "alex@yahoo.com",
    password: "parola",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    username: "Georgiana",
    password: "parola2",
    email: "georgiana@yahoo.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    username: "",
    password: "",
    email: "georgiana@yahoo.com",
  },
];

export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  console.log(username);
  if (user) return "token";
  return null;
}

export function login(username, password) {}
