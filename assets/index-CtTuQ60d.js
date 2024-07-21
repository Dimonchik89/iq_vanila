(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const wt=`
    <div class="test-content">
      <h2 class="text-white text-center test-title">Ваш пол:</h2>

      <form class="test-form">
        <div class="test-field">
          <input type="radio" id="male" name="gender" />
          <label class="container container-bg" for="male">
            <div class="container-inner">
              <span class="checkmark"></span>
              <span class="test-text text-white">Мужчина</span>
            </div>
          </label>
        </div>

        <div class="test-field">
          <input type="radio" id="female" name="gender" />
          <label class="container container-bg" for="female">
            <div class="container-inner">
              <span class="checkmark"></span>
              <span class="test-text text-white">Женщина</span>
            </div>
          </label>
        </div>

        <div class="m-auto">
          <button
            type="submit"
            class="button button-disabled test-button"
            disabled
          >
            Далее
          </button>
        </div>
      </form>
    </div>    
`,_t=`
        
  <div class="test-content">
    <h2 class="text-white text-center test-title">
      Укажите ваш возраст:
    </h2>

    <form class="test-form">
      <div class="test-field">
        <input type="radio" id="before18" name="age" />
        <label class="container container-bg" for="before18">
          <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">До 18</span>
          </div>
        </label>
      </div>

      <div class="test-field">
        <input type="radio" id="before28" name="age" />
        <label class="container container-bg" for="before28">
          <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">От 18 до 28</span>
          </div>
        </label>
      </div>

      <div class="test-field">
        <input type="radio" id="before35" name="age" />
        <label class="container container-bg" for="before35">
          <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">от 29 до 35</span>
          </div>
        </label>
      </div>

      <div class="test-field">
        <input type="radio" id="more36" name="age" />
        <label class="container container-bg" for="more36">
          <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">От 36</span>
          </div>
        </label>
      </div>

      <div class="m-auto">
        <button
          type="submit"
          class="button button-disabled test-button"
          disabled
        >
          Далее
        </button>
      </div>
    </form>
  </div>
        
`,xt=`
    <div class="test-content">
    <h2 class="text-white text-center test-title">Выберите лишнее:</h2>

    <form class="test-form">
        <div class="test-field">
        <input type="radio" id="home" name="home" />
        <label class="container container-bg" for="home">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Дом</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="hut" name="home" />
        <label class="container container-bg" for="hut">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Шалаш</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="bungalow" name="home" />
        <label class="container container-bg" for="bungalow">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Бунгало</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="bench" name="home" />
        <label class="container container-bg" for="bench">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Скамейка</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="shack" name="home" />
        <label class="container container-bg" for="shack">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Хижина</span>
            </div>
        </label>
        </div>

        <div class="m-auto">
        <button
            type="submit"
            class="button button-disabled test-button"
            disabled
        >
            Далее
        </button>
        </div>
    </form>
    </div>
    
`,Et=`
    <div class="test-content">
    <h2 class="text-white text-center test-title">
        Продолжите числовой ряд: 18 20 24 32
    </h2>

    <form class="test-form">
        <div class="test-field">
        <input type="radio" id="62" name="number_array" />
        <label class="container container-bg" for="62">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">62</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="48" name="number_array" />
        <label class="container container-bg" for="48">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">48</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="74" name="number_array" />
        <label class="container container-bg" for="74">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">74</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="57" name="number_array" />
        <label class="container container-bg" for="57">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">57</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="60" name="number_array" />
        <label class="container container-bg" for="60">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">60</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="77" name="number_array" />
        <label class="container container-bg" for="77">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">77</span>
            </div>
        </label>
        </div>

        <div class="m-auto">
        <button
            type="submit"
            class="button button-disabled test-button"
            disabled
        >
            Далее
        </button>
        </div>
    </form>
    </div>
`,St=`
    <div class="test-content">
    <h2 class="text-white text-center test-title">
        Выберите цвет, который сейчас наиболее Вам приятен:
    </h2>

    <form class="test-form">
        <div class="test-form__grid">
        <div class="test-field">
            <input type="radio" id="gray" name="color" />
            <label
            class="container test-label__gray test-label test-label__lg"
            for="gray"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="blue" name="color" />
            <label
            class="container test-label__blue test-label test-label__lg"
            for="blue"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="green" name="color" />
            <label
            class="container test-label__green test-label test-label__lg"
            for="green"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="red" name="color" />
            <label class="container test-label__red test-label test-label__lg" for="red">
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="yellow" name="color" />
            <label
            class="container test-label__yellow test-label test-label__lg"
            for="yellow"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="brown" name="color" />
            <label
            class="container test-label__brown test-label test-label__lg"
            for="brown"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="black" name="color" />
            <label
            class="container test-label__black test-label test-label__lg"
            for="black"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="violet" name="color" />
            <label
            class="container test-label__violet test-label test-label__lg"
            for="violet"
            >
            </label>
        </div>

        <div class="test-field">
            <input type="radio" id="cyan" name="color" />
            <label
            class="container test-label__cyan test-label test-label__lg"
            for="cyan"
            >
            </label>
        </div>
        </div>

        <div class="m-auto">
        <button
            type="submit"
            class="button button-disabled test-button"
            disabled
        >
            Далее
        </button>
        </div>
    </form>
    </div>
`,Tt=`
    <div class="test-content">
        <h2 class="text-white text-center test-title">
            Выберите цвет, который сейчас наиболее Вам приятен:
        </h2>

        <form class="test-form">
            <div class="test-form__grid">
            <div class="test-field">
                <input type="radio" id="gray-again" name="color-again" />
                <label
                class="container test-label__gray test-label test-label__lg"
                for="gray-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="cyan-again" name="color-again" />
                <label
                class="container test-label__cyan test-label test-label__lg"
                for="cyan-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="brown-again" name="color-again" />
                <label
                class="container test-label__brown test-label test-label__lg"
                for="brown-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="green-again" name="color-again" />
                <label
                class="container test-label__green test-label test-label__lg"
                for="green-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="black-again" name="color-again" />
                <label
                class="container test-label__black test-label test-label__lg"
                for="black-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="red-again" name="color-again" />
                <label
                class="container test-label__red test-label test-label__lg"
                for="red-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="violet-again" name="color-again" />
                <label
                    class="container test-label__violet test-label test-label__lg"
                    for="violet-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="yellow-again" name="color-again" />
                <label
                class="container test-label__yellow test-label test-label__lg"
                for="yellow-again"
                >
                </label>
            </div>

            <div class="test-field">
                <input type="radio" id="blue-again" name="color-again" />
                <label
                class="container test-label__blue test-label test-label__lg"
                for="blue-again"
                >
                </label>
            </div>
            </div>

            <div class="m-auto">
            <button
                type="submit"
                class="button button-disabled test-button"
                disabled
            >
                Далее
            </button>
            </div>
        </form>
    </div>
`,Rt=`
    <div class="test-content">
    <h2 class="text-white text-center test-title">
        Какой из городов лишний?
    </h2>

    <form class="test-form">
        <div class="test-field">
        <input type="radio" id="washington" name="city" />
        <label class="container container-bg" for="washington">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Вашингтон</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="london" name="city" />
        <label class="container container-bg" for="london">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Лондон</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="paris" name="city" />
        <label class="container container-bg" for="paris">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Париж</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="ny" name="city" />
        <label class="container container-bg" for="ny">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Нью-Йорк</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="moscow" name="city" />
        <label class="container container-bg" for="moscow">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Москва</span>
            </div>
        </label>
        </div>

        <div class="test-field">
        <input type="radio" id="ottawa" name="city" />
        <label class="container container-bg" for="ottawa">
            <div class="container-inner container-inner__lg">
            <span class="checkmark"></span>
            <span class="test-text text-white">Оттава</span>
            </div>
        </label>
        </div>

        <div class="m-auto">
        <button
            type="submit"
            class="button button-disabled test-button"
            disabled
        >
            Далее
        </button>
        </div>
    </form>
    </div>
`,Ot=`
    <div class="test-content">
    <h2 class="text-white text-center test-title">
        Выберите правильную фигуру из четырёх пронумерованных.
    </h2>

        <div class="flex flex-col center gap-2">
            <div>
                <img src="/iq_vanila/tests/test8.png" alt="test8" />
            </div>

            <form class="test-form">
                <div class="flex gap-3">
                    <div class="test-field">
                        <input type="radio" id="figure1" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="figure1"
                        >
                            1
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="figure2" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="figure2"
                        >
                            2
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="figure3" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="figure3"
                        >
                            3
                        </label>
                    </div>
                    
                    <div class="test-field">
                        <input type="radio" id="figure4" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="figure4"
                        >
                            4
                        </label>
                    </div>
                </div>

                <div class="m-auto">
                <button
                    type="submit"
                    class="button button-disabled test-button"
                    disabled
                >
                    Далее
                </button>
                </div>
            </form>
        </div>
    </div>
`,kt=`
    <div class="test-content">
      <h2 class="text-white text-center test-title">Вам привычнее и важнее:</h2>

      <form class="test-form">
        <div class="test-field">
          <input type="radio" id="Enjoy" name="priority" />
          <label class="container container-bg" for="Enjoy">
            <div class="container-inner container-inner__lg">
              <span class="checkmark"></span>
              <span class="test-text text-white">Наслаждаться каждой минутой проведенного времени</span>
            </div>
          </label>
        </div>

        <div class="test-field">
          <input type="radio" id="aspiring" name="priority" />
          <label class="container container-bg" for="aspiring">
            <div class="container-inner container-inner__lg">
              <span class="checkmark"></span>
              <span class="test-text text-white">Быть устремленными мыслями в будущее</span>
            </div>
          </label>
        </div>

        <div class="test-field">
          <input type="radio" id="experience" name="priority" />
          <label class="container container-bg" for="experience">
            <div class="container-inner container-inner__lg">
              <span class="checkmark"></span>
              <span class="test-text text-white">Учитывать в ежедневной практике прошлый опыт</span>
            </div>
          </label>
        </div>

        <div class="m-auto">
          <button
            type="submit"
            class="button button-disabled test-button"
            disabled
          >
            Далее
          </button>
        </div>
      </form>
    </div>  
`,Lt=`
    <div class="test-content">
    <h2 class="text-white text-center test-title__sm">
        Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: 
    </h2>

        <div class="flex flex-col center gap-08">
            <div>
                <img src="/iq_vanila/tests/test10.png" alt="test10" />
            </div>

            <form class="test-form width-full">
                <div class="test-field">
                    <input type="radio" id="pointed" name="figure" />
                    <label class="container container-bg" for="pointed">
                        <div class="container-inner container-inner__lg">
                        <span class="checkmark"></span>
                        <span class="test-text text-white">Оно остроконечное</span>
                        </div>
                    </label>
                </div>

                <div class="test-field">
                    <input type="radio" id="steady" name="figure" />
                    <label class="container container-bg" for="steady">
                        <div class="container-inner container-inner__lg">
                        <span class="checkmark"></span>
                        <span class="test-text text-white">Оно устойчиво</span>
                        </div>
                    </label>
                </div>

                <div class="test-field">
                    <input type="radio" id="balance" name="figure" />
                    <label class="container container-bg" for="balance">
                        <div class="container-inner container-inner__lg">
                        <span class="checkmark"></span>
                        <span class="test-text text-white">Оно-находится в состоянии равновесия</span>
                        </div>
                    </label>
                </div>

                <div class="m-auto">
                <button
                    type="submit"
                    class="button button-disabled test-button"
                    disabled
                >
                    Далее
                </button>
                </div>
            </form>
        </div>
    </div>
`,At=`
<div class="test-content">
    <h2 class="text-white text-center test-title">
        Вставьте подходящее число
    </h2>

        <div class="flex flex-col center gap-2">
            <div>
                <img src="/iq_vanila/tests/test11.png" alt="test11" />
            </div>

            <div class="border"></div>

            <form class="test-form">
                <div class="flex gap-08">
                    <div class="test-field">
                        <input type="radio" id="34" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="34"
                        >
                            34
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="36" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="36"
                        >
                            36
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="53" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="53"
                        >
                            53
                        </label>
                    </div>
                    
                    <div class="test-field">
                        <input type="radio" id="44" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="44"
                        >
                            44
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="66" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="66"
                        >
                            66
                        </label>
                    </div>

                    <div class="test-field">
                        <input type="radio" id="42" name="figure" />
                        <label
                            class="container test-label__white test-label test-label__sm flex center"
                            for="42"
                        >
                            42
                        </label>
                    </div>
                </div>

                <div class="m-auto">
                <button
                    type="submit"
                    class="button button-disabled test-button"
                    disabled
                >
                    Далее
                </button>
                </div>
            </form>
        </div>
    </div>
`,Pt=`
    <div class="test-content">
        <h2 class="text-white text-center test-title">
            Обработка результатов
        </h2>

        <div class="spinner-wrapper">
            <div class="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <p class="text-white text-center">
            Определение стиля мышления...........
            .... ...................................................
        </p>
    </div>
`,Ct=`
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
                <img src="/icon/call.png" alt="call"/>
                <p class="result-phone__text text-white text-uppercase">позвонить и прослушать результат </p>
            </div>
        </div>

        <div class="result-markup flex center gap-08"></div>
    </div>
`;function Me(e){const t=e.querySelector("form");t&&t.addEventListener("change",n=>{if(n.target.nodeName!=="INPUT")return;const s=t.querySelector("button");s.disabled=!1,s.classList.replace("button-disabled","button-orange")})}/**
 * tua-body-scroll-lock v1.5.0
 * (c) 2024 Evinma, BuptStEve
 * @license MIT
 */var K=function(){return typeof window>"u"},ae=function(t){t=t||navigator.userAgent;var n=/(iPad).*OS\s([\d_]+)/.test(t),s=!n&&/(iPhone\sOS)\s([\d_]+)/.test(t),r=/(Android);?[\s/]+([\d.]+)?/.test(t),i=s||n;return{ios:i,android:r}};function Nt(e){if(K())return!1;if(!e)throw new Error("options must be provided");var t=!1,n={get passive(){t=!0}},s=function(){},r="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(r,s,n),window.removeEventListener(r,s,n);var i=e.capture;return t?e:typeof i<"u"?i:!1}function me(){return"__BSL_PREVENT_DEFAULT__"in window||(window.__BSL_PREVENT_DEFAULT__=function(e){e.cancelable&&e.preventDefault()}),window.__BSL_PREVENT_DEFAULT__}var z={lockedNum:0,lockedElements:[],unLockCallback:null,documentListenerAdded:!1,initialClientPos:{clientX:0,clientY:0}};function X(e){if(K())return z;if(!(e!=null&&e.useGlobalLockState))return X.lockState;var t="__BSL_LOCK_STATE__"in window?Object.assign(Object.assign({},z),window.__BSL_LOCK_STATE__):z;return window.__BSL_LOCK_STATE__=t,t}X.lockState=z;function Bt(e,t,n){if(t){var s=t.scrollTop,r=t.scrollLeft,i=t.scrollWidth,a=t.scrollHeight,l=t.clientWidth,u=t.clientHeight,d=e.targetTouches[0].clientX-n.clientX,c=e.targetTouches[0].clientY-n.clientY,p=Math.abs(c)>Math.abs(d),y=c>0&&s===0,b=d>0&&r===0,f=d<0&&r+l+1>=i,m=c<0&&s+u+1>=a;if(p&&(y||m)||!p&&(b||f))return me()(e)}return e.stopPropagation(),!0}function Ft(){var e=document.documentElement,t=Object.assign({},e.style),n=window.innerWidth-e.clientWidth,s=parseInt(window.getComputedStyle(e).paddingRight,10);return e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight="".concat(n+s,"px"),function(){["overflow","boxSizing","paddingRight"].forEach(function(r){e.style[r]=t[r]||""})}}function Dt(e){var t=document.documentElement,n=document.body,s=t.scrollTop||n.scrollTop,r=Object.assign({},t.style),i=Object.assign({},n.style);return t.style.height="100%",t.style.overflow="hidden",n.style.top="-".concat(s,"px"),n.style.width="100%",n.style.height="auto",n.style.position="fixed",n.style.overflow=(e==null?void 0:e.overflowType)||"hidden",function(){t.style.height=r.height||"",t.style.overflow=r.overflow||"",["top","width","height","overflow","position"].forEach(function(l){n.style[l]=i[l]||""});var a="scrollBehavior"in document.documentElement.style;a?window.scrollTo({top:s,behavior:"instant"}):window.scrollTo(0,s)}}var Ie=Nt({passive:!1});function Ut(e,t){if(!K()){var n=X(t);if(ae().ios){if(e){var s=Array.isArray(e)?e:[e];s.forEach(function(r){r&&n.lockedElements.indexOf(r)===-1&&(r.ontouchstart=function(i){var a=i.targetTouches[0],l=a.clientX,u=a.clientY;n.initialClientPos={clientX:l,clientY:u}},r.ontouchmove=function(i){i.targetTouches.length===1&&Bt(i,r,n.initialClientPos)},n.lockedElements.push(r))})}n.documentListenerAdded||(document.addEventListener("touchmove",me(),Ie),n.documentListenerAdded=!0)}else n.lockedNum<=0&&(n.unLockCallback=ae().android?Dt(t):Ft());n.lockedNum+=1}}function qt(e,t){if(!K()){var n=X(t);if(n.lockedNum-=1,!(n.lockedNum>0)){if(!ae().ios&&typeof n.unLockCallback=="function"){n.unLockCallback();return}if(e){var s=Array.isArray(e)?e:[e];s.forEach(function(r){var i=n.lockedElements.indexOf(r);i!==-1&&(r.ontouchmove=null,r.ontouchstart=null,n.lockedElements.splice(i,1))})}n.documentListenerAdded&&(document.removeEventListener("touchmove",me(),Ie),n.documentListenerAdded=!1)}}}function jt(e){e.classList.add("show"),Ut(e,{overflowType:"clip"})}function G(e){e.classList.remove("show"),qt(e)}function Ht(){window.scroll({top:0,behavior:"smooth"})}function Mt(e){const t=e.querySelector(".header-title");t.classList.add("header-title__xl"),t.textContent="Готово!"}function ze(e,t){return function(){return e.apply(t,arguments)}}const{toString:It}=Object.prototype,{getPrototypeOf:be}=Object,Y=(e=>t=>{const n=It.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>Y(t)===e),Q=e=>t=>typeof t===e,{isArray:B}=Array,j=Q("undefined");function zt(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const $e=R("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&$e(e.buffer),t}const Jt=Q("string"),E=Q("function"),Je=Q("number"),Z=e=>e!==null&&typeof e=="object",Vt=e=>e===!0||e===!1,$=e=>{if(Y(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Wt=R("Date"),Kt=R("File"),Xt=R("Blob"),Gt=R("FileList"),Yt=e=>Z(e)&&E(e.pipe),Qt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=Y(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Zt=R("URLSearchParams"),[en,tn,nn,sn]=["ReadableStream","Request","Response","Headers"].map(R),rn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),B(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(s=0;s<a;s++)l=i[s],t.call(null,e[l],l,e)}}function Ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const We=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ke=e=>!j(e)&&e!==We;function oe(){const{caseless:e}=Ke(this)&&this||{},t={},n=(s,r)=>{const i=e&&Ve(t,r)||r;$(t[i])&&$(s)?t[i]=oe(t[i],s):$(s)?t[i]=oe({},s):B(s)?t[i]=s.slice():t[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&H(arguments[s],n);return t}const an=(e,t,n,{allOwnKeys:s}={})=>(H(t,(r,i)=>{n&&E(r)?e[i]=ze(r,n):e[i]=r},{allOwnKeys:s}),e),on=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ln=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},cn=(e,t,n,s)=>{let r,i,a;const l={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)a=r[i],(!s||s(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&be(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},un=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},fn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),pn=(e,t)=>{const s=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=s.next())&&!r.done;){const i=r.value;t.call(e,i[0],i[1])}},hn=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},mn=R("HTMLFormElement"),bn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yn=R("RegExp"),Xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};H(n,(r,i)=>{let a;(a=t(r,i,e))!==!1&&(s[i]=a||r)}),Object.defineProperties(e,s)},vn=e=>{Xe(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=e[n];if(E(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gn=(e,t)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return B(e)?s(e):s(String(e).split(t)),n},wn=()=>{},_n=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",ke="0123456789",Ge={DIGIT:ke,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+ke},xn=(e=16,t=Ge.ALPHA_DIGIT)=>{let n="";const{length:s}=t;for(;e--;)n+=t[Math.random()*s|0];return n};function En(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Sn=e=>{const t=new Array(10),n=(s,r)=>{if(Z(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[r]=s;const i=B(s)?[]:{};return H(s,(a,l)=>{const u=n(a,r+1);!j(u)&&(i[l]=u)}),t[r]=void 0,i}}return s};return n(e,0)},Tn=R("AsyncFunction"),Rn=e=>e&&(Z(e)||E(e))&&E(e.then)&&E(e.catch),o={isArray:B,isArrayBuffer:$e,isBuffer:zt,isFormData:Qt,isArrayBufferView:$t,isString:Jt,isNumber:Je,isBoolean:Vt,isObject:Z,isPlainObject:$,isReadableStream:en,isRequest:tn,isResponse:nn,isHeaders:sn,isUndefined:j,isDate:Wt,isFile:Kt,isBlob:Xt,isRegExp:yn,isFunction:E,isStream:Yt,isURLSearchParams:Zt,isTypedArray:fn,isFileList:Gt,forEach:H,merge:oe,extend:an,trim:rn,stripBOM:on,inherits:ln,toFlatObject:cn,kindOf:Y,kindOfTest:R,endsWith:dn,toArray:un,forEachEntry:pn,matchAll:hn,isHTMLForm:mn,hasOwnProperty:Oe,hasOwnProp:Oe,reduceDescriptors:Xe,freezeMethods:vn,toObjectSet:gn,toCamelCase:bn,noop:wn,toFiniteNumber:_n,findKey:Ve,global:We,isContextDefined:Ke,ALPHABET:Ge,generateString:xn,isSpecCompliantForm:En,toJSONObject:Sn,isAsyncFn:Tn,isThenable:Rn};function h(e,t,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}o.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ye=h.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qe[e]={value:e}});Object.defineProperties(h,Qe);Object.defineProperty(Ye,"isAxiosError",{value:!0});h.from=(e,t,n,s,r,i)=>{const a=Object.create(Ye);return o.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),h.call(a,e.message,t,n,s,r),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const On=null;function le(e){return o.isPlainObject(e)||o.isArray(e)}function Ze(e){return o.endsWith(e,"[]")?e.slice(0,-2):e}function Le(e,t,n){return e?e.concat(t).map(function(r,i){return r=Ze(r),!n&&i?"["+r+"]":r}).join(n?".":""):t}function kn(e){return o.isArray(e)&&!e.some(le)}const Ln=o.toFlatObject(o,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!o.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=o.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!o.isUndefined(w[m])});const s=n.metaTokens,r=n.visitor||c,i=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&o.isSpecCompliantForm(t);if(!o.isFunction(r))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(o.isDate(f))return f.toISOString();if(!u&&o.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return o.isArrayBuffer(f)||o.isTypedArray(f)?u&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function c(f,m,w){let _=f;if(f&&!w&&typeof f=="object"){if(o.endsWith(m,"{}"))m=s?m:m.slice(0,-2),f=JSON.stringify(f);else if(o.isArray(f)&&kn(f)||(o.isFileList(f)||o.endsWith(m,"[]"))&&(_=o.toArray(f)))return m=Ze(m),_.forEach(function(v,D){!(o.isUndefined(v)||v===null)&&t.append(a===!0?Le([m],D,i):a===null?m:m+"[]",d(v))}),!1}return le(f)?!0:(t.append(Le(w,m,i),d(f)),!1)}const p=[],y=Object.assign(Ln,{defaultVisitor:c,convertValue:d,isVisitable:le});function b(f,m){if(!o.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(f),o.forEach(f,function(_,O){(!(o.isUndefined(_)||_===null)&&r.call(t,_,o.isString(O)?O.trim():O,m,y))===!0&&b(_,m?m.concat(O):[O])}),p.pop()}}if(!o.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function ye(e,t){this._pairs=[],e&&ee(e,this,t)}const et=ye.prototype;et.append=function(t,n){this._pairs.push([t,n])};et.toString=function(t){const n=t?function(s){return t.call(this,s,Ae)}:Ae;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function An(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tt(e,t,n){if(!t)return e;const s=n&&n.encode||An,r=n&&n.serialize;let i;if(r?i=r(t,n):i=o.isURLSearchParams(t)?t.toString():new ye(t,n).toString(s),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Pe{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){o.forEach(this.handlers,function(s){s!==null&&t(s)})}}const nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pn=typeof URLSearchParams<"u"?URLSearchParams:ye,Cn=typeof FormData<"u"?FormData:null,Nn=typeof Blob<"u"?Blob:null,Bn={isBrowser:!0,classes:{URLSearchParams:Pn,FormData:Cn,Blob:Nn},protocols:["http","https","file","blob","url","data"]},ve=typeof window<"u"&&typeof document<"u",Fn=(e=>ve&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Dn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Un=ve&&window.location.href||"http://localhost",qn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ve,hasStandardBrowserEnv:Fn,hasStandardBrowserWebWorkerEnv:Dn,origin:Un},Symbol.toStringTag,{value:"Module"})),T={...qn,...Bn};function jn(e,t){return ee(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return T.isNode&&o.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Hn(e){return o.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mn(e){const t={},n=Object.keys(e);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],t[i]=e[i];return t}function st(e){function t(n,s,r,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),u=i>=n.length;return a=!a&&o.isArray(r)?r.length:a,u?(o.hasOwnProp(r,a)?r[a]=[r[a],s]:r[a]=s,!l):((!r[a]||!o.isObject(r[a]))&&(r[a]=[]),t(n,s,r[a],i)&&o.isArray(r[a])&&(r[a]=Mn(r[a])),!l)}if(o.isFormData(e)&&o.isFunction(e.entries)){const n={};return o.forEachEntry(e,(s,r)=>{t(Hn(s),r,n,0)}),n}return null}function In(e,t,n){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const M={transitional:nt,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=o.isObject(t);if(i&&o.isHTMLForm(t)&&(t=new FormData(t)),o.isFormData(t))return r?JSON.stringify(st(t)):t;if(o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)||o.isReadableStream(t))return t;if(o.isArrayBufferView(t))return t.buffer;if(o.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return jn(t,this.formSerializer).toString();if((l=o.isFileList(t))||s.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ee(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),In(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(o.isResponse(t)||o.isReadableStream(t))return t;if(t&&o.isString(t)&&(s&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};o.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const zn=o.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$n=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),s=a.substring(r+1).trim(),!(!n||t[n]&&zn[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t},Ce=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:o.isArray(e)?e.map(J):String(e)}function Jn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const Vn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,s,r){if(o.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!o.isString(t)){if(o.isString(s))return t.indexOf(s)!==-1;if(o.isRegExp(s))return s.test(t)}}function Wn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function Kn(e,t){const n=o.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(r,i,a){return this[s].call(this,t,r,i,a)},configurable:!0})})}class x{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function i(l,u,d){const c=U(u);if(!c)throw new Error("header name must be a non-empty string");const p=o.findKey(r,c);(!p||r[p]===void 0||d===!0||d===void 0&&r[p]!==!1)&&(r[p||u]=J(l))}const a=(l,u)=>o.forEach(l,(d,c)=>i(d,c,u));if(o.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(o.isString(t)&&(t=t.trim())&&!Vn(t))a($n(t),n);else if(o.isHeaders(t))for(const[l,u]of t.entries())i(u,l,s);else t!=null&&i(n,t,s);return this}get(t,n){if(t=U(t),t){const s=o.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return Jn(r);if(o.isFunction(n))return n.call(this,r,s);if(o.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const s=o.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||se(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function i(a){if(a=U(a),a){const l=o.findKey(s,a);l&&(!n||se(s,s[l],l,n))&&(delete s[l],r=!0)}}return o.isArray(t)?t.forEach(i):i(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!t||se(this,this[i],i,t,!0))&&(delete this[i],r=!0)}return r}normalize(t){const n=this,s={};return o.forEach(this,(r,i)=>{const a=o.findKey(s,i);if(a){n[a]=J(r),delete n[i];return}const l=t?Wn(i):String(i).trim();l!==i&&delete n[i],n[l]=J(r),s[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return o.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&o.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[Ce]=this[Ce]={accessors:{}}).accessors,r=this.prototype;function i(a){const l=U(a);s[l]||(Kn(r,a),s[l]=!0)}return o.isArray(t)?t.forEach(i):i(t),this}}x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);o.reduceDescriptors(x.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});o.freezeMethods(x);function re(e,t){const n=this||M,s=t||n,r=x.from(s.headers);let i=s.data;return o.forEach(e,function(l){i=l.call(n,i,r.normalize(),t?t.status:void 0)}),r.normalize(),i}function rt(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}o.inherits(F,h,{__CANCEL__:!0});function it(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Xn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gn(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,i=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),c=s[i];a||(a=d),n[r]=u,s[r]=d;let p=i,y=0;for(;p!==r;)y+=n[p++],p=p%e;if(r=(r+1)%e,r===i&&(i=(i+1)%e),d-a<t)return;const b=c&&d-c;return b?Math.round(y*1e3/b):void 0}}function Yn(e,t){let n=0;const s=1e3/t;let r=null;return function(){const a=this===!0,l=Date.now();if(a||l-n>s)return r&&(clearTimeout(r),r=null),n=l,e.apply(null,arguments);r||(r=setTimeout(()=>(r=null,n=Date.now(),e.apply(null,arguments)),s-(l-n)))}}const V=(e,t,n=3)=>{let s=0;const r=Gn(50,250);return Yn(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-s,d=r(u),c=a<=l;s=a;const p={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&c?(l-a)/d:void 0,event:i,lengthComputable:l!=null};p[t?"download":"upload"]=!0,e(p)},n)},Qn=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function r(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(a){const l=o.isString(a)?r(a):a;return l.protocol===s.protocol&&l.host===s.host}}():function(){return function(){return!0}}(),Zn=T.hasStandardBrowserEnv?{write(e,t,n,s,r,i){const a=[e+"="+encodeURIComponent(t)];o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(s)&&a.push("path="+s),o.isString(r)&&a.push("domain="+r),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function es(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ts(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function at(e,t){return e&&!es(t)?ts(e,t):t}const Ne=e=>e instanceof x?{...e}:e;function C(e,t){t=t||{};const n={};function s(d,c,p){return o.isPlainObject(d)&&o.isPlainObject(c)?o.merge.call({caseless:p},d,c):o.isPlainObject(c)?o.merge({},c):o.isArray(c)?c.slice():c}function r(d,c,p){if(o.isUndefined(c)){if(!o.isUndefined(d))return s(void 0,d,p)}else return s(d,c,p)}function i(d,c){if(!o.isUndefined(c))return s(void 0,c)}function a(d,c){if(o.isUndefined(c)){if(!o.isUndefined(d))return s(void 0,d)}else return s(void 0,c)}function l(d,c,p){if(p in t)return s(d,c);if(p in e)return s(void 0,d)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,c)=>r(Ne(d),Ne(c),!0)};return o.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=u[c]||r,y=p(e[c],t[c],c);o.isUndefined(y)&&p!==l||(n[c]=y)}),n}const ot=e=>{const t=C({},e);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:a,auth:l}=t;t.headers=a=x.from(a),t.url=tt(at(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(o.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((u=a.getContentType())!==!1){const[d,...c]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];a.setContentType([d||"multipart/form-data",...c].join("; "))}}if(T.hasStandardBrowserEnv&&(s&&o.isFunction(s)&&(s=s(t)),s||s!==!1&&Qn(t.url))){const d=r&&i&&Zn.read(i);d&&a.set(r,d)}return t},ns=typeof XMLHttpRequest<"u",ss=ns&&function(e){return new Promise(function(n,s){const r=ot(e);let i=r.data;const a=x.from(r.headers).normalize();let{responseType:l}=r,u;function d(){r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let c=new XMLHttpRequest;c.open(r.method.toUpperCase(),r.url,!0),c.timeout=r.timeout;function p(){if(!c)return;const b=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:b,config:e,request:c};it(function(_){n(_),d()},function(_){s(_),d()},m),c=null}"onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(s(new h("Request aborted",h.ECONNABORTED,r,c)),c=null)},c.onerror=function(){s(new h("Network Error",h.ERR_NETWORK,r,c)),c=null},c.ontimeout=function(){let f=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const m=r.transitional||nt;r.timeoutErrorMessage&&(f=r.timeoutErrorMessage),s(new h(f,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,r,c)),c=null},i===void 0&&a.setContentType(null),"setRequestHeader"in c&&o.forEach(a.toJSON(),function(f,m){c.setRequestHeader(m,f)}),o.isUndefined(r.withCredentials)||(c.withCredentials=!!r.withCredentials),l&&l!=="json"&&(c.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&c.addEventListener("progress",V(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",V(r.onUploadProgress)),(r.cancelToken||r.signal)&&(u=b=>{c&&(s(!b||b.type?new F(null,e,c):b),c.abort(),c=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const y=Xn(r.url);if(y&&T.protocols.indexOf(y)===-1){s(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}c.send(i||null)})},rs=(e,t)=>{let n=new AbortController,s;const r=function(u){if(!s){s=!0,a();const d=u instanceof Error?u:this.reason;n.abort(d instanceof h?d:new F(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{r(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",r):u.unsubscribe(r))}),e=null)};e.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",r));const{signal:l}=n;return l.unsubscribe=a,[l,()=>{i&&clearTimeout(i),i=null}]},is=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let s=0,r;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},as=async function*(e,t,n){for await(const s of e)yield*is(ArrayBuffer.isView(s)?s:await n(String(s)),t)},Be=(e,t,n,s,r)=>{const i=as(e,t,r);let a=0;return new ReadableStream({type:"bytes",async pull(l){const{done:u,value:d}=await i.next();if(u){l.close(),s();return}let c=d.byteLength;n&&n(a+=c),l.enqueue(new Uint8Array(d))},cancel(l){return s(l),i.return()}},{highWaterMark:2})},Fe=(e,t)=>{const n=e!=null;return s=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:s}))},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",lt=te&&typeof ReadableStream=="function",ce=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),os=lt&&(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),De=64*1024,de=lt&&!!(()=>{try{return o.isReadableStream(new Response("").body)}catch{}})(),W={stream:de&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=o.isFunction(e[t])?n=>n[t]():(n,s)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,s)})})})(new Response);const ls=async e=>{if(e==null)return 0;if(o.isBlob(e))return e.size;if(o.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(o.isArrayBufferView(e))return e.byteLength;if(o.isURLSearchParams(e)&&(e=e+""),o.isString(e))return(await ce(e)).byteLength},cs=async(e,t)=>{const n=o.toFiniteNumber(e.getContentLength());return n??ls(t)},ds=te&&(async e=>{let{url:t,method:n,data:s,signal:r,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:u,responseType:d,headers:c,withCredentials:p="same-origin",fetchOptions:y}=ot(e);d=d?(d+"").toLowerCase():"text";let[b,f]=r||i||a?rs([r,i],a):[],m,w;const _=()=>{!m&&setTimeout(()=>{b&&b.unsubscribe()}),m=!0};let O;try{if(u&&os&&n!=="get"&&n!=="head"&&(O=await cs(c,s))!==0){let k=new Request(t,{method:"POST",body:s,duplex:"half"}),N;o.isFormData(s)&&(N=k.headers.get("content-type"))&&c.setContentType(N),k.body&&(s=Be(k.body,De,Fe(O,V(u)),null,ce))}o.isString(p)||(p=p?"cors":"omit"),w=new Request(t,{...y,signal:b,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:s,duplex:"half",withCredentials:p});let v=await fetch(w);const D=de&&(d==="stream"||d==="response");if(de&&(l||D)){const k={};["status","statusText","headers"].forEach(Re=>{k[Re]=v[Re]});const N=o.toFiniteNumber(v.headers.get("content-length"));v=new Response(Be(v.body,De,l&&Fe(N,V(l,!0)),D&&_,ce),k)}d=d||"text";let gt=await W[o.findKey(W,d)||"text"](v,e);return!D&&_(),f&&f(),await new Promise((k,N)=>{it(k,N,{data:gt,headers:x.from(v.headers),status:v.status,statusText:v.statusText,config:e,request:w})})}catch(v){throw _(),v&&v.name==="TypeError"&&/fetch/i.test(v.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,w),{cause:v.cause||v}):h.from(v,v&&v.code,e,w)}}),ue={http:On,xhr:ss,fetch:ds};o.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ue=e=>`- ${e}`,us=e=>o.isFunction(e)||e===null||e===!1,ct={getAdapter:e=>{e=o.isArray(e)?e:[e];const{length:t}=e;let n,s;const r={};for(let i=0;i<t;i++){n=e[i];let a;if(s=n,!us(n)&&(s=ue[(a=String(n)).toLowerCase()],s===void 0))throw new h(`Unknown adapter '${a}'`);if(s)break;r[a||"#"+i]=s}if(!s){const i=Object.entries(r).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Ue).join(`
`):" "+Ue(i[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s},adapters:ue};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function qe(e){return ie(e),e.headers=x.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ct.getAdapter(e.adapter||M.adapter)(e).then(function(s){return ie(e),s.data=re.call(e,e.transformResponse,s),s.headers=x.from(s.headers),s},function(s){return rt(s)||(ie(e),s&&s.response&&(s.response.data=re.call(e,e.transformResponse,s.response),s.response.headers=x.from(s.response.headers))),Promise.reject(s)})}const dt="1.7.2",ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const je={};ge.transitional=function(t,n,s){function r(i,a){return"[Axios v"+dt+"] Transitional option '"+i+"'"+a+(s?". "+s:"")}return(i,a,l)=>{if(t===!1)throw new h(r(a," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!je[a]&&(je[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function fs(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const i=s[r],a=t[i];if(a){const l=e[i],u=l===void 0||a(l,i,e);if(u!==!0)throw new h("option "+i+" must be "+u,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const fe={assertOptions:fs,validators:ge},L=fe.validators;class A{constructor(t){this.defaults=t,this.interceptors={request:new Pe,response:new Pe}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&fe.assertOptions(s,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),r!=null&&(o.isFunction(r)?n.paramsSerializer={serialize:r}:fe.assertOptions(r,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&o.merge(i.common,i[n.method]);i&&o.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=x.concat(a,i);const l=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const d=[];this.interceptors.response.forEach(function(m){d.push(m.fulfilled,m.rejected)});let c,p=0,y;if(!u){const f=[qe.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,d),y=f.length,c=Promise.resolve(n);p<y;)c=c.then(f[p++],f[p++]);return c}y=l.length;let b=n;for(p=0;p<y;){const f=l[p++],m=l[p++];try{b=f(b)}catch(w){m.call(this,w);break}}try{c=qe.call(this,b)}catch(f){return Promise.reject(f)}for(p=0,y=d.length;p<y;)c=c.then(d[p++],d[p++]);return c}getUri(t){t=C(this.defaults,t);const n=at(t.baseURL,t.url);return tt(n,t.params,t.paramsSerializer)}}o.forEach(["delete","get","head","options"],function(t){A.prototype[t]=function(n,s){return this.request(C(s||{},{method:t,url:n,data:(s||{}).data}))}});o.forEach(["post","put","patch"],function(t){function n(s){return function(i,a,l){return this.request(C(l||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}A.prototype[t]=n(),A.prototype[t+"Form"]=n(!0)});class we{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const a=new Promise(l=>{s.subscribe(l),i=l}).then(r);return a.cancel=function(){s.unsubscribe(i)},a},t(function(i,a,l){s.reason||(s.reason=new F(i,a,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new we(function(r){t=r}),cancel:t}}}function ps(e){return function(n){return e.apply(null,n)}}function hs(e){return o.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function ut(e){const t=new A(e),n=ze(A.prototype.request,t);return o.extend(n,A.prototype,t,{allOwnKeys:!0}),o.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return ut(C(e,r))},n}const g=ut(M);g.Axios=A;g.CanceledError=F;g.CancelToken=we;g.isCancel=rt;g.VERSION=dt;g.toFormData=ee;g.AxiosError=h;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=ps;g.isAxiosError=hs;g.mergeConfig=C;g.AxiosHeaders=x;g.formToJSON=e=>st(o.isHTMLForm(e)?new FormData(e):e);g.getAdapter=ct.getAdapter;g.HttpStatusCode=pe;g.default=g;async function ft(e){const{data:t}=await g(e);return t}function pt(e){return`
            <div>
              <span class="text-white">Name - ${e.name}</span>
            </div>
            <div>
              <span class="text-white">Birth year - ${e.birth_year}</span>
            </div>
            <div>
              <span class="text-white">Gender- ${e.gender}</span>
            </div>
            <div>
              <span class="text-white">Eye color- ${e.eye_color}</span>
            </div>
          `}function ht(e,t,n){const s=e/t*100;n.style.width=`${s}%`}function mt(e){e.classList.add("hidden")}function ms(e){e.classList.remove("hidden")}function bs({event:e,sitePage:t,testPage:n,progress:s,buttonScrollTop:r,headerContent:i,sidebar:a}){e.preventDefault(),t.classList.remove("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),ms(s),i.classList.add("hidden"),G(a)}function ys({event:e,CURRENT_TEST:t,allTests:n,startTest:s,sidebar:r,sideBarInfo:i}){if(e.preventDefault(),t===n)s(),G(r);else{const a=i.textContent;i.innerHTML="для начала пройдите тест",setTimeout(()=>{i.innerHTML=a},2e3)}}const bt="https://swapi.dev/api/people/1/",vs=document.querySelector(".burger"),I=document.querySelector(".sidebar"),gs=document.querySelector(".button-close"),_e=document.querySelector(".button-scroll__top"),yt=document.querySelector(".site-page"),xe=document.querySelector(".test_page"),Ee=document.querySelector(".progress"),vt=document.querySelector(".progress-success"),q=document.querySelector(".test-first"),Se=document.querySelector(".header-content"),ws=document.querySelector('.sidebar-menu__link[data-side="home"]'),He=document.querySelector('.sidebar-menu__link[data-side="info"]'),_s=document.querySelector('.sidebar-menu__link[data-side="test"]');let S=0;const P=[wt,_t,xt,Et,St,Tt,Rt,Ot,kt,Lt,At,Pt,Ct],he=P.length-2;function Te(){if(yt.classList.add("hidden"),xe.classList.remove("hidden"),_e.classList.add("hidden"),q.innerHTML=P[S],Me(q),Se.classList.remove("hidden"),ht(S,he,vt),S===P.length-1){mt(Ee);const e=document.querySelector(".result-phone"),t=document.querySelector(".result-markup");e.addEventListener("click",async()=>{t.innerHTML=`
        <span class="text-white">Loading...</span>
      `;try{const n=await ft(bt);console.log(n),t.innerHTML=pt(n)}catch(n){t.innerHTML=`
          <span>${n.message}</span>
        `}})}}function xs(e){e.target.classList.contains("button-start-test")&&Te()}function Es(e){e.target.classList.contains("button")&&(e.preventDefault(),S<P.length-1&&(S++,ht(S,he,vt),q.innerHTML=P[S],Me(q)),S===he&&setTimeout(()=>{S++,q.innerHTML=P[S],mt(Ee),Mt(Se);const t=document.querySelector(".result-phone"),n=document.querySelector(".result-markup");t.addEventListener("click",async()=>{n.innerHTML=`
          <span class="text-white">Loading...</span>
        `;try{const s=await ft(bt);console.log(s),n.innerHTML=pt(s)}catch(s){n.innerHTML=`
            <span>${s.message}</span>
          `}})},2e3))}vs.addEventListener("click",()=>jt(I));gs.addEventListener("click",()=>G(I));_e.addEventListener("click",Ht);document.body.addEventListener("click",xs);xe.addEventListener("click",Es);ws.addEventListener("click",e=>bs({event:e,sitePage:yt,testPage:xe,progress:Ee,buttonScrollTop:_e,headerContent:Se,sidebar:I}));He.addEventListener("click",e=>ys({event:e,CURRENT_TEST:S,allTests:P.length-1,startTest:Te,sidebar:I,sideBarInfo:He}));_s.addEventListener("click",e=>{e.preventDefault(),Te(),G(I)});
