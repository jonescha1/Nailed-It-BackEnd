const React = require("react");

function Def() {
  return (
    <html>
      <head>
        <title>MongoDB upload</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div></div>
            <h1 className="text-center display-4 my-4">Mongo file upload</h1>
            <form action="upload" method="POST" encType="multipart/form-data">
              <div className="custom-file mb-3">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="custom-file-input"
                ></input>
                <label htmlFor="file" className="custom-file-label"></label>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
}

module.exports = Def;
