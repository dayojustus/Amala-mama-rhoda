<script>
  // Your WhatsApp number (international format, no + or spaces)
  const phoneNumber = "2349038369848"; 

  // Get all order buttons
  const buttons = document.querySelectorAll(".order-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.getAttribute("data-item");
      const price = button.getAttribute("data-price");

      // Create the WhatsApp message
      const message = Hello, I want to order ${item} for ${price}.;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      // Build WhatsApp link
      const whatsappLink = https://wa.me/{234903839848}?text={encodedMessage};

      // Open WhatsApp
      window.open(whatsappLink, "_http://wa.me/2349038369848");
    });
  });
</script>