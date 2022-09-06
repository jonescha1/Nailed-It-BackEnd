const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND!</h1>
        <div className="errorDiv">
          <p>INSERT TIM ALLEN JOKE</p>
        </div>
        <div>
          <img src="" alt="" />
          <div>
        
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
