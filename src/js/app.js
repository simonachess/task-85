import { data } from "autoprefixer";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const url = 'https://pokeapi.co/api/v2/pokemon'

  fetch(`${url}?limit=10`)
	  .then(res => res.json())
	  .then(data => {
		  const ul = document.querySelector("ul");
		  let fetchedData = data.results
		  fetchedData.map(item => {
			  const liDOM = document.createElement("li")
			  liDOM.innerText = item.name
			  console.log(liDOM)
			  console.log(item)
			  ul.appendChild(liDOM)
		  })  
	  }
  )
});
