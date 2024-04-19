const properNouns = {
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
			"双葉",
			"牧之原",
			"翔子",
			"朋絵",
		],
		places: ["峰ヶ原", "小田急江ノ島", "相鉄いずみ野", "横浜市営", "湘南台"],
	},
	"speak-japanese-naturally": {
		names: ["地蔵", "信玄", "アジサイ"],
		places: ["武田", "甲府"],
	},
	"akane-japanese-class": {
		names: ["あかね"],
		places: [
			"浜松町",
			"羽田",
			"東京",
			"山手線",
			"京浜東北線",
			"浅草",
			"増上寺",
			"芝公園",
			"日比谷",
			"箱根",
		],
	},
	"naoko-daily-japanese": {
		names: ["なおこ"],
		places: ["スペイン"],
	},
	learning: {
		names: ["110 / 180", "79 / 120", "31 / 60"],
		places: ["61.1%", "65.8%", "51.7%", "80.5"],
	},
};

export const preprocessMarkdown = (markdown, dataToProcess) => {
	let processedMarkdown = markdown;

	if (dataToProcess === "default") {
		return markdown;
	}

	const namesToHighlight = properNouns[dataToProcess]?.names;
	const placesToHighlight = properNouns[dataToProcess]?.places;

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