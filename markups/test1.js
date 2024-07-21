export const test1 = `
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
`;
