
const form = (res) => {
  const formHTML = `
    <form action="fileupload" method="post" enctype="multipart/form-data" accept="image/*">
      <input type="file" name="filetoupload" multiple><br>
      <input type="submit">
    </form>
  `;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(formHTML);
  return res.end();
}

module.exports = form;