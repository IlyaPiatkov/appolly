export const onSubscribeForm = () => {
  const subscribeForm = document.getElementById("subscribe-form");

  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim();

    if (email) {
      alert(`Thank you for subscribing! You will receive updates at ${email}.`);
      subscribeForm.reset();
    }
  });
};
