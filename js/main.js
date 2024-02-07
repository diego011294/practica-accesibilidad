document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-lg .secciones-nav a");

    const updateActiveSection = () => {
        let currentSectionIndex = -1;
        const scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100; // Ajuste para el encabezado fijo
            const sectionHeight = section.clientHeight;

            // Verificar si el scrollY está dentro de los límites de la sección
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionIndex = index;
            }
        });

        // Eliminar la clase 'active' de todos los enlaces del navbar
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        if (currentSectionIndex !== -1) {
            // Agregar la clase 'active' al enlace correspondiente al índice de la sección actual
            navLinks[currentSectionIndex].classList.add("active");
        } else {
            // Si no se encuentra ninguna sección visible, agregar la clase 'active' al primer enlace
            navLinks[0].classList.add("active");
        }
    };

    // Llamar a la función updateActiveSection al cargar la página y al desplazarse
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("load", updateActiveSection);
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para generar un color aleatorio en formato hexadecimal
    function generateRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    // Función para cambiar el color del texto dinámicamente
    function changeTextColor() {
        const dynamicText = document.getElementById("dynamic-text");
        const randomColor = generateRandomColor();
        dynamicText.style.color = randomColor;
    }

    // Cambia el color del texto cada 2 segundos (2000 milisegundos)
    setInterval(changeTextColor, 500);
});

