// Valid a SSN (Social Security Number);
// should have 9 digits. 522-82-5151 (*OK*)
// should be divided into 3 parts by hyphen (-). (*OK*)
// The first part should have 3 digits and should not be 000, 666, or between 900 and 999. (*OK*)
// The second part should have 2 digits and it should be from 01 to 99. (*OK*)
// The third part should have 4 digits and it should be from 0001 to 9999. (*OK*)

const validSSN = function () {
  const SSN = prompt(
    "Enter SSN (Must be 11 characters, 9 numbers and 2 hypens): "
  );
  const ssnNum = SSN.replaceAll("-", "");
  const firstPart = SSN.slice(0, 3);
  const secondPart = SSN.slice(4, 6);
  const thirdPart = SSN.slice(7);

  if (
    isNaN(ssnNum) || // 9 numbers should be included.
    SSN.length !== 11 || // Total characters should be 11.
    SSN[3] !== "-" || // "-" should be included and in the right position.
    SSN[6] !== "-" ||
    firstPart == 000 || // The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
    firstPart == 666 ||
    (firstPart >= 900 && firstPart <= 999) ||
    !(secondPart > 0 && secondPart <= 99) || // The second part should have 2 digits and it should be from 01 to 99.
    !(thirdPart > 0 && thirdPart <= 9999) // The third part should have 4 digits and it should be from 0001 to 9999.
  ) {
    return `You typed ${SSN}, and it's NOT in valid format.`;
  } else {
    return `You typed ${SSN}, and it's in valid format.`;
  }
};

console.log(validSSN());
