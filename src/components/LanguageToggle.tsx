import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        onClick={toggleLanguage}
        className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full shadow-lg transition-all duration-300"
      >
        {language === 'en' ? getTranslation('hebrew', 'en') : getTranslation('english', 'he')}
      </Button>
    </div>
  );
};

export default LanguageToggle;