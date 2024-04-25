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
	"bartender-kami-no-glass": {
		names: [
			"溜",
			"佐々倉",
			"美和",
			"来島",
			"由香利",
			"神嶋",
			"樋口",
			"参加者",
			"泰三",
			"真木",
			"伊丹",
		],
		places: ["ホテル・カーディナル", "銀座", "イーデンホール"],
	},
	"mata-onaji-yume-wo-miteita": {
		names: ["小柳", "奈ノ花", "ひとみ"],
		places: ["test"],
	},
	"speak-japanese-naturally": {
		names: ["ふみ", "地蔵", "信玄", "アジサイ"],
		places: [
			"日本",
			"武田",
			"甲府",
			"新宿",
			"東急",
			"歌舞伎町",
			"東京",
			"石川県",
			"富士山",
			"明治神宮",
			"紀伊国屋",
			"渋谷区",
			"代々木公園",
		],
	},
	"akane-japanese-class": {
		names: ["あかね", "店員"],
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
			"品川",
			"小田原",
			"神奈川",
			"こだま",
			"東海道",
			"二の丸東堀",
			"四国",
			"熱海",
			"ヤマト運輸宅急便",
		],
	},
	"naoko-daily-japanese": {
		names: ["なおこ"],
		places: ["スペイン"],
	},
	"final-fantasy-viii": {
		names: ["カドワキ先生", "スコール", "キスティス"],
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
