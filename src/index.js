const style = document.createElement('style');
style.textContent = `
    button[data-testid="upgrade-button"] {
        display: none !important;
    }
`;
document.documentElement.appendChild(style);