const links = document.querySelectorAll('a');
const form = document.querySelector('form#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  const data = getFormData(e.target);
  console.log(data);
  //   return sendWhatsAppMsg(data);
});
[...links].forEach((x) => {
  //   x.href = '#';
  if (x.innerText === 'read more') {
    x.style.display = 'none';
  }
  if (x.innerText === 'ORDER NOW') {
    x.addEventListener('click', () => {
      gsap.to(window, { duration: 1, scrollTo: '#contact' });
    });
  }
});
function getFormData(form) {
  let reqBody = {};
  Object.keys(form.elements).forEach((key) => {
    let element = form.elements[key];
    if (element.type !== 'submit') {
      reqBody[element.name] = element.value;
    }
  });
  return reqBody;
}
function sendWhatsAppMsg(data) {
  console.log(data);
  return window.open(
    `https://wa.me/2348185410995?text=Hi%20my%20name%20is%20 ${data.name}%20,%20My%20Place%20of%20delivery%20is%20${data.address}%20the%20cake%20is%20${data.category}`,
    '_blank'
  );
}
