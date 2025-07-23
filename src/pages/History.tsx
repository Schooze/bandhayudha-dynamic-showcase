import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Lightbulb, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const History = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Team Formation',
      description: 'Bandhayudha was established as the official ABU Robocon team representing Diponegoro University. Our journey began with a vision to compete at the highest levels of international robotics competition.',
      icon: <Users className="h-6 w-6" />
    },
    {
      year: '2020',
      title: 'First Competition',
      description: 'Despite the challenges of the pandemic, we participated in our first ABU Robocon competition, learning valuable lessons and establishing our foundation in competitive robotics.',
      icon: <Target className="h-6 w-6" />
    },
    {
      year: '2021',
      title: 'Technical Innovation',
      description: 'We developed our first advanced autonomous robot systems, incorporating cutting-edge sensors and AI-driven navigation technologies that would become our signature approach.',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      year: '2022',
      title: 'National Recognition',
      description: 'Achieved significant recognition in the Indonesian robotics community, establishing partnerships with industry leaders and expanding our technical capabilities.',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      year: '2023',
      title: 'International Success',
      description: 'Represented Indonesia in the ABU Robocon international competition, showcasing our advanced robotics systems and innovative engineering solutions on the world stage.',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Building on our success, we continue to push the boundaries of robotics innovation, mentoring new team members and developing next-generation autonomous systems.',
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our History</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to international recognition - the Bandhayudha journey
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ABU Robocon Champions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bandhayudha is the premier ABU Robocon team representing Diponegoro University (UNDIP) in Indonesia. 
              We are a dedicated group of engineering students and researchers committed to advancing the field of 
              competitive robotics through innovation, teamwork, and technical excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As representatives of one of Indonesia's leading universities, we carry the responsibility of showcasing 
              Indonesian engineering talent on the international stage. Our participation in ABU Robocon competitions 
              has not only brought recognition to our university but has also contributed to the growth of robotics 
              education and research in Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution from a university team to international competitors
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-tech-blue rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="text-tech-blue mr-3">{item.icon}</div>
                            <div className="text-2xl font-bold text-tech-blue">{item.year}</div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Looking Forward
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As we continue our journey, Bandhayudha remains committed to excellence in robotics competition, 
              innovation in autonomous systems, and the development of the next generation of Indonesian engineers. 
              Our history is just the beginning of what we aim to achieve in the field of competitive robotics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invite you to be part of our continuing story as we work towards new achievements, 
              technological breakthroughs, and international recognition in the world of robotics.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default History;