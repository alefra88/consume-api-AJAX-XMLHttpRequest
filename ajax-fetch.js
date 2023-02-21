
(() => {
  const $fetch = document.getElementById("fetch");

  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      const $characters = res.results;
      renderCharacters($characters);
    })
    .catch((err) => {
      console.log(err);
    });

  const renderCharacters = (characters) => {
    const $fragment = document.createDocumentFragment();
    characters.forEach((el) => {
      const article = document.createRange().createContextualFragment(`
        <article>
          <div>
            <img src="${el.image}" alt="personaje">
          </div>
          <h2>${el.name}</h2>
          <span>${el.status}</span>
        </article>
      `);
      $fragment.append(article);
    });
    $fetch.append($fragment);
  };
})();

