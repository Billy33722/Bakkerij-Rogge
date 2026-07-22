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
        info_hours_val: "Vr - Zo: 07:30 – 18:00\n(Ma - Do: Gesloten)",
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
        info_hours_val: "Fri - Sun: 07:30 – 18:00\n(Mon - Thu: Closed)",
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
    brood: {
        nl: {
            title: "Desembroden & Specialiteiten",
            sub: "Authentieke desembroodsoorten met natuurlijk karakter",
            items: [
                { name: "Assortiment Focaccia (Provenciaals / Tomaat-Olijf / Spek-Ajuin)", desc: "Met extra vierge olijfolie, kruiden en hartige toppings", price: "€ 3.50" },
                { name: "Twist Tapenade Basilicum & Broodje Chorizo", desc: "Aperitiefbrood met rode wijn Navarra en chorizo", price: "€ 3.80" },
                { name: "Kurkuma Desembrood", desc: "Met hazelnoten uit Piemonte", price: "€ 3.60" },
                { name: "Sepia Inktvisbrood", desc: "Met gedroogde veenbessen", price: "€ 3.80" },
                { name: "Notenstangen", desc: "Met krokante hazelnoten en rozijntjes", price: "€ 3.20" },
                { name: "Kroon Desembrood", desc: "Ambachtelijk zuurdeegbrood met heerlijk krokante korst", price: "€ 3.10" },
                { name: "Deens Zemelenbroodje (60% Zaad)", desc: "Gebakken in traditioneel houten bakje", price: "€ 3.50" },
                { name: "Rogge Verdomme", desc: "Grijs desembroodje rijk gevuld met krenten", price: "€ 3.40" },
                { name: "Alpenbrood", desc: "Desembrood met geroosterde zadenmengeling", price: "€ 3.30" },
                { name: "Franse Brioche in Bakje", desc: "Zacht zoet brood met vijgen, walnoten, abrikozen en rozijnen", price: "€ 3.90" }
            ]
        },
        en: {
            title: "Sourdough Breads & Specialties",
            sub: "Authentic sourdough varieties with natural character",
            items: [
                { name: "Focaccia Assortment (Herbs / Tomato-Olive / Bacon-Onion)", desc: "Baked with extra virgin olive oil and savory toppings", price: "€ 3.50" },
                { name: "Basil Tapenade Twist & Chorizo Roll", desc: "Aperitif bread with Navarra red wine and chorizo", price: "€ 3.80" },
                { name: "Turmeric Sourdough", desc: "Enriched with roasted Piemonte hazelnuts", price: "€ 3.60" },
                { name: "Sepia Squid Ink Loaf", desc: "With dried cranberries", price: "€ 3.80" },
                { name: "Hazelnut & Raisin Sticks (Notenstangen)", desc: "Packed with crunchy hazelnuts and sweet raisins", price: "€ 3.20" },
                { name: "Kroon Artisan Sourdough", desc: "Traditional sourdough with a golden crispy crust", price: "€ 3.10" },
                { name: "Danish Bran Loaf (60% Seeds)", desc: "Baked in a traditional wooden baking box", price: "€ 3.50" },
                { name: "Rogge Verdomme", desc: "Traditional grey sourdough filled with sweet raisins", price: "€ 3.40" },
                { name: "Alpine Seed Bread", desc: "Sourdough loaf topped with roasted seed mix", price: "€ 3.30" },
                { name: "French Brioche Box", desc: "Sweet soft brioche with figs, walnuts, apricots and raisins", price: "€ 3.90" }
            ]
        }
    },
    feestgebak: {
        nl: {
            title: "Feestgebak & Klassiekers",
            sub: "Exclusieve ambachtelijke taarten voor elk feest",
            items: [
                { name: "Samba (De Klassieker)", desc: "Lichte mousse van melk- en fondant chocolade", price: "€ 4.50 / slice (€ 24.00 heel)" },
                { name: "Valérie (Onze Klassieker)", desc: "Lekkere lokale streektaart uit Eine", price: "€ 3.80 / slice" },
                { name: "Zwarte Woud (Black Forest)", desc: "Chocoladecrème, vanille slagroom, chocoladebiscuit & kersen", price: "€ 4.20 / slice" },
                { name: "Passie", desc: "Krokantje met amandelbiscuit, mousse van mango-passie & piëmontecrème", price: "€ 4.60 / slice" },
                { name: "Caramelle (Nieuw)", desc: "Caramel crémeux, mousse van Jivara chocolade op krokante bodem", price: "€ 4.80 / slice" },
                { name: "Doménica (Nieuw)", desc: "Dominicaanse chocolade, vanille van Madagascar & bosvruchten", price: "€ 4.90 / slice" },
                { name: "Slagroom & Fruit", desc: "Luchtige biscuit met ananas en verse frambozen", price: "€ 4.20 / slice" }
            ]
        },
        en: {
            title: "Celebration Cakes & Classics",
            sub: "Exclusive handcrafted specialty cakes for special occasions",
            items: [
                { name: "Samba (The Classic)", desc: "Light milk and dark chocolate mousse cake", price: "€ 4.50 / slice (€ 24.00 whole)" },
                { name: "Valérie (Bakery Classic)", desc: "Famous traditional specialty cake from Eine", price: "€ 3.80 / slice" },
                { name: "Black Forest (Zwarte Woud)", desc: "Chocolate cream, vanilla whipped cream, chocolate sponge & cherries", price: "€ 4.20 / slice" },
                { name: "Passie (Mango & Passion Fruit)", desc: "Crispy almond biscuit with mango-passion mousse & Piemonte cream", price: "€ 4.60 / slice" },
                { name: "Caramelle (New)", desc: "Caramel crémeux, Jivara chocolate mousse on hazelnut crunchy base", price: "€ 4.80 / slice" },
                { name: "Doménica (New)", desc: "Dominican dark chocolate, Madagascar vanilla & forest berries", price: "€ 4.90 / slice" },
                { name: "Whipped Cream & Fruit", desc: "Light sponge cake with pineapple and fresh raspberries", price: "€ 4.20 / slice" }
            ]
        }
    },
    versnaperingen: {
        nl: {
            title: "Versnaperingen & Petit-Fours",
            sub: "Koffiegebak, mini-gebakjes en luxe lekkernijen",
            items: [
                { name: "Petit-Fours (Boterroom / Marsepein)", desc: "Ambachtelijke mini-gebakjes in verscheidene variaties en kleuren", price: "€ 1.80 / pc" },
                { name: "Mini-Gebak (Misérable / Javanais / Mousse)", desc: "Framboos-passie mousse, chocopotje, caramelle", price: "€ 2.20 / pc" },
                { name: "Drooggebak (Eclairs / Boule de Berlin)", desc: "Gevuld met romige pudding, confituur en chocolade", price: "€ 2.60" },
                { name: "Citroentarteletje", desc: "Zure citroencrème op brosse deegbodem", price: "€ 3.20" },
                { name: "Zoetigheden voor bij de Koffie", desc: "Pâte de fruits, macarons, truffels, Canelé de Bordeaux, Tartine Russe", price: "€ 6.50 / doosje" }
            ]
        },
        en: {
            title: "Sweet Treats & Petit-Fours",
            sub: "Coffee pastries, mini desserts and luxury sweets",
            items: [
                { name: "Petit-Fours (Buttercream / Marzipan)", desc: "Handcrafted mini cakes in colorful assortments", price: "€ 1.80 / pc" },
                { name: "Mini Pastries (Misérable / Javanais / Mousse)", desc: "Raspberry-passion mousse, chocolate pot, caramel", price: "€ 2.20 / pc" },
                { name: "Classic Pastries (Eclairs / Berlin Balls)", desc: "Filled with rich custard cream, jam and chocolate", price: "€ 2.60" },
                { name: "Lemon Tartlet (Citroentarteletje)", desc: "Tangy lemon curd in shortcrust pastry", price: "€ 3.20" },
                { name: "Coffee Sweet Selection", desc: "Pâte de fruits, macarons, truffles, Canelé de Bordeaux, Tartine Russe", price: "€ 6.50 / box" }
            ]
        }
    },
    hartig: {
        nl: {
            title: "Hartig, Quiches & Pizza Pavé",
            sub: "Warme hapjes, verse pizza's, quiches en soepen",
            items: [
                { name: "Huisbereide Quiche (Lorraine / Zalm-Broccoli / Geitenkaas-Appel)", desc: "Met spekjes, gerookte zalm, geitenkaas of kip met fijne groentjes", price: "€ 4.50 / slice" },
                { name: "Pizza Pavé (Classique / Chorizo / Grieks)", desc: "Krokante bodem met tapenade, mozzarella, chorizo of fêtablokjes", price: "€ 4.20" },
                { name: "Warme Bladerdeeghapjes (Apero Assortiment)", desc: "4 kazen rondel, videetje garnaal, hartje zalm, kaas-hesp", price: "€ 6.80 / set" },
                { name: "Huisbereide Mousses & Tapenades", desc: "Ham-mousse, zalm-mousse & gedroogde tomatentapenade voor focaccia", price: "€ 3.50" },
                { name: "Ambachtelijke Soepen (Tomatensoep / Waterkers / Bospaddenstoelen)", desc: "Verse warme soep met balletjes of witloof", price: "€ 3.80 / L" }
            ]
        },
        en: {
            title: "Savory, Quiches & Pizza Pavé",
            sub: "Hot appetizers, fresh pizzas, quiches and soups",
            items: [
                { name: "Homemade Quiche (Lorraine / Salmon-Broccoli / Goat Cheese)", desc: "With bacon, smoked salmon, goat cheese & apple or chicken", price: "€ 4.50 / slice" },
                { name: "Pizza Pavé (Classic / Chorizo / Greek)", desc: "Crispy crust topped with tapenade, mozzarella, chorizo or feta", price: "€ 4.20" },
                { name: "Warm Puff Pastry Bites (Apero Set)", desc: "4 cheese round, shrimp bites, salmon hearts, ham-cheese blossom", price: "€ 6.80 / set" },
                { name: "Homemade Mousses & Tomato Tapenade", desc: "Ham mousse, smoked salmon mousse & dried tomato tapenade for focaccia", price: "€ 3.50" },
                { name: "Artisan Soups (Tomato meatballs / Watercress / Mushroom)", desc: "Fresh hot soup made daily", price: "€ 3.80 / L" }
            ]
        }
    },
    ijs: {
        nl: {
            title: "Ambachtelijk IJs & Sorbet",
            sub: "Huisbereide ijs-taarten, sorbets en bekers",
            items: [
                { name: "Amarena Pistache IJstaart (Nieuw)", desc: "Pistacheroomijs, kensorbet, Amarenakersen & amandelbiscuit (4-8 pers)", price: "€ 18.00 - € 28.00" },
                { name: "Iglo / Egel IJstaart", desc: "Vanilleroomijs, stracciatella, sorbet framboos & exotique (4-10 pers)", price: "€ 16.00 - € 26.00" },
                { name: "Hazelnoot Caramel & Vacherin", desc: "Hazelnootijs, geroosterde Piemonte hazelnoten & meringue", price: "€ 18.00" },
                { name: "Ambachtelijk Sorbet (1/2 L)", desc: "Vers fruit sorbet: Exotique, framboos, kersen", price: "€ 6.50" },
                { name: "Ambachtelijk Roomijs (1/2 L - 1 L)", desc: "Aardbei, stracciatella, mokka, pistache, chocolade, vanille", price: "€ 6.50 - € 11.00" }
            ]
        },
        en: {
            title: "Artisan Ice Cream & Sorbet",
            sub: "Homemade ice cream cakes, sorbets and cups",
            items: [
                { name: "Amarena Pistachio Ice Cream Cake (New)", desc: "Pistachio ice cream, cherry sorbet, Amarena cherries & biscuit (4-8 p)", price: "€ 18.00 - € 28.00" },
                { name: "Iglo / Hedgehog Ice Cream Cake", desc: "Vanilla ice cream, stracciatella, raspberry & exotic sorbet (4-10 p)", price: "€ 16.00 - € 26.00" },
                { name: "Hazelnut Caramel & Vacherin", desc: "Hazelnut ice cream, roasted Piemonte hazelnuts & meringue", price: "€ 18.00" },
                { name: "Handcrafted Fruit Sorbet (1/2 L)", desc: "Fresh fruit sorbet: Exotic, raspberry, cherry", price: "€ 6.50" },
                { name: "Handcrafted Ice Cream (1/2 L - 1 L)", desc: "Strawberry, stracciatella, mocha, pistachio, chocolate, vanilla", price: "€ 6.50 - € 11.00" }
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
            toggleBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
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
