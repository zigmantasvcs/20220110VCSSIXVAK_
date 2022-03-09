function doTranslations(lang){
    // vertimo logika
    let translation = getTranslations(lang);
    console.log(translation);

    document.querySelector("[translation-menu-home]").innerText = translation.menu.home;
    document.querySelector("[translation-menu-services]").innerText = translation.menu.services;
    document.querySelector("[translation-menu-about]").innerText = translation.menu.about;
    document.querySelector("[translation-menu-contacts]").innerText = translation.menu.contacts;
}


function getTranslations(lang){
    // vertimo duomenys
    let translations = {
        en: {
            menu:{
                home: "Home",
                services: "Services",
                about: "About Us",
                contacts: "Contacts"
            }
        },
        lt:{
            menu:{
                home: "Pagrindinis",
                services: "Paslaugos",
                about: "Apie Mus",
                contacts: "Kontaktai"
            }
        }
    };

    return translations[lang];

}