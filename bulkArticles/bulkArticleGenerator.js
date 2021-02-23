const csv = require('csv-parser');
const fs = require('fs');
const { forEach } = require('methods');



fs.readFile('template.md', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const template = data;
    // console.log(template)
    updateTemplates(template)
  })

const templates = []

const updateTemplates = (template) => {
fs.createReadStream('variables.csv')
  .pipe(csv({separator:";"}))
  .on('data', (row) => {

    let release = template;

    for (let prop in row){
        release = release.replace(`{${prop}}`,row[prop])
    }
    console.log(release);

  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
};