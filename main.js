(function () {
    'use strict';
  
    const dropdownBtns = document.querySelectorAll(".dropdown-toggle");
    const ACTIVE_CLASS = 'menu-active';

    if (dropdownBtns && dropdownBtns.length > 0) {
        dropdownBtns.forEach((btn) => {
            btn.addEventListener("click", dropdownToggle);
        });
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        dropdownBtns.forEach((btn) => {
            const dropdownId = btn.dataset.path || '';
            const dropdownEl = document.getElementById(dropdownId);
            if (dropdownEl) {
                btn.classList.remove(ACTIVE_CLASS);
                dropdownEl.classList.remove(ACTIVE_CLASS);
            }
        });
    }

    function dropdownToggle(e) {
        const dropdownBtn = e.currentTarget;
        const dropdownId = dropdownBtn.dataset.path || '';
        const dropdownEl = document.getElementById(dropdownId);
        if (!dropdownEl) return null;
       
        if (dropdownBtn.classList.contains(ACTIVE_CLASS)) {
            dropdownBtn.classList.remove(ACTIVE_CLASS);
            dropdownEl.classList.remove(ACTIVE_CLASS);
        } else {
            closeAllDropdowns(); // Close any other open dropdowns
            dropdownBtn.classList.add(ACTIVE_CLASS);
            dropdownEl.classList.add(ACTIVE_CLASS);
        }
    }
})();