// JavaScript for FAQ Section Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".question");

    question.addEventListener("click", () => {
      // Toggle active class on clicked item
      item.classList.toggle("active");

      // Close other FAQ items (optional)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
