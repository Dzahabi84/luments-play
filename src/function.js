export function filterString(inputString, number) {
    const words = inputString.split(/\s+/);
    const filteredString = words.slice(0, number).join(' ');
    return filteredString;
}