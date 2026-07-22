/* ==========================================================================
   Bakkerij Rogge - Interactive Application Script
   Supports Multilingual i18n (NL / EN), Modal Views & Navigation
   ========================================================================== */

const translations = {
    nl: {
        tagline: "Vers gebakken met liefde in Eine",
        nav_home: "Home",
        nav_about: "Over ons",
        nav_menu: "Ons Bakkerij & Menu",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        btn_call: "Bel ons",
        hero_title: "Traditioneel brood\nen ambachtelijke taarten\nin Eine (Oudenaarde)",
        hero_subtitle: "Vers gebakken, luchtige croissants, pizza en quiche elke dag voor de inwoners van Eine!",
        hero_btn_menu: "Bekijk ons menu",
        hero_btn_route: "Route plannen",
        info_address_title: "Adres",
        info_hours_title: "Openingstijden",
        info_hours_val: "Geopend vanaf 07:30\n(Vr - Zo)",
        info_phone_title: "Telefoon",
        info_price_title: "Gemiddelde prijs",
        info_price_val: "1 – 10 € per persoon",
        about_title: "Over Bakkerij Rogge",
        about_p1: "Welkom bij Bakkerij Rogge! Wij zijn een gezellige lokale bakkerij in Eine. Elke dag bakken wij vers brood, traditionele Belgische gebakjes en hartige lekkernijen.",
        about_p2: "Op zoek naar de perfecte taart voor een feest of zin in een heerlijke quiche? Bij ons bent u altijd welkom!",
        menu_title: "Populaire uit ons assortiment",
        cat1_title: "Taarten en Desserts",
        cat1_desc: "Onze populaire aardbeien- en fruittaarten met verse bessen en een luchtige romige vulling.",
        cat2_title: "Vers Brood",
        cat2_desc: "Ambachtelijk brood met een knapperige korst en een zachte binnenkant. Een klassieker in Eine.",
        cat3_title: "Gebak en Hartige Snacks",
        cat3_desc: "Heerlijke quiches en pizza's, perfect voor een lunch of onderweg.",
        btn_explore: "Bekijk aanbod",
        local_guide: "Local Guide",
        reviews_title: "Wat onze klanten zeggen",
        review_filip: "“Prachtige bakkerij en mensen met een warm hart die de behoeftigen helpen door 's avonds gratis het onverkochte brood uit te delen. Bedankt daarvoor.”",
        review_luc: "“Zeer vriendelijk personeel! Groot assortiment taarten, gebakjes, brood en beleg. Nu ook pizza en quiche te koop!”",
        review_irina: "“Heerlijk brood! Topkwaliteit en altijd vers gebakken.”",
        review_erik: "“Het personeel verdient een bloemetje, zo vriendelijk, lief en behulpzaam dit is een top zaak!”",
        review_peter: "“Lekker brood en vriendelijk personeel. Probeer zeker het Adrien Brouwer brood.”",
        review_robrecht: "“Super lekker brood met toevoeging van zuurdesem.”",
        google_rating_sub: "op Google Maps | 72 beoordelingen",
        footer_contact_heading: "Contact",
        footer_service_heading: "Onze service",
        service_takeaway: "Afhaal mogelijk",
        service_no_seats: "Geen zitplaatsen in de bakkerij",
        copyright_text: "© Bakkerij Rogge Eine. Alle rechten voorbehouden.",
        btn_close: "Sluiten"
    },
    en: {
        tagline: "Freshly baked with love in Eine",
        nav_home: "Home",
        nav_about: "About Us",
        nav_menu: "Bakery & Menu",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        btn_call: "Call Us",
        hero_title: "Traditional Bread\n& Artisan Cakes\nin Eine (Oudenaarde)",
        hero_subtitle: "Freshly baked bread, fluffy croissants, savory pizza, and quiche every day for Eine residents!",
        hero_btn_menu: "View Full Menu",
        hero_btn_route: "Get Directions",
        info_address_title: "Address",
        info_hours_title: "Opening Hours",
        info_hours_val: "Open from 07:30\n(Fri - Sun)",
        info_phone_title: "Phone",
        info_price_title: "Average Price",
        info_price_val: "€1 – €10 per person",
        about_title: "About Bakery Rogge",
        about_p1: "Welcome to Bakkerij Rogge! We are a cozy local bakery located in Eine. Every day we bake fresh bread, traditional Belgian pastries, and savory treats.",
        about_p2: "Looking for the perfect cake for a celebration or craving a hot savory quiche? You are always welcome!",
        menu_title: "Popular From Our Selection",
        cat1_title: "Cakes & Desserts",
        cat1_desc: "Our famous strawberry and raspberry cakes made with fresh berries and light creamy filling.",
        cat2_title: "Fresh Artisan Bread",
        cat2_desc: "Crusty sourdough artisan bread with soft airy interior. A true classic loved in Eine.",
        cat3_title: "Pastries & Savory Snacks",
        cat3_desc: "Delicious homemade quiches and thin-crust pizza, perfect for lunch on the go.",
        btn_explore: "View Selection",
        local_guide: "Local Guide",
        reviews_title: "What Our Customers Say",
        review_filip: "“Wonderful bakery and warm-hearted people who help those in need by giving away unsold bread for free in the evening. Thank you for that.”",
        review_luc: "“Very friendly staff! Great assortment of cakes, pastries, bread and toppings. Now also selling pizza and quiche!”",
        review_irina: "“Delicious bread! Top quality and always fresh.”",
        review_erik: "“The staff deserves flowers, so friendly, sweet and helpful. Top tier business!”",
        review_peter: "“Delicious bread and friendly staff. Make sure to try the Adrien Brouwer bread!”",
        review_robrecht: "“Super delicious sourdough bread.”",
        google_rating_sub: "on Google Maps | 72 reviews",
        footer_contact_heading: "Contact",
        footer_service_heading: "Our Services",
        service_takeaway: "Takeaway available",
        service_no_seats: "Takeaway only (no seating inside)",
        copyright_text: "© Bakkerij Rogge Eine. All rights reserved.",
        btn_close: "Close"
    }
};

// Detailed category items for Modal popup
const categoryMenuData = {
    taarten: {
        nl: {
            title: "Taarten & Desserts",
            sub: "Vers bereid met seizoensfruit en romige vulling",
            items: [
                { name: "Verse Aardbeientaart (Strawberry Cake)", desc: "Met verse Belgische aardbeien, banketbakkersroom en knapperige bodem", price: "€ 4.50 / slice (€ 24.00 heel)" },
                { name: "Lekkere Valeietaart (Streekproduct)", desc: "Traditionele lokale streektaart uit Eine / Oudenaarde", price: "€ 3.80 / slice" },
                { name: "Frambozentaart (Raspberry Cake)", desc: "Verse frambozen op lichte vanillecrème", price: "€ 4.80 / slice" },
                { name: "Klassieke Belgische Eclair", desc: "Gevuld met romige pudding en chocoladeglazuur", price: "€ 2.80" },
                { name: "Appeltaart met Amandel", desc: "Warme gekruide appeltjes in ambachtelijk deeg", price: "€ 3.50" }
            ]
        },
        en: {
            title: "Cakes & Desserts",
            sub: "Freshly prepared with seasonal berries and light cream",
            items: [
                { name: "Fresh Strawberry Cake", desc: "Fresh Belgian strawberries, custard cream, and crispy crust", price: "€ 4.50 / slice (€ 24.00 whole)" },
                { name: "Traditional Valeie Pie (Local Specialty)", desc: "Famous local recipe pie from Eine / Oudenaarde", price: "€ 3.80 / slice" },
                { name: "Fresh Raspberry Cake", desc: "Fresh raspberries on light vanilla cream", price: "€ 4.80 / slice" },
                { name: "Classic Belgian Eclair", desc: "Filled with rich custard and chocolate glaze", price: "€ 2.80" },
                { name: "Almond Apple Pie", desc: "Spiced apples wrapped in artisan pastry dough", price: "€ 3.50" }
            ]
        }
    },
    brood: {
        nl: {
            title: "Vers Brood & Pistolets",
            sub: "Ambachtelijk gebakken elke ochtend om 07:30",
            items: [
                { name: "Adrien Brouwer Brood (Specialiteit)", desc: "Exclusief ambachtelijk streekbrood van Bakkerij Rogge", price: "€ 3.40" },
                { name: "Ambachtelijk Zuurdeegbrood", desc: "100% natuurlijk zuurdeeg, langzaam gerezen met knapperige korst", price: "€ 3.20" },
                { name: "Traditioneel Boerenbrood (Wit / Bruin)", desc: "Klassiek Eine brood met een knapperige korst", price: "€ 2.60" },
                { name: "Knapperige Franse Pistolets & Baguettes", desc: "Dagelijks vers gebakken pistolets en baguette", price: "€ 0.90 - € 1.50" },
                { name: "Luchtige Boter croissants (Set van 2)", desc: "Echte roomboter croissants, goudbruin gebakken", price: "€ 2.40" }
            ]
        },
        en: {
            title: "Fresh Artisan Bread & Rolls",
            sub: "Baked fresh every morning from 07:30",
            items: [
                { name: "Adrien Brouwer Special Loaf", desc: "Exclusive local artisan specialty bread of Bakery Rogge", price: "€ 3.40" },
                { name: "Natural Sourdough Loaf", desc: "100% natural sourdough, slowly fermented with crispy crust", price: "€ 3.20" },
                { name: "Traditional Farmhouse Loaf (White / Brown)", desc: "Classic Eine bread with a crispy golden crust", price: "€ 2.60" },
                { name: "Crispy Crust Rolls (Pistolets) & Baguettes", desc: "Freshly baked rolls and French baguette", price: "€ 0.90 - € 1.50" },
                { name: "Fluffy Butter Croissants (2 pcs)", desc: "Baked with real Belgian butter until golden", price: "€ 2.40" }
            ]
        }
    },
    snacks: {
        nl: {
            title: "Gebak, Hartige Snacks & Beleg",
            sub: "Warme quiches, verse pizza en vers broodbeleg",
            items: [
                { name: "Huisgemaakte Quiche Lorraine / Spinazie", desc: "Met spekjes of verse spinazie & geitenkaas", price: "€ 4.20 / slice" },
                { name: "Ambachtelijke Pizza Punt (Margherita / Salami)", desc: "Krokante dunne bodem met verse tomatensaus", price: "€ 3.80" },
                { name: "Vers Broodbeleg & Fijne Vleeswaren", desc: "Groot assortiment dagvers beleg en Belgische kaas", price: "€ 2.50 - € 4.50" },
                { name: "Warm Worstenbroodje", desc: "Bladerdeeg gevuld met gekruid gehakt", price: "€ 2.50" },
                { name: "Kaas- & Hamcroissant", desc: "Gevuld met Belgische kaas en gebraden ham", price: "€ 2.90" }
            ]
        },
        en: {
            title: "Pastries, Savory Snacks & Toppings",
            sub: "Hot quiches, fresh pizza, and fresh sandwich toppings",
            items: [
                { name: "Homemade Quiche (Lorraine / Spinach)", desc: "With bacon or fresh spinach & goat cheese", price: "€ 4.20 / slice" },
                { name: "Artisan Pizza Slice (Margherita / Salami)", desc: "Crispy thin crust topped with fresh tomato sauce", price: "€ 3.80" },
                { name: "Fresh Sandwich Fillings & Cold Cuts", desc: "Wide selection of fresh cheeses and savory toppings", price: "€ 2.50 - € 4.50" },
                { name: "Belgian Sausage Roll", desc: "Flaky puff pastry stuffed with seasoned meat", price: "€ 2.50" },
                { name: "Ham & Cheese Croissant", desc: "Filled with rich Belgian cheese and oven-baked ham", price: "€ 2.90" }
            ]
        }
    }
};

let currentLang = 'nl';

document.addEventListener('DOMContentLoaded', () => {
    initLanguagePicker();
    initMobileMenu();
    initSmoothScrolling();
});

// Language Switcher Logic
function initLanguagePicker() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (translations[lang][key].includes('\n')) {
                el.innerText = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.documentElement.lang = lang;
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scroll & Active Nav State
function initSmoothScrolling() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Modal Menu Details
function openMenuModal(categoryKey) {
    const modal = document.getElementById('menuModal');
    const modalTitle = document.getElementById('modalCategoryTitle');
    const modalSubtitle = document.getElementById('modalCategorySubtitle');
    const modalList = document.getElementById('modalItemsList');

    const catData = categoryMenuData[categoryKey] ? categoryMenuData[categoryKey][currentLang] : null;
    if (!catData) return;

    modalTitle.textContent = catData.title;
    modalSubtitle.textContent = catData.sub;

    modalList.innerHTML = catData.items.map(item => `
        <div class="menu-item-row">
            <div class="item-left">
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
            </div>
            <div class="item-price">${item.price}</div>
        </div>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuModal() {
    const modal = document.getElementById('menuModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on click outside box
window.addEventListener('click', (e) => {
    const modal = document.getElementById('menuModal');
    if (e.target === modal) {
        closeMenuModal();
    }
});
