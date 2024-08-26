let intervalId;

document.querySelectorAll(".dropdown-toggle").forEach((e) => {
  e.addEventListener("click", (e) => {
    const menu = e.currentTarget.dataset.path;
    const dataTargetMenu = document.querySelector(`[data-target=${menu}]`);
    document.querySelectorAll(".dropdown-menu").forEach((e) => {
      if (!dataTargetMenu.classList.contains("open")
      ) {
        e.classList.remove("menu-active","open");
        dataTargetMenu.classList.add("menu-active");
        intervalId = setTimeout(() => {
            dataTargetMenu.classList.add("open");
        }, 0);
      }
      if (
        dataTargetMenu.classList.contains("open")
      ) {
        clearTimeout(intervalId);
        dataTargetMenu.classList.remove("menu-active");
        intervalId = setTimeout(() => {
            dataTargetMenu.classList.remove("open");
        }, 0);
      }

      window.onclick = (e) => {
        if (
          e.target == dataTargetMenu || e.target == document.querySelector(`[data-path=${menu}]`)
        ) {
          return;
        } else {
        dataTargetMenu.classList.remove("menu-active", "open");
        }
      };
    });
  });
});
