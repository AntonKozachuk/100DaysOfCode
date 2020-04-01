let form = document.getElementById('form');

form.onsubmit = function (e) {
  e.preventDefault();

  let data = {};

  for (let i = 0, ii = form.length; i < ii; ++i) {
    let input = form[i];
    if (input.name) {
      data[input.name] = input.value;
    };
  };


  let xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(data));

  xhr.onloaded = function () {};

  console.log(data);

};

