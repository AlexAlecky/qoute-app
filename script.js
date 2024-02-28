const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {

  try {
    quoteEl.innerHTML = 'Updating....';
    authorEl.innerHTML = 'Loading...';
    btnEl.innerHTML = 'Loading....';
    btnEl.disabled = true;

    const response = await fetch (apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const authorContent = data.author;

    quoteEl.innerHTML = quoteContent;
    authorEl.innerHTML = authorContent;
    btnEl.innerHTML = 'Get A Quote';
    btnEl.disabled = false;
  } catch (error) {
    quoteEl.innerHTML = 'An error happened try again later';
    authorEl.innerHTML = 'Author';
    btnEl.innerHTML = 'Get A Quote';
    btnEl.disabled = false
  }
}


btnEl.addEventListener('click', getQuote);