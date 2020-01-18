import bcrypt from "bcryptjs";
import { postUser } from "./ApiHelper";

export async function getHashedValue(value) {
  let hashed = "";
  await bcrypt.hash(value, 10).then(hash => {
    hashed = hash;
  });
  return hashed;
}

export async function compareValues(plain, hashed) {
  let equal = false;
  await bcrypt.compare(plain, hashed, function(err, res) {
    equal = res;
  });
  return equal;
}

export async function hashAndPostUser(userName, email, password) {
  let promises = [getHashedValue(email), getHashedValue(password)];

  Promise.all(promises).then(values => {
    postUser(userName, values[0], values[1]);
  });
}
