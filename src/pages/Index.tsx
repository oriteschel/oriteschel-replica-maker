
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/f6887275-7689-4cc3-9642-443ada6bbe3f.png" 
              alt="Money Coach Portrait" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            What If You Could Finally Feel Good About Money—
            <span className="text-green-600">Without Changing Who You Are?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Take the <strong>Sacred Money Archetypes® Quiz</strong> and discover what's been quietly shaping your money story—so you can make empowered, confident changes that feel aligned with who you truly are.
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            👉 Take the Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Subheader Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              You don't need to hustle harder, budget tighter, or "fix" yourself to feel at ease with money.
            </h2>
            <p className="text-xl text-gray-600">
              You just need to understand the deeper patterns that have been calling the shots.
            </p>
          </div>
        </div>
      </div>

      {/* This Quiz Is For You Section */}
      <div className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            This Quiz Is for You If You…
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Feel torn between dreaming big and staying \"realistic\"",
              "Struggle with asking for money or setting prices",
              "Tend to give more than you get back",
              "Crave a sense of control or security—but also freedom",
              "Want more beauty, joy, and ease in how you handle money",
              "Long to feel supported, not judged, when talking about finances"
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Here's What You'll Learn:
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "What's been driving your money decisions—and what's been secretly holding you back",
              "How to shift out of stress, guilt, or avoidance and into confidence and clarity",
              "Where your strengths truly lie—and how to use them without burnout",
              "A fresh way to talk about money that feels grounded, kind, and empowering"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-200 rounded-full p-2 flex-shrink-0">
                  <Star className="h-5 w-5 text-blue-700" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Happens Next Section */}
      <div className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Here's What Happens Next:
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">Take the quiz and get instant access to your personal results</p>
              <p className="text-lg text-gray-700">Get a free invitation to go deeper in a no-pressure call with me</p>
              <p className="text-lg text-gray-700">Explore simple shifts that can change your entire relationship with money</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                👉 Start the Quiz
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-400 text-green-700 hover:bg-green-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                👉 Book Your Free Crack Your Money Code Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-2xl shadow-lg">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
                💛 You deserve to feel peace—not panic—when you think about money.
              </p>
              <p className="text-xl text-gray-600">
                Let's help you understand why things have felt hard… and how to make them easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
