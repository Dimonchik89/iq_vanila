function createMarkup(data) {
  return `
            <div>
              <span class="text-white">Name - ${data.name}</span>
            </div>
            <div>
              <span class="text-white">Birth year - ${data.birth_year}</span>
            </div>
            <div>
              <span class="text-white">Gender- ${data.gender}</span>
            </div>
            <div>
              <span class="text-white">Eye color- ${data.eye_color}</span>
            </div>
          `;
}

export { createMarkup };
