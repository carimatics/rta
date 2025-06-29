// hiragana to katakana
export function hiraganaToKatakana(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, (char) => {
    const code = char.charCodeAt(0) + 0x60;
    return String.fromCharCode(code);
  });
}
