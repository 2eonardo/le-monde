export const handleLabelKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        event.target.click();
    }
};