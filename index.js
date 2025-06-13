fetch("https://official-joke-api.appspot.com/random_joke").then(
  async (value) => {
    const data = await value.json();
    console.log(data);
    const para = document.createElement("p");
    para.className = "data";
    para.textContent = data.setup + data.punchline;
    const slogan = document.getElementById("slogan");
    slogan.appendChild(para);
  }
);
