const updateContent = (id, value) => {
    const element = document.getElementById(id);
    if (element && value) {
        element.innerHTML = value;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith("ru") ? "ru" : userLang.startsWith("uk") ? "ua" : "en";
    const localizationFile = `${lang}.json`;

    fetch(localizationFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки файла локализации");
            }
            return response.json();
        })
        .then(data => {
            updateContent("header_left", data.header_left);
            updateContent("content_left", data.content_left);
            updateContent("header_center", data.header_center);
            updateContent("content_center", data.content_center);
            updateContent("header_right", data.header_right);
            updateContent("content_right", data.content_right);
            updateContent("more_videos", data.more_videos);
            updateContent("help", data.help);
            updateContent("register", data.register);
        })
        .catch(error => {
            console.error("Ошибка локализации:", error);
        });
});
