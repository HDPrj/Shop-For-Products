const modalCart = document.createElement("div");
modalCart.classList.add("modal", "fade");
modalCart.setAttribute("id", "model-cart");
modalCart.setAttribute("tabindex", "-1");
modalCart.setAttribute("role", "dialog");
modalCart.setAttribute("aria-labelledby", "exampleModalLabel");
modalCart.setAttribute("aria-hidden", "true");

const modalDialog = document.createElement("div");
modalDialog.classList.add("modal-dialog", "modal-lg");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
modalContent.appendChild(rootDiv);

const modalHeader = document.createElement("div");
modalHeader.classList.add("modal-header");

const modalTitle = document.createElement("h5");
modalTitle.classList.add("modal-title");
modalTitle.textContent = "My Cart";
modalHeader.appendChild(modalTitle);

const closeButton = document.createElement("button");
closeButton.setAttribute("type", "button");
closeButton.classList.add("close");
closeButton.setAttribute("data-dismiss", "modal");
closeButton.setAttribute("aria-label", "Close");
modalHeader.appendChild(closeButton);

modalContent.appendChild(modalHeader);

const modalBody = document.createElement("div");
modalBody.classList.add("modal-body");

const cartItemDiv = document.createElement("div");
cartItemDiv.setAttribute("id", "cart-item");
cartItemDiv.textContent = "Your cart is empty";
modalBody.appendChild(cartItemDiv);

const totalPriceDiv = document.createElement("div");
totalPriceDiv.innerHTML = `Total price: ₹<span class="total-cart"></span>`;
modalBody.appendChild(totalPriceDiv);

modalContent.appendChild(modalBody);

const modalFooter = document.createElement("div");
modalFooter.classList.add("modal-footer");

const closeButtonFooter = document.createElement("button");
closeButtonFooter.setAttribute("type", "button");
closeButtonFooter.classList.add("btn", "btn-secondary");
closeButtonFooter.setAttribute("data-dismiss", "modal");
closeButtonFooter.textContent = "Close";
modalFooter.appendChild(closeButtonFooter);

const orderButton = document.createElement("button");
orderButton.setAttribute("type", "button");
orderButton.classList.add("btn", "btn-primary");
orderButton.textContent = "Order now";
modalFooter.appendChild(orderButton);

modalContent.appendChild(modalFooter);

modalDialog.appendChild(modalContent);
modalCart.appendChild(modalDialog);
