function trennen() {
  let sentence = document.getElementById("sentence").value;
  let word = document.getElementById("word").value;
  let davor = document.getElementById("davor");
  let danach = document.getElementById("danach");
  let vorRes = document.getElementById("vor").value;
  let hinterRes = document.getElementById("hinter").value;
  let index = sentence.indexOf(word);
  let firstPart = sentence.slice(0, index);
  let secondPart = sentence.slice(index + word.length);

  if (index == -1) {
    vor.innerHTML = 'Word not found. Try again!'
    hinter.innerHTML = sentence;
    return;
}

  if (davor.checked == true) {
    document.getElementById("vor").innerHTML = firstPart;
    document.getElementById("hinter").innerHTML = sentence.slice(index)
  } else if (danach.checked == true) {
    document.getElementById("vor").innerHTML = sentence.slice(0, index + word.length);
    document.getElementById("hinter").innerHTML = secondPart;
  }
}
