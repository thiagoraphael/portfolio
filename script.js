localStorage.setItem('theme', 'dark'); 
localStorage.getItem('theme'); 


const theme = window.localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

function alterarTema() {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
}