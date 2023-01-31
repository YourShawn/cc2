

// cookie
console.log("----------");
console.log(document.location.href);
console.log("----------");
    createCookie("test", "value", 30);
console.log(new Date());

function createCookie(name, value, expireDate) {
  expireDate = new Date().getTime() + expireDate * 24 * 60 * 60 * 1000;
  let expireDataString = new Date(expireDate);
  console.log("-1--" + expireDataString);
  document.cookie = `${name}=${value};expires=${expireDataString}`;

  document.cookie = `expires=${expireDataString}`;

}
