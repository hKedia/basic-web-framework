import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Harsh", age: 123 });

const root = document.getElementById("root");

if (root) {
  new UserEdit(root, user).render();
} else {
  throw new Error("Root element not found");
}
