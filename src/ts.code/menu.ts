export function menu() {
    const menu_desplegable = document.querySelector("#menu_desplegable");
    const menu_button = document.querySelector("#menu");

    if (menu_button && menu_desplegable) {
        menu_button.addEventListener("click", () => {
            menu_desplegable.classList.toggle("show");
        });
    }
}
