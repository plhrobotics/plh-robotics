console.log("PLH Robotics listo 🚀");
const verMasBtn = document.getElementById("verMasBtn");
const proyectosOcultos = document.querySelectorAll(".proyecto.oculto");

let mostrando = false;

verMasBtn.addEventListener("click", () => {
  mostrando = !mostrando;

  proyectosOcultos.forEach(proyecto => {
    proyecto.style.display = mostrando ? "block" : "none";
  });

  verMasBtn.textContent = mostrando
    ? "Ver menos proyectos"
    : "Ver más proyectos";    
});
