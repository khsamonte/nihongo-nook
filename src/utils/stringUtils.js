// Converts "Strings Like This" to "strings-like-this"
export const toKebabCase = (str) => {
	return (
		str
			// Replace all spaces with dashes
			.replace(/\s+/g, "-")
			// Convert to lowercase
			.toLowerCase()
	);
};

// Converts "strings-like-this" to "Strings Like This"
export const toTitleCase = (str) => {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};
