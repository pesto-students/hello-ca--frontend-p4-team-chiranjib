export const getUserDetails = () => {
  //   const token = localStorage.getItem("authToken");

  //   if (token) {
  //     return jwt.decode(token);
  //   }

  //   return null;

  return {
    name: "John Doe",
    role: "user", //  "ca"
  };
};

export const capitalize = (str) => {
  str = Array.isArray(str) ? str[0] : str;
  return str
    .split("_")
    .join(" ")
    .split("-")
    .join(" ")
    .split(" ")
    .map((word) => {
      let newWord = word.toLocaleLowerCase();
      return newWord.charAt(0).toUpperCase() + newWord.slice(1);
    })
    .join(" ");
};
