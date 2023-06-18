// 100 out of 100

function solve() {

  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");
  const partInfoUl = document.querySelector(".info-list");
  const confirmListUl = document.querySelector(".confirm-list");

  let carModelInputValue = "";
  let carYearInputValue = "";
  let partNameInputValue = "";
  let partNumberInputValue = "";
  let conditionInputValue = "";

  nextBtn.addEventListener("click", takeInputValue);

  function takeInputValue(e) {
    e.preventDefault();
    if (validateInput()) {
      carModelInputValue = carModelInput.value.trim();
      carYearInputValue = carYearInput.value.trim();
      partNameInputValue = partNameInput.value.trim();
      partNumberInputValue = partNumberInput.value.trim();
      conditionInputValue = conditionInput.value.trim();
      createPartInfoElement();
    }
  }

  function validateInput() {
    const carYear = Number(carYearInput.value);
    const currentYear = new Date().getFullYear();
    return (
      carModelInput.value.trim() !== "" &&
      carYearInput.value.trim() !== "" &&
      partNameInput.value.trim() !== "" &&
      partNumberInput.value.trim() !== "" &&
      conditionInput.value.trim() !== "" &&
      carYear >= 1980 &&
      carYear <= currentYear
    );
  }

  function createPartInfoElement() {
    const partContentLiEl = document.createElement("li");
    partContentLiEl.classList.add("part-content");

    const articleEl = document.createElement("article");

    const carModelPEl = createParagraphElement(`Car Model: ${carModelInputValue}`);
    const carYearPEl = createParagraphElement(`Car Year: ${carYearInputValue}`);
    const partNamePEl = createParagraphElement(`Part Name: ${partNameInputValue}`);
    const partNumberPEl = createParagraphElement(`Part Number: ${partNumberInputValue}`);
    const conditionPEl = createParagraphElement(`Condition: ${conditionInputValue}`);

    const editBtnEl = createButtonElement("Edit", "edit-btn");
    const continueBtnEl = createButtonElement("Continue", "continue-btn");

    editBtnEl.addEventListener("click", editBtn);
    continueBtnEl.addEventListener("click", continueBtn);

    articleEl.appendChild(carModelPEl);
    articleEl.appendChild(carYearPEl);
    articleEl.appendChild(partNamePEl);
    articleEl.appendChild(partNumberPEl);
    articleEl.appendChild(conditionPEl);

    partContentLiEl.appendChild(articleEl);
    partContentLiEl.appendChild(editBtnEl);
    partContentLiEl.appendChild(continueBtnEl);

    partInfoUl.appendChild(partContentLiEl);

    clearInput();
    nextBtn.disabled = true;
  }

  function createParagraphElement(text) {
    const pEl = document.createElement("p");
    pEl.textContent = text;
    return pEl;
  }

  function createButtonElement(text, className) {
    const btnEl = document.createElement("button");
    btnEl.textContent = text;
    btnEl.classList.add(className);
    return btnEl;
  }

  function clearInput() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }

  function editBtn() {
    carModelInput.value = carModelInputValue;
    carYearInput.value = carYearInputValue;
    partNameInput.value = partNameInputValue;
    partNumberInput.value = partNumberInputValue;
    conditionInput.value = conditionInputValue;

    const removableLi = this.parentNode;
    removableLi.remove();
    nextBtn.disabled = false;
  }

  function continueBtn() {
    const removableLi = this.parentNode;
    const editBtnRemove = removableLi.querySelector(".edit-btn");
    const continueBtnRemove = removableLi.querySelector(".continue-btn");
    editBtnRemove.remove();
    continueBtnRemove.remove();

    const confirmBtn = createButtonElement("Confirm", "confirm-btn");
    const cancelBtn = createButtonElement("Cancel", "cancel-btn");

    confirmBtn.addEventListener("click", () => {
      const img = document.getElementById("complete-img");
      const textP = document.getElementById("complete-text");
      textP.textContent = "Part is Ordered!";
      img.style.visibility = "visible";

      removableLi.remove();
      nextBtn.disabled = false;
    });

    cancelBtn.addEventListener("click", () => {
      removableLi.remove();
      nextBtn.disabled = false;
    });

    removableLi.appendChild(confirmBtn);
    removableLi.appendChild(cancelBtn);

    confirmListUl.appendChild(removableLi);
  }
}


// 65 out of 100
// previous try
/*
function solve() {
  -- Taking DOM Elements.
  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");
  const partInfoUl = document.getElementsByClassName("info-list");
  const confirmListUl = document.getElementsByClassName("confirm-list");
 
  -- Input Value.
 
  let carModelInputValue = "";
  let carYearInputValue = "";
  let partNameInputValue = "";
  let partNumberInputValue = "";
  let conditionInputValue = "";
 
  nextBtn.addEventListener("click", takeInputValue);
 
  -- Set Input Value.
  function takeInputValue(e) {
    e.preventDefault();
    if (validateInput()) {
      carModelInputValue = carModelInput.value;
      carYearInputValue = carYearInput.value;
      partNameInputValue = partNameInput.value;
      partNumberInputValue = partNumberInput.value;
      conditionInputValue = conditionInput.value;
      nextBtnValue = nextBtn.value;
    }
    createPartInfoElement();
  }
 
  -- Validate Input data.
  function validateInput() {
    if (
      carModelInput.value !== "" &&
      carYearInput.value !== "" &&
      partNameInput.value !== "" &&
      conditionInput.value !== "" &&
      partNumberInput.value !== "" &&
      Number(carYearInput.value) >= 1980 &&
      Number(carYearInput.value) <= 2023
    ) {
      return true;
    }
 
    return false;
  }
 
  -- Creating HTML element and attached to DOM three.
  function createPartInfoElement(e) {
    -- Creating HTML elements
    const partContentLiEl = document.createElement("li");
    const articleEl = document.createElement("article");
    const carModelPEl = document.createElement("p");
    const carYearPEl = document.createElement("p");
    const partNamePEl = document.createElement("p");
    const partNumberPEl = document.createElement("p");
    const conditionPEl = document.createElement("p"); // need to insert text Condition:
    const editBtnEl = document.createElement("button");
    const continueBtnEl = document.createElement("button");
 
    -- Insert textContent to HTML elements.
    partContentLiEl.classList.add("part-content");
    carModelPEl.textContent = `Car Model: ${carModelInputValue}`;
    carYearPEl.textContent = `Car Year: ${carModelInputValue}`;
    partNamePEl.textContent = `Part Name: ${partNameInputValue}`;
    partNumberPEl.textContent = `Part Number: ${partNumberInputValue}`;
    conditionPEl.textContent = `Condition: ${conditionInputValue}`;
    editBtnEl.textContent = "Edit";
    editBtnEl.classList.add("edit-btn");
    continueBtnEl.textContent = "Continue";
    continueBtnEl.classList.add("continue-btn");
 
    -- Add Event Listener to two buttons.
    editBtnEl.addEventListener("click", editBtn);
    continueBtnEl.addEventListener("click", continueBtn);
 
    -- Making HTML three.
    partContentLiEl.appendChild(articleEl);
    articleEl.appendChild(carModelPEl);
    articleEl.appendChild(carYearPEl);
    articleEl.appendChild(partNamePEl);
    articleEl.appendChild(partNumberPEl);
    articleEl.appendChild(conditionPEl);
    partContentLiEl.appendChild(editBtnEl);
    partContentLiEl.appendChild(continueBtnEl);
 
    -- Attach new HTML three to DOM three.
    partInfoUl[0].appendChild(partContentLiEl);
 
    clearInput();
    nextBtn.disabled = true;
  }
 
  -- Clear the submit form.
  function clearInput() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }
 
  -- Edit button.
  function editBtn() {
    carModelInput.value = carModelInputValue;
    carYearInput.value = carYearInputValue;
    partNameInput.value = partNameInputValue;
    partNumberInput.value = partNumberInputValue;
    conditionInput.value = conditionInputValue;
    const removableLi = document.querySelector(".part-content");
    removableLi.remove();
    nextBtn.disabled = false;
  }
 
  function continueBtn() {
    const removableLi = document.querySelector(".part-content");
    const editBtnRemove = document.querySelector(".edit-btn");
    const continueBtnRemove = document.querySelector(".continue-btn");
    editBtnRemove.remove();
    continueBtnRemove.remove();
    removableLi.remove();
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    removableLi.appendChild(confirmBtn);
    removableLi.appendChild(cancelBtn);
 
    confirmBtn.addEventListener("click", () => {
      removableLi.remove();
      const img = document.getElementById("complete-img");
      const textP = document.getElementById("complete-text");
      textP.textContent = "Part is Ordered!";
 
      img.style.visibility = "visible";
      nextBtn.disabled = false;
    });
 
    cancelBtn.addEventListener("click", () => {
      removableLi.remove();
      nextBtn.disabled = false;
    });
 
    confirmListUl[0].appendChild(removableLi);
  }
}
*/

/* 
------------------------------------------------------------------------------------------------------------------------------
another logic: 
function solve() {
  const carModelInput = document.getElementById('car-model');
  const carYearInput = document.getElementById('car-year');
  const partNameInput = document.getElementById('part-name');
  const partNumberInput = document.getElementById('part-number');
  const conditionSelect = document.getElementById('condition');
  const nextButton = document.getElementById('next-btn');
  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');
  const completeImg = document.getElementById('complete-img');
  const completeText = document.getElementById('complete-text');
 
  let carModelValue = '';
  let carYearValue = '';
  let partNameValue = '';
  let partNumberValue = '';
  let conditionValue = '';
 
  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
 
    carModelValue = carModelInput.value.trim();
    carYearValue = carYearInput.value.trim();
    partNameValue = partNameInput.value.trim();
    partNumberValue = partNumberInput.value.trim();
    conditionValue = conditionSelect.value;
 
    if (
      carModelValue === '' ||
      carYearValue === '' ||
      partNameValue === '' ||
      partNumberValue === '' ||
      conditionValue === '' ||
      carYearValue < 1980 ||
      carYearValue > 2023
    ) {
      return;
    }
 
    completeImg.style.visibility = 'hidden';
    completeText.textContent = '';
 
    const listItem = document.createElement('li');
    listItem.classList.add('part-content');
 
    listItem.innerHTML = `
      <article>
        <p>Car Model: ${carModelValue}</p>
        <p>Car Year: ${carYearValue}</p>
        <p>Part Name: ${partNameValue}</p>
        <p>Part Number: ${partNumberValue}</p>
        <p>Condition: ${conditionValue}</p>
      </article>
      <button class='edit-btn'>Edit</button>
      <button class='continue-btn'>Continue</button>`;
 
    let editButton = listItem.getElementsByClassName('edit-btn')[0];
    let continueButton = listItem.getElementsByClassName('continue-btn')[0];
 
    infoList.appendChild(listItem);
 
    carModelInput.value = '';
    carYearInput.value = '';
    partNameInput.value = '';
    partNumberInput.value = '';
    conditionSelect.value = '';
 
    nextButton.disabled = true;
 
 
    editButton.addEventListener('click', () => {
        carModelInput.value = carModelValue;
        carYearInput.value = carYearValue;
        partNameInput.value = partNameValue;
        partNumberInput.value = partNumberValue;
        conditionSelect.value = conditionValue;
 
        nextButton.disabled = false;
        listItem.remove();
    });
    const confirmListItem = document.createElement('li');
    confirmListItem.classList.add('part-content');
    confirmListItem.innerHTML = `
    <article>
      <p>Car Model: ${carModelValue}</p>
      <p>Car Year: ${carYearValue}</p>
      <p>Part Name: ${partNameValue}</p>
      <p>Part Number: ${partNumberValue}</p>
      <p>Condition: ${conditionValue}</p>
    </article>
    <button class='confirm-btn'>Confirm</button>
    <button class='cancel-btn'>Cancel</button>`;
 
    continueButton.addEventListener('click', () => {
        confirmList.appendChild(confirmListItem);
        listItem.remove();
    });
 
    let confirmButton = confirmListItem.getElementsByClassName('confirm-btn')[0];
    let cancelButton = confirmListItem.getElementsByClassName('cancel-btn')[0];
 
    confirmButton.addEventListener('click', () => {
        confirmListItem.remove();
        nextButton.disabled = false;
 
        completeImg.style.visibility = 'visible';
        completeText.textContent = 'Part is Ordered!';
    });
 
    cancelButton.addEventListener('click', () => {
        confirmListItem.remove();
        nextButton.disabled = false;
    });
  });
 
}
*/