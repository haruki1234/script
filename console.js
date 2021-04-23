if (document.getElementById("console") != null) {
    (function(){
      const log = console.log;
      const error = console.error;
        console.log = function(...args){
          log(...args)
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          error(...args)
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild("エラー" + li);
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
