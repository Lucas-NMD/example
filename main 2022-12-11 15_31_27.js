const gar = document.getElementById('Garrit')
const interactions = document.getElementById('interactions')
const structure = document.getElementById('structure')
const styling = document.getElementById('styling')
const book = document.getElementById("book")
const htm = document.getElementById('html')
const cs = document.getElementById('css')
const js = document.getElementById('js')

console.log(localStorage.getItem('state'));
if (localStorage.state === "8") {
  js.className = "";
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "5") {
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "2") {
  htm.className = "";
}
  gar.addEventListener ("click", (event) => {
  if (localStorage.state === "9") {
    alert("You have passed the exam... BARELY! Now get out of my sight!");
    localStorage.clear ();
  } else if (localStorage.state === "6") {
    alert("That page has less INTERACTIONS than my stylebook extension! Fix it!")
    localStorage.state = "7" 
  } else if (localStorage.state === "3") {
    alert("That page is almost as ugly as your face! Do some STYLING to it!")
    localStorage.state = "4"
  } else if (localStorage.state === undefined) {
    alert("You are not prepared! Learn about STRUCTURE first and make your own page!")
    localStorage.state = "1";
  }
});

