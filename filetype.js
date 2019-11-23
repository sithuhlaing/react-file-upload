const filetype = (type) => {
  switch(type){
    case 'image/jpeg': return 'jpg';
    case 'image/bmp': return 'bmp';
  }
  return '';
};

module.exports = filetype;