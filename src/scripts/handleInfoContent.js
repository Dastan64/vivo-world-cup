import { store } from './store';
import { infoGrid } from './constants';

export const handleInfoContent = () => {
    switch (store.selectedModel) {
        case 'v25e':
            infoGrid.innerHTML = `
                        <div class="grid__item grid__item--wide" style="padding-top: 0;">
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--4">
                            <h3 class="grid__item-title">Сияющий и эргономичный</h3>
                            <p>Смартфон имеет удобную форму корпуса, а продуманный дизайн модели создан для того, чтобы
                                радовать глаз</p>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-2.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--8">
                            <h3 class="grid__item-title">Оттенки которые меняются и сияют</h3>
                            <p style="margin-bottom: 16px;">Фотохромный корпус завораживает и притягивает взгляды
                                переливаясь загадочными оттенками</p>
                            <div class="grid__item-color-tabs">
                                <button value="grid-v25e/vivo-v25e-3.png" style="background-color: #FFD900;" type="button"
                                        class="grid__item-color-tab grid__item-color-tab--active">
                                     <span></span>
                                </button>
                                <button value="grid-v25e/vivo-v25e-3-1.png" style="background-color: #141414;"
                                        type="button"
                                        class="grid__item-color-tab">
                                    <span></span>
                                </button>
                            </div>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute" style="bottom: -56px;"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-3.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--8">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Праздник для глаз</h3>
                                    <p>AMOLED-дисплей с частотой 90 Гц и сверхвысоким динамическим диапазоном выделяется красочностью цветов, чёткостью и высокой детализацией.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>Максимальная яркость</p>
                                            <p>до 800 нит</p>
                                        </li>
                                        <li>
                                            <p>6000000:1</p>
                                            <p>Контрастность</p>
                                        </li>
                                        <li>
                                            <p>100%</p>
                                            <p>P3</p>
                                        </li>                                        <li>
                                            <p>103%</p>
                                            <p>NTSC</p>
                                        </li>
                                        <li>
                                            <img src="https://www.technodom.kz/under/banners/vivo-world-cup/eye-care.png" alt="">
                                        </li>
                                    </ul>
                                    <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25e"
                                       class="grid__item-link">В магазин</a>
                                </div>
                                <figure>
                                    <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-4.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--4">
                            <h3 class="grid__item-title">Энергии хватит на весь день</h3>
                            <p>Благодаря использованию современной технологии, заряда аккумулятора 4500 мА·ч хватит
                                на целый день и даже дольше</p>
                            <div class="grid__item-char">
                                <h3>4500 мА/ч</h3>
                                <span>Аккумулятор</span>
                            </div>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-5.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Камера</h3>
                                    <p>64 мп камера с оптической стабилизацией изображения сможет
                                        зафиксировать памятные мгновения вашей жизни во всех деталях.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>64Мп</p>
                                            <p>ультрачувствительная камера с оптической
                                                стабилизацией изображения (OIS)</p>
                                        </li>
                                        <li>
                                            <p>2 Мп</p>
                                            <p>с эффектом боке</p>
                                        </li>
                                        <li>
                                            <p>2 Мп</p>
                                            <p>макрокамера</p>
                                        </li>
                                        <li style="margin-bottom: 48px;">
                                            <p>32 Мп</p>
                                            <p>селфи-камера с автофокусом по глазам</p>
                                        </li>
                                    </ul>
                                </div>
                                <figure>
                                    <img class="grid__item-image grid__item-image--absolute grid__item-image--right"
                                         src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-6.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered"
                             style="background: url('https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-7-bg.png') no-repeat center center / cover">
                            <h3 style="color: #fff" class="grid__item-title grid__item-title--bigger">Звук вокруг</h3>
                            <p style="color: #fff">Оцените улучшенное качество звука. Мы оптимизировали множество параметров: начиная от настроек передачи
данных с аудиоисточниковна динамики до создания идеальной формы, подходящей для ваших ушей</p>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-7.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered">
                            <h3 class="grid__item-title grid__item-title--bigger">Иммерсивное погружение в игры</h3>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25e/vivo-v25e-8.png"
                                     alt="">
                            </figure>
                            <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25e"
                               class="grid__item-link">Купить VIVO V25E</a>
                            <div class="grid__item-tabs i-tabs">
                                <button class="i-tabs__btn i-tabs__btn--active"
                                        data-text="Режим Game Boost погрузит вас в фантастический мир игр, используя всю производительность смартфона.">
                                    Режим Game Boost
                                </button>
                                <button class="i-tabs__btn" data-text="ASd">Комплексное улучшение звука</button>
                                <button class="i-tabs__btn" data-text="das">Система жидкостного охлаждения</button>
                                <button class="i-tabs__btn span-3" data-text="123">4D-вибрация в играх</button>
                                <button class="i-tabs__btn span-3" data-text="asd">Антенна, адаптированная для игр
                                </button>
                            </div>
                        </div>
            `
            break;
        case 'v25pro':
            infoGrid.innerHTML = `
                        <div class="grid__item grid__item--wide" style="padding-top: 0;">
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered">
                                                    <h3 class="grid__item-title">Плавное воспроизведение видео</h3>
                            <p>Благодаря частоте обновления 120 Гц и частоте отклика дисплея 300 Гц,
воспроизведение видео на экране становится невероятно плавным, а отклик - мгновенным.</p>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-2.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--4">
                            <figure>
                                <img style="top: 0;" class="grid__item-image grid__item-image--absolute" src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-3.png"
                                     alt="">
                            </figure>
                                                        <div class="grid__item-text-container">
                                                        <h3 class="grid__item-title">Антибликовое стекло с бархатистой поверхностью</h3>
                            <p>Благодаря слою кристаллов антибликовое стекло с бархатистой поверхностью роскошно сверкает и меняет цвет под разными углами.</p>
</div>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--8">
                            <h3 class="grid__item-title">Лазурный берег</h3>
                            <p style="margin-bottom: 16px;">Океан зовёт. Фотохромное стекло отразит всю глубину его манящих волн.</p>
                            <div class="grid__item-color-tabs">
                                <button data-title="Лазурный берег" data-description="Океан зовёт. Фотохромное стекло отразит всю глубину его манящих волн." value="grid-v25pro/vivo-v25pro-4.png" style="background-color: #51EAE8;" type="button"
                                        class="grid__item-color-tab grid__item-color-tab--active">
                                     <span></span>
                                </button>
                                <button data-title="Звёздное сияние" data-description="Потрясающее изысканное сияние, напоминающее о магии звёздных ночей." value="grid-v25pro/vivo-v25pro-4-1.png" style="background-color: #141414;"
                                        type="button"
                                        class="grid__item-color-tab">
                                    <span></span>
                                </button>
                            </div>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute" style="bottom: -56px;"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-4.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--8">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Надёжность и
                                        долговечность</h3>
                                    <p>Смартфон устойчив к падениям, царапина
                                        и воде, поэтому станет вашим надёжным спутником в любых жизненных ситуациях.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>42 000 циклов</p>
                                            <p>Испытания на падение</p>
                                        </li>
                                        <li>
                                            <p>6 000 циклов</p>
                                            <p>Подключения и отключения</p>
                                        </li>
                                        <li>
                                            <p>От -20 °C до 50 °C</p>
                                            <p>Испытания на устойчивость к экстремальным условиям (эксплуатация)</p>
                                        </li>
                                        <li>
                                            <p>От -40 °C до 75 °C</p>
                                            <p>Испытания на устойчивость к экстремальным условиям (хранение)</p>
                                        </li>
                                    </ul>
                                    <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25-pro"
                                       class="grid__item-link">В магазин</a>
                                </div>
                                <figure>
                                    <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-5.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--4">
                            <h3 class="grid__item-title">Для динамичного образа жизни</h3>
                            <p>Благодаря 66 Вт быстрой зарядке FlashCharge вы сможете зарядить свой смартфон до 42% всего за 15 минут.</p>
                            <ul class="grid__item-features">
                                <li><img src="https://www.technodom.kz/under/banners/vivo-world-cup/protection.png" alt=""><span>24-уровневая защита</span></li>
                                <li><img src="https://www.technodom.kz/under/banners/vivo-world-cup/battery.png" alt=""><span>Интеллектуальная система зарядки</span></li>
                            </ul>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-6.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Камера</h3>
                                    <p>64 мп камера с оптической стабилизацией изображения сможет
                                        зафиксировать памятные мгновения вашей жизни во всех деталях.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>64Мп</p>
                                            <p>ультрачувствительная камера с оптической
                                                стабилизацией изображения (OIS)</p>
                                        </li>
                                        <li>
                                            <p>8 Мп</p>
                                            <p>сверхширокоугольная камера</p>
                                        </li>
                                        <li>
                                            <p>2 Мп</p>
                                            <p>макрокамера</p>
                                        </li>
                                        <li style="margin-bottom: 48px;">
                                            <p>32 Мп</p>
                                            <p>селфи-камера с автофокусом по глазам</p>
                                        </li>
                                    </ul>
                                </div>
                                <figure>
                                    <img class="grid__item-image grid__item-image--absolute grid__item-image--right"
                                         src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-7.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered"
                             style="background: url('https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-7-bg.png') no-repeat center center / cover">
                             <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-8.png"
                                     alt="">
                            </figure>
                            <h3 style="color: #fff" class="grid__item-title grid__item-title--bigger grid__item-title--top">Превосходные ночные снимки</h3>
                            <p style="color: #fff">Cнимайте ночью естественные и насыщенные деталями фотографии. Ультимативный ночной режим
в реальном времени преображает ваши снимки,позволяя запечатлевать ночь во всём её великолепии.</p>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered grid__item--onlybg"
                             style="background: url('https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-8-bg.png') no-repeat center center / cover">
                            <h3 style="color: #212427" class="grid__item-title grid__item-title--bigger">Звук с эффектом погружения</h3>
                            <p style="color: #212427">Комплексное улучшение звука обеспечивает качественное звучание,
которое не оставит вас равнодушным.</p>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered">
                            <h3 class="grid__item-title grid__item-title--bigger">Иммерсивное погружение в игры</h3>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25pro/vivo-v25pro-10.png"
                                     alt="">
                            </figure>
                            <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25-pro"
                               class="grid__item-link">Купить VIVO V25 Pro</a>
                            <div class="grid__item-tabs i-tabs">
                                <button class="i-tabs__btn i-tabs__btn--active"
                                        data-text="Бионическая система охлаждения предотвращает нагрев смартфона, даже если он очень активно используется.">
                                    Бионическая система охлаждения
                                </button>
                                <button class="i-tabs__btn" data-text="ASd">Режим Game Boost</button>
                                <button class="i-tabs__btn" data-text="das">Линейный вибромотор</button>
                                <button class="i-tabs__btn span-3" data-text="123">Антенна, адаптированная для игр</button>
                                <button class="i-tabs__btn span-3" data-text="asd">Комплексное улучшение изображения и звука
                                </button>
                            </div>
                        </div>
            `
            break;
        default:
            infoGrid.innerHTML = `
                        <div class="grid__item grid__item--wide" style="padding-top: 0;">
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--4">
                            <h3 class="grid__item-title">Сияющий и эргономичный</h3>
                            <p>Смартфон имеет удобную форму корпуса, а продуманный дизайн модели создан для того, чтобы
                                радовать глаз</p>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-2.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--centered grid__item--8">
                            <h3 class="grid__item-title">Оттенки которые меняются и сияют</h3>
                            <p style="margin-bottom: 16px;">Фотохромный корпус завораживает и притягивает взгляды
                                переливаясь загадочными оттенками</p>
                            <div class="grid__item-color-tabs">
                                <button value="grid-v25/vivo-v25-3.png" style="background-color: #51EAE8;" type="button"
                                        class="grid__item-color-tab grid__item-color-tab--active">
                                    <span></span>
                                </button>
                                <button value="grid-v25/vivo-v25-3-1.png" style="background-color: #141414;"
                                        type="button"
                                        class="grid__item-color-tab">
                                    <span></span>
                                </button>
                            </div>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute" style="bottom: -56px;"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-3.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--8">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Надёжность и
                                        долговечность</h3>
                                    <p>Смартфон устойчив к падениям, царапина
                                        и воде, поэтому станет вашим надёжным спутником в любых жизненных ситуациях.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>42 000 циклов</p>
                                            <p>Испытания на падение</p>
                                        </li>
                                        <li>
                                            <p>6 000 циклов</p>
                                            <p>Подключения и отключения</p>
                                        </li>
                                        <li>
                                            <p>От -20 °C до 50 °C</p>
                                            <p>Испытания на устойчивость к экстремальным условиям (эксплуатация)</p>
                                        </li>
                                        <li>
                                            <p>От -40 °C до 75 °C</p>
                                            <p>Испытания на устойчивость к экстремальным условиям (хранение)</p>
                                        </li>
                                    </ul>
                                    <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25"
                                       class="grid__item-link">В магазин</a>
                                </div>
                                <figure>
                                    <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-4.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--4">
                            <h3 class="grid__item-title">Энергии хватит на весь день</h3>
                            <p>Благодаря использованию современной технологии, заряда аккумулятора 4500 мА·ч хватит
                                на целый день и даже дольше</p>
                            <div class="grid__item-char">
                                <h3>4500 мА/ч</h3>
                                <span>Аккумулятор</span>
                            </div>
                            <figure>
                                <img class="grid__item-image grid__item-image--absolute"
                                     src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-5.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide">
                            <div class="grid__item-container">
                                <div class="grid__item-info">
                                    <h3 class="grid__item-title grid__item-title--bigger">Камера</h3>
                                    <p>64 мп камера с оптической стабилизацией изображения сможет
                                        зафиксировать памятные мгновения вашей жизни во всех деталях.</p>
                                    <ul class="grid__item-list">
                                        <li>
                                            <p>64Мп</p>
                                            <p>ультрачувствительная камера с оптической
                                                стабилизацией изображения (OIS)</p>
                                        </li>
                                        <li>
                                            <p>8 Мп</p>
                                            <p>сверхширокоугольная камера</p>
                                        </li>
                                        <li>
                                            <p>2 Мп</p>
                                            <p>макрокамера</p>
                                        </li>
                                        <li style="margin-bottom: 48px;">
                                            <p>50 Мп</p>
                                            <p>селфи-камера с автофокусом по глазам</p>
                                        </li>
                                    </ul>
                                </div>
                                <figure>
                                    <img class="grid__item-image grid__item-image--absolute grid__item-image--right"
                                         src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-6.png"
                                         alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered"
                             style="background: url('https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-7-bg.png') no-repeat center center / cover">
                            <h3 style="color: #fff" class="grid__item-title grid__item-title--bigger">Концертный зал в
                                вашей гостиной</h3>
                            <p style="color: #fff">Герметичный динамик с большой амплитудой вибрации обеспечивает
                                превосходное
                                качество звучания, которое подарит вам незабываемые впечатления.</p>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-7.png"
                                     alt="">
                            </figure>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered">
                            <h3 class="grid__item-title grid__item-title--bigger">Иммерсивное погружение в игры</h3>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-8.png"
                                     alt="">
                            </figure>
                            <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo/cl-smartphones-main-spec-292/vivo-v25?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=PMax-google-search-smartshopping-feed-td-dm-all-categories-kz&gclid=Cj0KCQiA1NebBhDDARIsAANiDD1aHMyl3pdpWqCtn-Vjva0QYK0yOCsbjJHvhA4LQ79wrOIeLvXU7zMaAsmXEALw_wcB"
                               class="grid__item-link">Купить VIVO V25</a>
                            <div class="grid__item-tabs i-tabs">
                                <button class="i-tabs__btn i-tabs__btn--active"
                                        data-text="Режим Game Boost погрузит вас в фантастический мир игр, используя всю производительность смартфона.">
                                    Режим Game Boost
                                </button>
                                <button class="i-tabs__btn" data-text="ASd">Комплексное улучшение звука</button>
                                <button class="i-tabs__btn" data-text="das">Система жидкостного охлаждения</button>
                                <button class="i-tabs__btn span-3" data-text="123">4D-вибрация в играх</button>
                                <button class="i-tabs__btn span-3" data-text="asd">Антенна, адаптированная для игр
                                </button>
                            </div>
                        </div>
                        <div class="grid__item grid__item--wide grid__item--centered">
                            <h3 class="grid__item-title grid__item-title--bigger">Ещё больше смартфонов VIVO</h3>
                            <p style="margin: 0;">В нашем магазине ты можешь посмотреть ещё больше актуальных и новых
                                моделей VIVO</p>
                            <a href="/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/vivo"
                               class="grid__item-link grid__item-link--blue">В магазин</a>
                            <figure>
                                <img src="https://www.technodom.kz/under/banners/vivo-world-cup/grid-v25/vivo-v25-9.png"
                                     alt="">
                            </figure>
                        </div>
            `;
    }
}
