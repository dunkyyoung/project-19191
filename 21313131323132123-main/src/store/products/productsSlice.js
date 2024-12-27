import {createSlice} from '@reduxjs/toolkit';

const productsList = [
    {
        id: 1,
        title: 'Protein black',
        category: 'pots',
        description:
            'preriscalda la griglia a fuoco medio-alto e ungila leggermente. Metti il ​​pollo sulla griglia e cuocilo per 8 minuti, quindi giralo, spennellalo con la marinata tenuta da parte e cuocilo per altri 8 minuti. Gira il pollo unultima volta, spennellalo di nuovo con la marinata rimasta e cuocilo per altri 5 minuti, o finché non rimane più rosa al centro del pollo. Per cuocere: preriscalda il forno a 400 gradi F. Metti una griglia adatta al forno su una grande teglia e ungila con uno spray da cucina antiaderente in modo che il pollo non si attacchi alla teglia. Metti le cosce di pollo sulla teglia con la parte più spessa della coscia verso lesterno. Cuoci per 40-50 minuti o finché non sono cotte.',
        discount: 50,
        initialPrice: 4545,
        img: '/product1.png',
        date: '2023-11-15',
    },
    {
        id: 2,
        title: 'workout basket',
        category: 'planting',
        description:
            '將烤架預熱至中高溫，並在烤架上塗上少許油。將雞肉放在烤架上烤 8 分鐘，然後翻轉，刷上保留的醃料，再烤 8 分鐘。最後把雞肉翻過來，再次刷上剩餘的醃料，再煮 5 分鐘，或直到雞肉中心不再有粉紅色。烘烤：將烤箱預熱至華氏 400 度。將雞腿放在平底鍋上，雞腿較厚的部分朝外。烘烤 40-50 分鐘或直至熟透。',
        discount: 34,
        initialPrice: 5000,
        img: '/product2.png',
        date: '2023-03-04',
    },
    {
        id: 3,
        title: 'testosterone',
        category: 'protective',
        description:
            'նախապես տաքացրեք ձեր գրիլը միջին բարձրության վրա և թեթևակի յուղեք քերիչով: Հավի միսը դրեք գրիլի վրա և եփեք 8 րոպե, այնուհետև շրջեք, քսեք պահված մարինադով խոզանակով և գրեք ևս 8 րոպե: Հավի միսը մի վերջին անգամ շրջեք, նորից քսեք մնացած մարինադով և եփեք ևս 5 րոպե, կամ մինչև հավի կենտրոնում վարդագույն չմնա:Թխելու համար. ջեռոցը նախապես տաքացրեք 400 աստիճանի F: Տեղադրեք ջեռոցում անվտանգ դարակ մի մեծ թխման թերթիկի վրա և քսեք չկպչող խոհարարական սփրեյով, որպեսզի հավը չկպչի տապակին: Թմբուկի փայտիկները դնել թավայի վրա՝ թմբուկի ավելի հաստ հատվածը դրսից։ Թխել 40-50 րոպե կամ մինչև եփվի։',
        discount: 25,
        initialPrice: 900,
        img: '/product3.png',
        date: '2023-06-12',
    },
    {
        id: 4,
        title: 'PLug basket',
        category: 'tools',
        description:
            'painitin muna ang iyong grill sa katamtamang mataas at bahagyang langisan ang rehas na bakal. Ilagay ang manok sa grill at lutuin ng 8 minuto, pagkatapos ay i-flip, i-brush gamit ang nakareserbang marinade, at ihaw ng karagdagang 8 minuto. Baliktarin ang manok sa huling pagkakataon, i-brush muli gamit ang natitirang marinade, at lutuin ng 5 minuto pa, o hanggang sa walang pink na natitira sa gitna ng manok.Para maghurno: painitin muna ang oven sa 400 degrees F. Maglagay ng oven-safe rack sa isang malaking baking sheet at grasa ng nonstick cooking spray para hindi dumikit ang manok sa kawali. Ilagay ang mga drumstick sa kawali na may mas makapal na bahagi ng drumstick sa labas. Maghurno ng 40-50 minuto o hanggang maluto.',
        discount: 17,
        initialPrice: 212,
        img: '/product4.png',
        date: '2023-12-17',
    },
    {
        id: 5,
        title: 'Berry bro',
        category: 'tools',
        description:
            'verwarm je grill voor op medium hoog en vet het rooster licht in. Leg de kip op de grill en bak 8 minuten, draai hem om, bestrijk hem met de overgebleven marinade en gril hem nog eens 8 minuten. Draai de kip nog een laatste keer om, bestrijk hem opnieuw met de overgebleven marinade en bak hem nog eens 5 minuten, of tot er geen roze meer in het midden van de kip zit.Om te bakken: verwarm de oven voor op 400 graden F. Plaats een ovenvast rek op een grote bakplaat en vet hem in met antiaanbakspray zodat de kip niet aan de pan blijft plakken. Leg de drumsticks op de pan met het dikste deel van de drumstick naar buiten. Bak 40-50 minuten of tot ze gaar zijn',
        discount: 26,
        initialPrice: 342,
        img: '/product5.png',
        date: '2023-07-23',
    },
    {
        id: 6,
        title: 'ukol v mischsa',
        category: 'tools',
        description:
            'grilingizni ortacha balandlikda oldindan qizdiring va panjarani ozgina yoglang. Tovuqni panjara ustiga qoying va 8 daqiqa davomida pishiring, song aylantiring, ajratilgan tuzlamoq bilan surting va qoshimcha 8 daqiqa panjara qiling. Tovuqni oxirgi marta aylantiring, qolgan tuzlamoq bilan yana chotkasi bilan surting va yana 5 daqiqa pishiring yoki tovuqning markazida pushti qolmasin.Pihirish uchun: pechni 400 daraja F ga oldindan qizdiring. Tovuq panga yopishib qolmasligi uchun katta pishirish varagiga pechka qoyish mumkin bolgan tokchani qoying va non yopishtiruvchi sprey bilan yoglang. Barabanni qalinroq qismi tashqariga qaratib, panga qoying. 40-50 daqiqa yoki pishganicha pishiring.',
        discount: 34,
        initialPrice: 700,
        img: '/product6.png',
        date: '2024-10-12',
    },
    {
        id: 7,
        title: 'kreatin',
        category: 'tools',
        description:
            'سخني الشواية على حرارة متوسطة إلى عالية وادهني الشبكة بالقليل من الزيت. ضعي الدجاج على الشواية واطهيه لمدة 8 دقائق، ثم اقلبيه وادهنيه بالتتبيلة المتبقية واشويه لمدة 8 دقائق إضافية. اقلب الدجاج مرة أخيرة وادهنيه بالتتبيلة المتبقية واطهي لمدة 5 دقائق أخرى، أو حتى لا يتبقى أي لون وردي في منتصف الدجاج.للخبز: سخني الفرن إلى 400 درجة فهرنهايت. ضعي رفًا آمنًا للاستخدام في الفرن على صينية خبز كبيرة وادهنيه برذاذ طهي غير لاصق حتى لا يلتصق الدجاج بالصينية. ضعي أعواد الطبل على الصينية مع وضع الجزء الأكثر سمكًا من أعواد الطبل للخارج. اخبزيها لمدة 40-50 دقيقة أو حتى تنضج تمامًا',
        discount: null,
        initialPrice: 155,
        img: '/product7.png',
        date: '2023-02-16',
    },
    {
        id: 8,
        title: 'predtren',
        category: 'tools',
        description:
            'ukufuuta grill yenu ukufika ku cipimo ca pa kati no kusanshako amafuta ayanono. Bikeni inkuku pa ng’anda ya kufimbapo no kufipika pa maminiti 8, lyene ukupilibula, ukufimbapo ne fya kulya fyasuminishiwa, no kufipika pa maminiti 8 ayalundwapo. Ukupilibula inkuku pa muku wa kulekelesha, ukufuuta na kabili ne fya kulya fyashala, no kufiika pa maminiti na yambi 5, nelyo ukufikila tapali pinki uwashala pa kati ka nkoko.Ukupika: tendekeni ukufuuta umulilo ukufika ku madigiri 400 F. Bikeni icipao icacingililwa pa cipe pa cipe icikulu ica mikate no kufipakapo amafuta ya kufimbapo ayashikakatika pa kuti inkuku ileke ukukakatila ku cipe. Bikeni ifipe fya ng’oma pa cipe ne ciputulwa ca ng’oma icafina ukuya ku nse. Ukubika pa maminiti 40-50 nelyo ukufika ilyo fyapika.',
        discount: null,
        initialPrice: 1808,
        img: '/product8.png',
        date: '2023-03-11',
    },
    {
        id: 9,
        title: 'caseine',
        category: 'tools',
        description:
            'i grill chu medium high ah preheat la, grate chu oil tlem te te in pe rawh. Chicken chu grill-ah dah la, minute 8 vel chhum la, flip la, reserved marinade hmangin brush la, minute 8 vel grill leh rawh. Vawk chu a vawi khatna atan herh leh la, marinade la awm chu brush leh la, minute 5 vel chhum leh la, a nih loh leh chicken lai takah pink a awm loh thlengin chhum leh rawh.Bake tur chuan oven chu 400 degree F-ah dah la, oven-safe rack chu baking sheet lian takah dah la, nonstick cooking spray hmangin grease la, chicken chu pan-ah a innghat lo ang. Drumstick te chu pan chungah dah la, drumstick thim zawk chu pawn lamah dah rawh. Minute 40-50 emaw a lum vek thlengin bak rawh.',
        discount: null,
        initialPrice: 1700,
        img: '/product9.png',
        date: '2024-09-25',
    },
    {
        id: 10,
        title: 'black and white',
        category: 'tools',
        description:
            'vakamamacataka na nomu grill ki na veimama cecere ka vakalailaitaka na waiwai na grate. Biuta na toa ena grill ka vakasaqa me baleta na 8 na miniti, qai flip, buradela ena marinade maroroi, ka vakasaqa me baleta e dua na ikuri ni 8 na miniti. Vukica na toa ena dua na iotioti ni gauna, buradela tale kei na vo ni marinade, ka vakasaqa me baleta na 5 tale na miniti, se me yacova ni sa sega ni dua na pink e vo ena lomadonu ni toa.Me vakamamacataki: vakamamacataka na ovani ki na 400 na diqiri F. Biuta e dua na rack ni ovani-taqomaki ena dua na pepa ni vakasaqa levu ka vakamamacataka ena nonstick spray ni vakasaqa me kakua ni kabi na toa ki na pan. Biuta na druma ena pan kei na tiki ni druma matolu ki na taudaku. Tavu me 40-50 na miniti se me yacova ni sa vakasaqa oti .',
        discount: null,
        initialPrice: 120,
        img: '/product10.png',
        date: '2024-01-14',
    },
    {
        id: 11,
        title: 'whey',
        category: 'tools',
        description:
            'n a yi zafi ga gasasshen ku zuwa matsakaicin tsayi kuma a yi sauƙaƙa mai da grate ɗin. Sanya kajin a kan gasa kuma dafa tsawon minti 8, sannan a juya, goge tare da marinade da aka tanada, da gasa don ƙarin minti 8. Juya kajin a kan lokaci na ƙarshe, sake gogewa tare da sauran marinade, kuma a dafa don ƙarin minti 5, ko har sai babu ruwan hoda da ya rage a tsakiyar kajin.Don yin gasa: preheat tanda zuwa digiri 400 F. Sanya tanda mai aminci a kan babban takardar burodi da kuma man shafawa tare da feshin dafa abinci marar amfani don kada kajin ya tsaya a kwanon rufi. Sanya ganguna a kan kwanon rufi tare da mafi girman ɓangaren ganga zuwa waje. Gasa na tsawon minti 40-50 ko har sai an dahu',
        discount: 18,
        initialPrice: 20,
        img: '/product11.png',
        date: '2023-01-17',
    },
];

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: productsList,
        filteredProducts: productsList,
        cart: [],
    },
    reducers: {
        filterReducer: (state, action) => {
            const {from, to, check, selectedOption} = action.payload;


            state.filteredProducts = state.allProducts.filter((product) =>
                !from && !to
                    ? true
                    : product.initialPrice >= (from || 0) &&
                    product.initialPrice <= (to || 10000)
            );
            if (check) {
                state.filteredProducts = state.filteredProducts.filter((elm) =>
                    check === true ? elm.discount : true
                );
            }
            switch (selectedOption) {
                case 'newest':
                    state.filteredProducts = state.filteredProducts
                        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                        .filter((elm) => (action.payload === true ? elm.discount : true));
                    break;
                case 'high-low':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) =>
                            (b.discount
                                ? b.initialPrice * (1 - b.discount / 100)
                                : b.initialPrice) -
                            (a.discount
                                ? a.initialPrice * (1 - a.discount / 100)
                                : a.initialPrice)
                    );
                    break;
                case 'low-high':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) =>
                            (a.discount
                                ? a.initialPrice * (1 - a.discount / 100)
                                : a.initialPrice) -
                            (b.discount
                                ? b.initialPrice * (1 - b.discount / 100)
                                : b.initialPrice)
                    );
                    break;
                case 'default':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) => a.id - b.id
                    );
                    break;
            }
        },

        addCart: (state, action) => {
            if (!action.payload) {
                return;
            }
            const {quantity, totalPrice, id} = action.payload;
            const index = state.cart.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.cart[index].quantity = quantity;
                state.cart[index].totalPrice = totalPrice;
            } else {
                state.cart.push(action.payload);
            }
        },

        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        emptyCart: (state) => {
            state.cart = [];
        }
    },

    selectors: {
        totalCartQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0),
        getTotalPrice: (state) => state.cart.reduce((total, item) => {
            return total + item.totalPrice;
        }, 0).toFixed(2).replace('.', ','),
        onlyDiscountedProducts: (state) => state.filteredProducts.filter((item) => item.discount)
    }
});

export const selectProductById = (id) => (state) =>
    state.products.allProducts.find((product) => product.id === id);

export const selectProductByCategory = (category) => (state) =>
    state.products.filteredProducts.filter(
        (product) => product.category === category
    );

export const selectIsProductInCart = (id) => (state) =>
    state.products.cart?.some(item => item.id === id)


export const {totalCartQuantity, getTotalPrice, onlyDiscountedProducts} = productsSlice.selectors;

export const {
    filterReducer,
    addCart,
    deleteCart,
    emptyCart
} = productsSlice.actions;
export default productsSlice.reducer;
