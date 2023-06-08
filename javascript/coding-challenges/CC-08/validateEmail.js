// Write a function that takes email variable and return true or false and write console invalid or valid. (*OK*)
// Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. : Capital letters are allowed. (*OK*)
// An email should not start with '@' symbol and should not contain more than one '@' sign. (*OK*)
// There should be at least two characters after the '.' sign. (like .co or .com) (*OK*)
// There should be at least one '. after the '@' sign. (*OK*)

const validateEmail = function () {
  const email = prompt("Enter your email").toLowerCase();
  const validate = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
  const dotIndex = email.lastIndexOf(".");
  const atIndex = email.indexOf("@");
  let validated = [];
  for (let i = 0; i < email.length; i++) {
    const emailElement = email[i];
    if (validate.includes(emailElement)) {
      validated.push(emailElement);
    }
  }
  if (
    dotIndex === -1 || // There should be "." sign
    email.slice(dotIndex + 1).length < 2 || // There should be at least two letters after "." sign.
    atIndex === -1 || // There should be "@" symbol.
    email.slice(atIndex + 1).includes("@") || // Shouldn't more than one "@" symbol.
    !email.slice(atIndex + 1).includes(".") || // There should be "." sign after "@" symbol
    email[0] === "@" || // Shouldn't start with "@" symbol.
    validated.join("") !== email // The email should be within the validate characters.
  ) {
    return `Hi ${email}. Your email is NOT valid`;
  } else {
    return `Hi ${email}.Your email is valid`;
  }
};

console.log(validateEmail());
