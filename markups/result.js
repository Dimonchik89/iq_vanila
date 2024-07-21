export const result = `
    <div class="test-content">
        <h2 class="text-white text-center test-title text-uppercase">
            Ваш результат рассчитан: 
        </h2>
        <p class="text-white text-center result-info">
            Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 
            15 пунктов отличается от среднего в большую или меньшую сторону!
        </p>
        <h1 class="text-green text-uppercase text-center result-title">
            Скорее получите свой результат!
        </h1>
        <div class="result-description">
            <div class="result-description__content">
                <p class="text-white result-text text-center text-uppercase">
                    В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
                </p>
            </div>
        </div>

        <div class="result-call">
            <p class="text-green result-call__info text-center">Звоните скорее, запись доступна всего</p>
            <div class="text-green result-call__info text-center">
                <span class="result-call__time">10:00 </span>
                <span>МИНУТ</span>
            </div>
        </div>

        <div class="result-phone">
            <div class="result-phone__wrapper">
                <img src="${
                  import.meta.env.VITE_BASE_PATH
                }/icon/call.png" alt="call"/>
                <p class="result-phone__text text-white text-uppercase">позвонить и прослушать результат </p>
            </div>
        </div>

        <div class="result-markup flex center gap-08"></div>
    </div>
`;
