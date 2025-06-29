import { Language } from '../fixtures';
import { Dictionary } from './base';
import { EnDictionary } from './en';
import { JaDictionary } from './ja';

function getDictionary(language: Language): Dictionary {
  switch (language) {
    case Language.Ja:
      return new JaDictionary();
    case Language.En:
      return new EnDictionary();
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

export { getDictionary, type Dictionary };
