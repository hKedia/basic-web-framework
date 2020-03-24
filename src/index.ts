import { User } from "./models/User";

const user = new User({ name: "test", age: 20 });

user.on("change", () => {
  console.log("onChange");
});
user.on("change", () => {
  console.log("onChange#2");
});
user.on("save", () => {
  console.log("onSave");
});

user.trigger("change");
