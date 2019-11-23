const formidable = require('formidable');
const sharp = require('sharp');

const getpath = (fileName) => {
  return __dirname + fileName;
}

const upload = (req) => {
  let form = new formidable.IncomingForm();
  let fileNames = new Set();
  form.parse(req);

  form.on('fileBegin', function (name, file){
    let type = '.' + file.type.slice(6, file.type.length);
    let filename = Date.now() + type;
    fileNames.add(filename);
    file.path = getpath('/uploads/' + filename);
  });

  // form.on('file', function (name, file){
  //   console.log('Uploaded ' + file.name);
  // });

  form.on('end', function() {
    fileNames.forEach( name => {
      sharp(getpath('/uploads/' + name))
      .resize(240, 240)
      .toFile(getpath('/resizes/' + name), (err, info) => {
      });
    })
  });
}

module.exports = upload;