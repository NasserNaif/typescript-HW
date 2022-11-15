interface IUser {
  username: string;
  password: string;
  email: string;
  phoneNumber: number;
  DOB: string;
}

const userA: IUser = {
  username: "Nasser",
  password: "227",
  email: "nasser@gmail.com",
  phoneNumber: 6,
  DOB: "10/12/2000 ",
};

console.log(userA);
