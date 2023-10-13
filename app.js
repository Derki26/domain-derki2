// /* eslint-disable no-console */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let domains = [];

window.onload = function() {
  function genDomain(pronoun, adj, noun, ending) {
    return "www." + pronoun + adj + noun + ending;
  }

  let pronouns = ["the", "our", "yours", "his", "her"];
  let adjs = ["great", "intelligent", "happy", "sad", "fantastic", "terrific"];
  let nouns = ["captain", "astronaut", "clown", "cheff", "farmer"];
  let endings = [".es", ".com", ".gov", ".org", ".net"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ending of endings) {
          domains.push(genDomain(pronoun, adj, noun, ending));
        }
      }
    }
  }

  let domainList1 = document.getElementById("ul");
  console.log(domainList1)
  domains.forEach((domain) => {
    let domainItem = document.createElement("li");
    domainItem.innerText = domain;
    domainList1.appendChild(domainItem);
  });
  console.log(domains);
};