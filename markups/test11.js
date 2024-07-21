export const test11 = `
<div class="test-content">
    <h2 class="text-white text-center test-title">
        Вставьте подходящее число
    </h2>

        <div class="flex flex-col center gap-2">
            <div>
                <img src="${
                  import.meta.env.VITE_BASE_PATH
                }/tests/test11.png" alt="test11" />
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
`;
