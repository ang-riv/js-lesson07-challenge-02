var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

for (const language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

programmingLanguages.forEach((language, index) => {
  var uppercaseLanguage = language.toUpperCase()
  console.log(`${index + 1}: ${uppercaseLanguage}`);
});

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
})

console.log(updatedLanguages);