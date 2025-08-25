<script>
  // WhatsApp number 
  const phoneNumber = "2349038369848"; 

  // Get all order buttons
  const buttons = document.querySelectorAll(".order-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.getAttribute("data-item");
      const price = button.getAttribute("data-price");

      // WhatsApp message using template literals
      const message = `Hello, I want to order ${item} for ${price}.`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp link
      const whatsappLink = `https://wa.me/${2349038369848}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappLink, "_blank");
    });
  });
</script>
