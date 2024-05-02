const Realtime = () => {
  const input = document.querySelector(".input");
  const content = document.querySelector(".preview__content");

  input.addEventListener("input", (event) => {
    const text = event.target.value;

    content.innerText = text;
  });
};

Realtime();
