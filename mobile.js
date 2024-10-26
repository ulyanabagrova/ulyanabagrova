let isVisible = false; // Переменная для отслеживания состояния видимости

document.getElementById('menu').addEventListener('click', function(event) {
    // Предотвращаем всплытие события клика
    event.stopPropagation();

    if (!isVisible) {
        // Если элементы не видимы, показываем их
        document.getElementById('project').style.opacity = '1';
        document.getElementById('contacts').style.opacity = '1';
        document.getElementById('about').style.opacity = '1';
        document.getElementById('services').style.opacity = '1';
        fadeOtherItems(0.5);
    }

    // Обновляем состояние
    isVisible = true; 
});

// Обработчик клика на документе для скрытия элементов
document.addEventListener('click', function() {
    if (isVisible) {
        // Скрываем элементы
        document.getElementById('project').style.opacity = '0';
        document.getElementById('contacts').style.opacity = '0';
        document.getElementById('about').style.opacity = '0';
        document.getElementById('services').style.opacity = '0';
        fadeOtherItems(1);
        isVisible = false; // Обновляем состояние
    }
});


// Обработчик клика на элементе 'project'
document.getElementById('project').addEventListener('click', function(event) {
    // Предотвращаем всплытие события клика
    event.stopPropagation();

    if (!isVisible) {
        // Если элементы не видимы, показываем их
        document.getElementById('finance').style.opacity = '1';
        document.getElementById('Legalsupport').style.opacity = '1';
        fadeOtherItems(0.5);
    }

    // Обновляем состояние
    isVisible = true; 
});

// Обработчик клика на документе для скрытия элементов
document.addEventListener('click', function() {
    if (isVisible) {
        // Скрываем элементы
        document.getElementById('finance').style.opacity = '0';
        document.getElementById('Legalsupport').style.opacity = '0';
        fadeOtherItems(1);
        isVisible = false; // Обновляем состояние
    }
});

// Функция для затемнения других элементов
function fadeOtherItems(opacity) {
    document.getElementById('about').style.opacity = opacity;
    document.getElementById('services').style.opacity = opacity;
    document.getElementById('project').style.opacity = opacity;
    document.getElementById('contacts').style.opacity = opacity;
}

