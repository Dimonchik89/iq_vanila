export const test8 = `
    <div class="test-content">
    <h2 class="text-white text-center test-title">
        Выберите правильную фигуру из четырёх пронумерованных.
    </h2>

        <div class="flex flex-col center gap-2">
            <div>
                <img src="${
                  import.meta.env.VITE_BASE_PATH
                }/tests/test8.png" alt="test8" />
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
`;
