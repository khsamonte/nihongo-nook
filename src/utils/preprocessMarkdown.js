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

  const placesToHighlight = ["峰ヶ原"];

  namesToHighlight.forEach((name) => {
    processedMarkdown = processedMarkdown.replace(
      new RegExp(name, "g"),
      `[${name}](character-name)`
    );
  });

  placesToHighlight.forEach((name) => {
    processedMarkdown = processedMarkdown.replace(
      new RegExp(name, "g"),
      `[${name}](location-name)`
    );
  });

  return processedMarkdown;
};
