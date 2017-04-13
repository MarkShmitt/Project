fetch('https://github.com/MarkShmitt/Project/blob/master/articles.json', {mode:'cors'})  
  .then(function(response) { return response.json(); })
  .then(function(json) {
    json.forEach(function(e) {
     var scavenger = document.getElementsByClassName('scavenger')[0];
     var section = document.createElement('section');
     section.className = "alert";

    section.innerHTML = e.header_name + '<p>' +e.author+ '<p>' +e.contents+ '<p>' +e.created;
    scavenger.appendChild(section); })
    });