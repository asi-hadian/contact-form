const radios = document.querySelectorAll('input[name="query_type"]');

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    document
      .querySelectorAll(".radio-group")
      .forEach((g) => g.classList.remove("checked"));
    radio.closest(".radio-group").classList.add("checked");
  });
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  const successBox = document.getElementById("success");
  successBox.style.display = "none";

  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));

  function setError(id, message) {
    document.querySelector(`#${id}`).nextElementSibling.textContent = message;
    valid = false;
  }
  const first = document.getElementById("first-name");
  const last = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");

  console.log(first, last, email, message, consent);

  if (!first.value.trim()) {
    setError("first-name", "this field is required");
    first.classList.add("error-field");
    valid = false;
  } else {
    first.classList.remove("error-field");
  }

  if (!last.value.trim()) {
    setError("last-name", "this field is required");
    last.classList.add("error-field");
    valid = false;
  } else {
    last.classList.remove("error-field");
  }

  if (!email.value.trim()) {
    setError("email", "this field is required");
    email.classList.add("error-field");
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    setError("email", "please enter a valid email address");
    email.classList.add("error-field");
  } else {
    email.classList.remove("error-field");
  }

  if (!document.querySelector("input[name=query_type]:checked")) {
    document.getElementById("radio-error").textContent =
      "please select a query type";
    valid = false;
  }

  if (!message.value.trim()) {
    setError("message", "this field is reqired");
    message.classList.add("error-field");
  } else {
    message.classList.remove("error-field");
  }

  if (!consent.checked) {
    document.querySelector("#consent-error").textContent =
      "to submitthis form please consent to being contacted";
    valid = false;
  }

  if (valid) {
    successBox.style.display = "block";
    
    document.getElementById("contact-form").reset();

    // delete error styles
    document
      .querySelectorAll(".error-field")
      .forEach((el) => el.classList.remove("error-field"));

    
    document
      .querySelectorAll(".radio-group")
      .forEach((g) => g.classList.remove("checked"));
  }
});
