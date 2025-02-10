document.addEventListener('DOMContentLoaded', function() {
    const bgColorInput = document.getElementById('bg-color');
    const textColorInput = document.getElementById('text-color');
    const fontSizeInput = document.getElementById('font-size');
    const fontFamilySelect = document.getElementById('font-family');
    const textAlignSelect = document.getElementById('text-align');
    const applyButton = document.getElementById('apply');
    const resetButton = document.getElementById('reset');

    function applyChanges() {
        const bgColor = bgColorInput.value;
        const textColor = textColorInput.value;
        const fontSize = fontSizeInput.value;
        const fontFamily = fontFamilySelect.value;
        const textAlign = textAlignSelect.value;

        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        document.body.style.fontSize = fontSize + 'px';
        document.body.style.fontFamily = fontFamily;
        document.body.style.textAlign = textAlign;

        saveSettings();
    }

    function resetToDefault() {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        document.body.style.fontSize = '16px';
        document.body.style.fontFamily = 'Arial';
        document.body.style.textAlign = 'left';

        bgColorInput.value = '#ffffff';
        textColorInput.value = '#000000';
        fontSizeInput.value = 16;
        fontFamilySelect.value = 'Arial';
        textAlignSelect.value = 'left';

        localStorage.removeItem('customStyles');
    }

    function saveSettings() {
        const settings = {
            bgColor: bgColorInput.value,
            textColor: textColorInput.value,
            fontSize: fontSizeInput.value,
            fontFamily: fontFamilySelect.value,
            textAlign: textAlignSelect.value
        };
        localStorage.setItem('customStyles', JSON.stringify(settings));
    }

    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('customStyles'));
        if (savedSettings) {
            bgColorInput.value = savedSettings.bgColor;
            textColorInput.value = savedSettings.textColor;
            fontSizeInput.value = savedSettings.fontSize;
            fontFamilySelect.value = savedSettings.fontFamily;
            textAlignSelect.value = savedSettings.textAlign;

            applyChanges(); // Apply the loaded settings
        }
    }

    applyButton.addEventListener('click', applyChanges);
    resetButton.addEventListener('click', resetToDefault);
    loadSettings(); // Load settings on page load
});
