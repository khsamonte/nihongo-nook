export const preprocessMarkdown = (markdown) => {
  let processedMarkdown = markdown;

  const namesToHighlight = ["咲太", "麻衣"];

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
