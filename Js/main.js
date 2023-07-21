var tableContent = document.getElementById("tableContent");
var allWebsites = [];

var wname = document.getElementById("webName");
var wlink = document.getElementById("webLink");

function delBtn(webIndex){
    return `<button onclick="deleButton(${webIndex})" class="btn btn-delete px-3"><i class="fa-solid fa-trash-can"></i> Delete</button>`;
}
function visitBtn(link) {
  return `<a href="https://${link}" target="_blank"><button onclick="visitButton()" class="btn btn-visit px-3"><i class="fa-solid fa-eye pe-2"></i> Visit</button></a>`;
}
function deleButton(webIndex){
    allWebsites.splice(webIndex, 1);
    localStorage.setItem("websitesArray", JSON.stringify(allWebsites));
    displayWeb();
}
function clearWeb() {
   wname.value = null;
   wlink.value = null;
}
function isValidURL(url) {
    const urlPattern = /^(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}$/;
    return urlPattern.test(url);
}
var storedWeb = localStorage.getItem("websitesArray");
allWebsites = JSON.parse(storedWeb) || [];
displayWeb();

function addWeb() {
    var web = {
      name: wname.value,
      link: wlink.value,
    };
    if (isValidURL(web.link)) {
      allWebsites.push(web);
      localStorage.setItem("websitesArray", JSON.stringify(allWebsites));
      displayWeb();
    } else {
      alert("Please enter a valid URL.");
    }
}

function displayWeb() {
   tableContent.innerHTML = '';
   for (var i = 0; i < allWebsites.length; i++) {
     var website = allWebsites[i];
     tableContent.innerHTML += `
       <tr>
           <td>${i + 1}</td>
           <td>${website.name}</td>
           <td>${visitBtn(website.link)}</td>
           <td>${delBtn(i)}</td>
       </tr>
    `;
    }
   clearWeb();
}
