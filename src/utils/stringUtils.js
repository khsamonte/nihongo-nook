// Converts "Strings Like This" to "strings-like-this"
export const toKebabCase = (str) => {
  return str
    .match(/[A-Z][a-z]+|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

// Converts "strings-like-this" to "Strings Like This"
export const toTitleCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
