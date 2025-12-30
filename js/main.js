console.log("PLH Robotics listo 🚀");
const verMasBtn = document.getElementById("verMasBtn");
const proyectosOcultos = document.querySelectorAll(".proyecto.oculto");

verMasBtn.addEventListener("click", () => {
  proyectosOcultos.forEach(proyecto => {
    proyecto.style.display = "block";
  });

  verMasBtn.style.display = "none"; // ocultar botón después
});
