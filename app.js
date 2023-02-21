//            XMLHttpRequest()
// // anon function auto ex
// (() => {
//   const xhr = new XMLHttpRequest(),
//     $xhr = document.getElementById("xhr"),
//     $fragment = document.createDocumentFragment();

//   console.log(xhr);
//   xhr.addEventListener("readystatechange", (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("èxito");
//       let data = ($xhr.innerHTML = xhr.responseText);//hice esta variable para renderizar en el html
//       let json = xhr.responseText;
//       // console.log(json);
//       json.forEach((element) => {//no entiendo porque me tira error de funcion
//         const $li = document.createElement("li");
//         $li.innerHTML = `${element.name}`;
//         $fragment.appendChild("$li");
//       });
//       $xhr.appendChild($fragment);
//       body.appendChild($xhr);
//     } else {
//       console.log("error");
//     }
//   });
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   xhr.send();
// })();

//FETCH

// (() => {
//   const $fetch = document.getElementById("fetch"),
//     $fragment = document.createDocumentFragment();

//   fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((res) => {
//       const getChar = (res) => {
//         res.results.forEach((el) => {
//           const article = document.createRange().createContextualFragment(`
//           <article>
//           <div>
//           <img src="${el.image}" alt="personaje"
//           </div>
//           <h2>${el.name}</h2>
//           <span>${el.status}
//           </article>
//           `);
//           $fetch.append(article);
//         });
//       };
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
      
//     });
// })();
