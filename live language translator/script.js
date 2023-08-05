const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

const languageSelect = document.getElementById('language-select');
const translationInput = document.getElementById('translation-input');
const translationOutput = document.getElementById('translation-output');

async function translateText(text, targetLang) {
    try {
        const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&target=${targetLang}&q=${encodeURIComponent(text)}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error fetching translation:', error.message);
        return 'Translation error';
    }
}

async function handleTranslation() {
    const text = translationInput.value;
    const targetLang = languageSelect.value;

    if (text.trim() === '') {
        translationOutput.innerText = '';
        return;
    }

    const translatedText = await translateText(text, targetLang);
    translationOutput.innerText = translatedText;
}

translationInput.addEventListener('input', handleTranslation);
languageSelect.addEventListener('change', handleTranslation);
