import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    >
      <img
        src={i18n.language === 'fr' 
          ? 'https://flagcdn.com/w40/gb.png'
          : 'https://flagcdn.com/w40/fr.png'
        }
        alt={i18n.language === 'fr' ? 'English' : 'Français'}
        className="w-6 h-4 object-cover rounded"
      />
    </button>
  );
}