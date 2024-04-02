//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers } from "./services/users";

updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());
