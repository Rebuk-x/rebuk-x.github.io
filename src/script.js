const hd1s = document.querySelectorAll("hd1");

hd1s.forEach((hd1) => {
  const heading = hd1.getAttribute("hd");
  const description = hd1.getAttribute("desc");
  const html = `
  <div class="hd1-container">
    <h1>${heading}</h1>
    ${description}
  </div>
  `;
  hd1.innerHTML = html;
});

const cards = document.querySelectorAll("card");

cards.forEach((card) => {
  const imageUrl = card.getAttribute("imgsrc");
  const heading = card.getAttribute("hd");
  const description = card.getAttribute("desc");
  const html = `
  <div class="card-container">
    <table>
      <tr>
        <td rowspan=2><img src="${imageUrl}"></td>
        <td><h2>${heading}</h2></td>
      </tr>
      <tr>
        <td>${description}</td>
      </tr>
    </table>
  </div>
  `;
  card.innerHTML = html;
});

const ytLink = document.querySelector("#ytLink");

ytLink.addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/channel/UCQiRGONXR0crJE-38B3u3ag",
    "_blank"
  );
});
