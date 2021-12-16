function valid() {
  try {
    if (document.querySelector("#dogumTarihi").value == "") {
      throw "Doğum tarihini boş geçemezsiniz";
    }
  } catch (err) {
    alert(err);
  }
}
