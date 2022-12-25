function manage(txt) {
  var bt = document.getElementById('btSubmit');
  if (txt.value != '') {
    bt.disabled = false;
    modal__btn_form.classList.remove('disable');
    // modal__btn_form.style.backgroundColor = ' background-color: yellow;';
  } else {
    bt.disabled = true;
    modal__btn_form.classList.add('disable');
  }
}
