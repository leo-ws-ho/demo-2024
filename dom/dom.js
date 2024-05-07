window.onload = () => {
  let heading = document.createElement("h1");
  let text = document.createTextNode(
    "Friday, Friday, Gotta get down on Friday. ♫"
  );
  heading.appendChild(text);
  document.body.appendChild(heading);
  document.body.style.backgroundColor = 'red';

};
