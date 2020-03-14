export class StateComponent {
  constructor(id) {
    this.isFullText = false;
    this.$el = document.getElementById(id);
  }

  init() {
    const text = getTemplate();
    this.$el.insertAdjacentHTML(`afterbegin`, text);
    this.$el.addEventListener(`click`, onTextClickHandler.bind(this));
  }

}

function getTemplate() {
  return `
    <p class='entry-text'> Это вступительный текст. Всего одна или две строки 
    <div class="hideText">
     Код не идеальный, но всё работает исправно. Текст показывается, скрывается и наоборот. И всё же, чтобы нам было проще перейти к React, давайте чуть-чуть улучшим код.
    </div>
    </p>
  `;
}

function onTextClickHandler(event) {
  // const div = event.target.getElementByTagName(`div`);
  // div.classList.remove(`hideText`);
  // eslint-disable-next-line no-console
  if (event.target.nextSibling.classList.contains(`hideText`)) {
    event.target.nextSibling.classList.remove(`hideText`);
  } else {
    event.target.nextSibling.classList.add(`hideText`);
  }

  // console.log(event.target.nextSibling);
}

