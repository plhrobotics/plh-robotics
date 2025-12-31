console.log("PLH Robotics listo 🚀");
console.log("PLH Robotics listo 🚀");

const verMasBtn = document.getElementById("verMasBtn");
const proyectosOcultos = document.querySelectorAll(".proyecto.oculto");

let mostrando = false;

const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("modalProyecto");
const cerrarModal = document.getElementById("cerrarModal");

abrirModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


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

