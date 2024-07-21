export const test2 = `
        
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
        
`;
