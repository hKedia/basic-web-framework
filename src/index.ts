import { User } from "./models/User";

const user = new User({ name: "test", age: 20 });

console.log(user.get("name"));
