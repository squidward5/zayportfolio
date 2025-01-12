let titleText = "zay's portfolio";
let currentText = '';
let index = 0;

function typeTitle() {
  if (index < titleText.length) {
    currentText += titleText.charAt(index);
    document.title = currentText;
    index++;
    setTimeout(typeTitle, 150);
  } else {
    setTimeout(deleteTitle, 1000);
  }
}

function deleteTitle() {
  if (index > 0) {
    currentText = currentText.slice(0, -1);
    document.title = currentText;
    index--;
    setTimeout(deleteTitle, 100);
  } else {
    setTimeout(typeTitle, 1000);
  }
}

typeTitle();
