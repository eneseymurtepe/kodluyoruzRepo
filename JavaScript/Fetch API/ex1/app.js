// Fetch APİ ile çalışmak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("../data/settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJSON) => {
    console.log(responseJSON);
  });
