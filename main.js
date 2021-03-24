const fs = require('fs');
const marked = require('marked');
const fileNames = require('./fileNames');

fileNames.forEach(fileName => {
  const inputPath = `${fileName}.md`;
  const outputPath = `${fileName}.html`;

  fs.readFile(inputPath, { encoding: 'utf8' }, (err, file) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
      return;
    }
    const html = marked(file);
    const data = `<html lang="ja">
<head>
<meta charset="utf-8" />
<title>${fileName}</title>
</head>
<body>
${html}
</body>
</html>`;
    fs.writeFile(outputPath, data, err => {
      if (err) {
        console.error(err.message);
        process.exit(1);
        return;
      }
    });
  });
});
