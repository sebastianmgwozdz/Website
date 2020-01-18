import { get } from "./ApiHelper";

function userNameLengthRequirementMet(input) {
  return input.length >= 4;
}

function userNameFirstCharacterRequirementMet(input) {
  return input.match(/^[a-zA-Z]/);
}

function userNameCharacterTypeRequirementMet(input) {
  return input.match(/^[a-zA-Z0-9]*$/);
}

async function userNameUniqueRequirementMet(input) {
  let res;
  await get("users/" + input).then(result => {
    res = Object.keys(result.data).length === 0;
  });

  return res;
}

export const userNameRequirements = {
  "Minimum Length: 4 Characters": userNameLengthRequirementMet,
  "Must start with a letter": userNameFirstCharacterRequirementMet,
  "Must contain only letters/numbers": userNameCharacterTypeRequirementMet,
  "Must be unique": userNameUniqueRequirementMet
};

function emailFormatRequirementMet(input) {
  return input.match(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
}

export const emailRequirements = {
  "Incorrect Format": emailFormatRequirementMet
};

function passLengthRequirementMet(input) {
  return input.length >= 8;
}

function passNumberRequirementMet(input) {
  return input.match(/\S*\d+\S*\d+\S*/);
}

export const passRequirements = {
  "At least 8 characters required": passLengthRequirementMet,
  "At least 2 digits required": passNumberRequirementMet
};
