import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/translations";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const { language, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary/30 to-secondary/30 ${isRTL ? 'rtl' : 'ltr'}`}>
      <LanguageToggle />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/f6887275-7689-4cc3-9642-443ada6bbe3f.png" 
              alt="Orit Eschel - Money Coach Portrait" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-600 font-semibold">{getTranslation('hi', language)}</p>
          </div>
          
          <h1 className="font-poppins text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {getTranslation('heroTitle', language)}
            <span className="text-primary">{getTranslation('heroTitleHighlight', language)}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {getTranslation('heroSubtitle', language)}
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="https://quiz.oriteshel.com/" target="_blank" rel="noopener noreferrer">
              {getTranslation('takeQuiz', language)}
              <ArrowRight className={`${isRTL ? 'mr-2 rtl-flip' : 'ml-2'} h-5 w-5`} />
            </a>
          </Button>
        </div>
      </div>

      {/* Personal Story Section */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                {getTranslation('storyTitle', language)}
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
              <p>
                {getTranslation('storyP1', language)}
              </p>
              
              <p>
                {getTranslation('storyP2', language)}
              </p>
              
              <p>
                {getTranslation('storyP3', language)}
              </p>
              
              <p>
                {getTranslation('storyP4', language)}
              </p>
              
              <p>
                {getTranslation('storyP5', language)}
              </p>
              
              <p className="text-xl font-medium text-primary">
                {getTranslation('storyHighlight', language)}
              </p>
              
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                <p className="text-lg font-medium text-gray-800">
                  {getTranslation('storyClosing', language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Freebies CTA Section */}
      <div className="py-12 bg-gradient-to-r from-accent/30 to-primary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://app.flodesk.com/form/686a9a70fc443b36ecc82b42" target="_blank" rel="noopener noreferrer">
                {getTranslation('freebies', language)}
                <ArrowRight className={`${isRTL ? 'mr-2 rtl-flip' : 'ml-2'} h-5 w-5`} />
              </a>
            </Button>
          </div>
        </div>
      </div>


      {/* Subheader Section */}
      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              {getTranslation('subheaderTitle', language)}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation('subheaderSubtitle', language)}
            </p>
          </div>
        </div>
      </div>

      {/* This Quiz Is For You Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {getTranslation('quizTitle', language)}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {getTranslationArray('quizBenefits', language).map((item: string, index: number) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <Sparkles className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-gradient-to-r from-accent/30 to-primary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {getTranslation('learnTitle', language)}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {getTranslationArray('learnPoints', language).map((item: string, index: number) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} p-6 bg-white rounded-lg shadow-md`}>
                <div className="bg-accent/20 rounded-full p-2 flex-shrink-0">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* What Happens Next Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {getTranslation('nextTitle', language)}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              {getTranslationArray('nextPoints', language).map((point: string, index: number) => (
                <p key={index} className="text-lg text-gray-700">{point}</p>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 justify-center items-center">
              {/* Primary CTA - Quiz */}
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://quiz.oriteshel.com/" target="_blank" rel="noopener noreferrer">
                  {getTranslation('startQuiz', language)}
                  <ArrowRight className={`${isRTL ? 'mr-2 rtl-flip' : 'ml-2'} h-5 w-5`} />
                </a>
              </Button>
              
              {/* Secondary CTA - Calendar booking */}
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="https://calendar.app.google/pfUChYLxNDSPRZau7" target="_blank" rel="noopener noreferrer">
                    {getTranslation('bookCrack', language)}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <p className="font-poppins text-2xl font-semibold text-gray-800 mb-4">
                {getTranslation('finalTitle', language)}
              </p>
              <p className="text-xl text-gray-600">
                {getTranslation('finalSubtitle', language)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Services Tagline */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-medium">
                Healing money blocks • Finding your voice • Neurodivergent-friendly 🧠💫
              </p>
              <p className="text-sm text-gray-600">
                You can work with me in English, Hebrew and German and chat in some other languages too!
              </p>
            </div>
            
            {/* Freebies Link */}
            <div className="py-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border border-secondary text-secondary hover:bg-secondary/10 text-sm px-4 py-2 rounded-full"
                  asChild
                >
                <a href="https://app.flodesk.com/form/686a9a70fc443b36ecc82b42" target="_blank" rel="noopener noreferrer">
                  {getTranslation('freebies', language)}
                </a>
              </Button>
            </div>
            
            {/* Impressum */}
            <div className="border-t border-gray-200 pt-6">
              <div className="text-xs text-gray-500 space-y-1">
                <p className="font-semibold">Impressum:</p>
                <p>Telefon: +49 (0)17634645846</p>
                <p>E-Mail: hello@oriteschel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
