/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/

export function createButton() {
    const customBtn = document.createElement('button');
    customBtn.textContent = 'Удали меня';

    customBtn.addEventListener('click', function () {
        customBtn.remove();
    });

    document.body.appendChild(customBtn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/

export function createArrList(arr) {
    const listRoot = document.createElement('ul');

    for (let idx = 0; idx < arr.length; idx++) {
        const singleItem = document.createElement('li');
        singleItem.textContent = arr[idx];

        singleItem.addEventListener('mouseover', function () {
            singleItem.setAttribute('title', arr[idx]);
        });

        listRoot.appendChild(singleItem);
    }

    document.body.appendChild(listRoot);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/

export function createLink() {
    const webLink = document.createElement('a');
    webLink.href = 'https://tensor.ru/';
    webLink.textContent = 'tensor';

    let clicksDone = 0;

    webLink.addEventListener('click', function (event) {
        if (clicksDone === 0) {
            event.preventDefault();
            webLink.textContent =
                webLink.textContent + ' ' + webLink.getAttribute('href');
            clicksDone++;
        }
    });

    document.body.appendChild(webLink);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/

export function createList() {
    const targetUl = document.createElement('ul');
    const defaultLi = document.createElement('li');
    defaultLi.textContent = 'Пункт';

    defaultLi.addEventListener('click', function () {
        defaultLi.textContent += '!';
    });

    targetUl.appendChild(defaultLi);

    const actionBtn = document.createElement('button');
    actionBtn.textContent = 'Добавить пункт';

    actionBtn.addEventListener('click', function () {
        const freshLi = document.createElement('li');
        freshLi.textContent = 'Пункт';

        freshLi.addEventListener('click', function () {
            freshLi.textContent += '!';
        });

        targetUl.appendChild(freshLi);
    });

    document.body.appendChild(targetUl);
    document.body.appendChild(actionBtn);
}
