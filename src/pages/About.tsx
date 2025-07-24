import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-tech-blue" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of robotics technology with creative solutions and cutting-edge research.'
    },
    {
      icon: <Users className="h-8 w-8 text-tech-blue" />,
      title: 'Collaboration',
      description: 'Working together as a unified team to achieve extraordinary results in robotics competitions.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-tech-blue" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in design, engineering, and performance in every project.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-tech-blue" />,
      title: 'Learning',
      description: 'Continuously expanding our knowledge and skills in robotics, AI, and engineering disciplines.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Bandhayudha</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Leading the future of autonomous robotics through innovation, dedication, and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-elevation-medium">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To advance the field of robotics through innovative design, rigorous engineering, and collaborative 
                  research. We strive to create autonomous systems that push the boundaries of what's possible in 
                  robotics competition and real-world applications.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-elevation-medium">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be recognized as a world-class robotics team that inspires the next generation of engineers 
                  and innovators. We envision a future where our contributions to robotics technology make a 
                  meaningful impact on society and industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our approach to robotics innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevation-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and awards that showcase our commitment to excellence in robotics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-tech-blue mb-2">5+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Years Experience</p>
              <p className="text-muted-foreground">In competitive robotics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tech-blue mb-2">10+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Competitions</p>
              <p className="text-muted-foreground">in national ABURobocon events</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tech-blue mb-2">30+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Team Members</p>
              <p className="text-muted-foreground">Passionate engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of the next generation of robotics innovation. Contact us to learn more about our team and projects.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Contact Us Today
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;