"use strict";

(() => {
  const form = document.querySelector("#product-form");
  if (!form) return;

  const sizeError = document.querySelector("#size-error");
  const bagCount = document.querySelector("#bag-count");
  const bagStatus = document.querySelector("#bag-status");
  const bagItems = document.querySelector("#bag-items");
  const clearBag = document.querySelector("#clear-bag");
  const sizes = ["S", "M", "L", "XL"];
  const bag = [];

  const renderBag = () => {
    bagCount.textContent = String(bag.length);
    clearBag.disabled = bag.length === 0;
    bagItems.replaceChildren();
    sizes.forEach((size) => {
      const quantity = bag.filter((item) => item === size).length;
      if (!quantity) return;
      const item = document.createElement("li");
      item.textContent = `White T-shirt · Size ${size} · Quantity ${quantity}`;
      bagItems.append(item);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="size"]:checked');
    if (!selected || !sizes.includes(selected.value)) {
      sizeError.hidden = false;
      form.querySelectorAll('input[name="size"]').forEach((input) => {
        input.setAttribute("aria-invalid", "true");
      });
      form.querySelector('input[name="size"]').focus();
      return;
    }

    sizeError.hidden = true;
    bag.push(selected.value);
    renderBag();
    const itemWord = bag.length === 1 ? "item" : "items";
    bagStatus.textContent = `Added a white T-shirt in size ${selected.value}. Your demo bag has ${bag.length} ${itemWord}.`;
  });

  form.addEventListener("change", () => {
    sizeError.hidden = true;
    form.querySelectorAll('input[name="size"]').forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  });

  clearBag.addEventListener("click", () => {
    bag.length = 0;
    renderBag();
    bagStatus.textContent =
      "Your demo bag is empty. Choose a size to try it again.";
    form.querySelector('input[name="size"]:checked')?.focus();
  });
})();

// An optional, reversible styling choice; no storage or purchase requirement.
(() => {
  const choices = document.querySelectorAll("[data-outfit]");
  const result = document.querySelector("#outfit-result");
  const next = document.querySelector("#outfit-next");
  const reset = document.querySelector("#reset-outfit");
  if (!result || !next || !reset) return;
  const suggestions = {
    simple:
      "You chose to keep it simple. Start with the white tee, your everyday jeans and familiar shoes.",
    layer:
      "You chose to add a layer. Start with the white tee and an open shirt or jacket you already own.",
  };
  choices.forEach((button) => {
    button.addEventListener("click", () => {
      choices.forEach((choice) => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
      result.textContent = suggestions[button.dataset.outfit];
      next.hidden = false;
      reset.hidden = false;
    });
  });
  reset.addEventListener("click", () => {
    choices.forEach((choice) => choice.setAttribute("aria-pressed", "false"));
    result.textContent =
      "No preference needed. All three ideas are yours to try.";
    next.hidden = true;
    reset.hidden = true;
    choices[0]?.focus();
  });
})();
