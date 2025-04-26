document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImage = document.getElementById("popup-image");
  const popupPrice = document.getElementById("popup-price");
  const popupDescription = document.getElementById("popup-description");
  const popupFeatures = document.getElementById("popup-features");
  const closePopup = document.querySelector(".close");

  document.querySelectorAll(".product-card button").forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".product-card");

      const title = card.querySelector("h3").textContent;
      const imageSrc = card.querySelector("img").src;
      const price = card.querySelector(".price")?.textContent || "No price available.";
      const description = card.querySelector(".description")?.textContent || "No description available.";
      const featuresList = card.querySelector(".features");

      popupTitle.textContent = title;
      popupImage.src = imageSrc;
      popupPrice.textContent = `Price: ${price}`;
      popupDescription.textContent = description;

      popupFeatures.innerHTML = "";

      if (featuresList) {
        const features = featuresList.querySelectorAll("li");

        if (features.length > 0) {
          features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature.textContent.trim();
            popupFeatures.appendChild(li);
          });
        } else {
          popupFeatures.innerHTML = "<li>No features listed.</li>";
        }
      } else {
        popupFeatures.innerHTML = "<li>No features listed.</li>";
      }

      popup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
