const dictionary = {
	"bunny-girl-senpai": {
		names: [
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
			"牧之原",
			"翔子",
			"朋絵",
		],
		places: ["峰ヶ原"],
	},
};

export const preprocessMarkdown = (markdown, dataToProcess) => {
	let processedMarkdown = markdown;

	if (dataToProcess === "default") {
		return markdown;
	}

	const namesToHighlight = dictionary[dataToProcess]?.names;
	const placesToHighlight = dictionary[dataToProcess]?.places;

	namesToHighlight?.forEach((name) => {
		processedMarkdown = processedMarkdown.replace(
			new RegExp(name, "g"),
			`[${name}](character-name)`
		);
	});

	placesToHighlight?.forEach((name) => {
		processedMarkdown = processedMarkdown.replace(
			new RegExp(name, "g"),
			`[${name}](location-name)`
		);
	});

	return processedMarkdown;
};
