document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const title = document.getElementById("mod-title");
  const prereq = document.getElementById("mod-prereq");
  const close = document.querySelector(".close");

  document.querySelectorAll(".asig").forEach(el => {
    el.addEventListener("click", () => {
      const nom = el.textContent;
      const pr = el.dataset.pr;
      title.textContent = nom;
      prereq.textContent = pr ? `Requisito: ${pr}` : "Sin prerequisitos";
      modal.hidden = false;
    });
  });

  close.addEventListener("click", () => modal.hidden = true);
  window.addEventListener("click", e => { if (e.target === modal) modal.hidden = true; });
});
