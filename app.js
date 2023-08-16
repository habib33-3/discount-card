document.querySelector("#calculate-btn").addEventListener("click", function () {
  const originalPriceField = document.querySelector("#input-price");
  const OriginalPriceValue = originalPriceField.value;

  const discountAmountField = document.querySelector("#discount-amount");
  const discountAmountValue = discountAmountField.value;

  originalPriceField.value = "";
  discountAmountField.value = "";

  const originalPrice = document.querySelector("#original-price");

  originalPrice.innerText = OriginalPriceValue;

  const finalPrice = document.querySelector("#final-price");

  if (discountAmountValue <= 50) {
    finalPrice.innerText =
      OriginalPriceValue - OriginalPriceValue * (discountAmountValue / 100);
  } else {
    alert("discount should be less than 50%");
    originalPrice.innerText = "00";
  }
});
