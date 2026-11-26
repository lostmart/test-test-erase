import { ERROR_MESSAGES } from "./assets/error-messages";

export function sayHello(name) {
  if (typeof name !== "string") {
    throw new Error(ERROR_MESSAGES.stringError);
  }
  // change this to an error !!!
  return `Hello ${name.toUpperCase()}`;
}

// console.log(sayHello({name: "susan"}));

// console.log("finished ...");
