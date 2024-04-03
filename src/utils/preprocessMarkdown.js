export const preprocessMarkdown = (markdown) => {
	let processedMarkdown = markdown;

	const namesToHighlight = [
		"咲太",
		"梓川",
		"麻衣",
		"桜島",
		"カエデ",
		"国見",
		"佑真",
		"沙希",
		"上里",
		"南条",
		"文香",
		"理央",
		"牧之",
		"原翔子",
	];

	namesToHighlight.forEach((name) => {
		processedMarkdown = processedMarkdown.replace(
			new RegExp(name, "g"),
			`[${name}](character-name)`
		);
	});

	// namesToHighlight.forEach((name) => {
	//   const regex = new RegExp(name, "g");
	//   processedMarkdown = processedMarkdown?.replace(
	//     regex,
	//     `<span class="character-name">${name}</span>`
	//   );
	// });

	return processedMarkdown;
};
