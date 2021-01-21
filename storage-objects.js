// Local Storage
localStorage.setItem("name", "omnia");
console.log (localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear();
console.log(localStorage.getItem(localStorage.key(1)));
console.log(localStorage.length);


// Session Storage
sessionStorage.setItem("name", "omnia");
console.log (sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
sessionStorage.clear();
console.log (sessionStorage.getItem("name"));
console.log(sessionStorage.getItem(sessionStorage.key(1)));
console.log(sessionStorage.length);


//cookies
document.cookie="name=omnia"
console.log(document.cookie);

let expiryDate= new Date();
expiryDate.setMonth(2);
document.cookie="track=ui; expires=" + expiryDate.toUTCString();
console.log(document.cookie);


document.cookie="track=ui; expires=Fri, 31 Dec 9999 23:59:30 GMT; path=/"
expiryDate.setFullYear(1990);
document.cookie="track=; expires=" + expiryDate.toUTCString();
