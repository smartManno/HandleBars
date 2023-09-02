const source = document.getElementById('ice-cream').innerHTML;

const template = Handlebars.compile(source);

let context = {
  flavor: 'venilla'
};

const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
