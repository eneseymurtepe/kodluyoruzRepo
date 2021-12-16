// Hata yönetimi için try | catch kullanımı
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp

let products;

try {
  products.forEach((item) => {
    console.log(item);
  });
} catch (error) {
  console.log("error: ", error);
}

console.log("Hata yönetimi düzgün çalışıyor");

let info = "kodluyoruz";
console.log(info);
