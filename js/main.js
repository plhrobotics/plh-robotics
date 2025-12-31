console.log("PLH Robotics listo 🚀");
console.log("PLH Robotics listo 🚀");

const verMasBtn = document.getElementById("verMasBtn");
const proyectosOcultos = document.querySelectorAll(".proyecto.oculto");

let mostrando = false;

verMasBtn.addEventListener("click", () => {
  mostrando = !mostrando;

  proyectosOcultos.forEach(proyecto => {
    if (mostrando) {
      proyecto.classList.add("visible");
    } else {
      proyecto.classList.remove("visible");
    }
  });

  verMasBtn.textContent = mostrando
    ? "Ver menos proyectos"
    : "Ver más proyectos";

  /* Scroll suave al ocultar */
  if (!mostrando) {
    document
      .getElementById("proyectos")
      .scrollIntoView({ behavior: "smooth" });
  }
});

