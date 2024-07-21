export const test10 = `
    <div class="test-content">
    <h2 class="text-white text-center test-title__sm">
        Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: 
    </h2>

        <div class="flex flex-col center gap-08">
            <div>
                <img src="${
                  import.meta.env.VITE_BASE_PATH
                }/tests/test10.png" alt="test10" />
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
`;
