/* Json Placeholder API servisinin /comments uzantısında mevcut verilerden, 
her bir comment içerisindeki email’leri console’a yazdıracak kodu yazın.
*/

// https://jsonplaceholder.typicode.com/comments

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((responseJSON) => {
    responseJSON.forEach((element) => {
      console.log(element.id + " => " + element.email);
    });
  })
  .catch((err) => alert("Böyle bir alan bulunamadı !"));
