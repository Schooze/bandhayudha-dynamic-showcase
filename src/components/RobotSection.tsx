import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cpu, Zap, Target } from 'lucide-react';

const RobotSection = () => {
  const robots = [
    {
      id: 1,
      name: 'Autonomous Navigation Robot',
      category: 'Competition Robot',
      image: '/bandhayudha-photo/75965119-720c-44cf-b446-0099b94bdef4.png',
      description: 'Advanced autonomous robot designed for ABU Robocon competition. Features intelligent navigation, object recognition, and precision manipulation capabilities for complex field challenges.',
      specs: [
        'LiDAR-based Navigation',
        'Computer Vision',
        'Omnidirectional Movement',
        'Precision Gripper System'
      ],
      achievements: [
        'National Championship Finalist',
        'Best Design Award',
        'Innovation Excellence'
      ]
    },
    {
      id: 2,
      name: 'Multi-Task Competition Robot',
      category: 'Competition Robot',
      image: '/bandhayudha-photo/dc5ff86c-6bdc-47ae-92e3-7e9a69fa79cd.png',
      description: 'Versatile robot platform capable of handling multiple competition tasks. Equipped with advanced sensor arrays and modular tool systems for diverse challenge requirements.',
      specs: [
        'Modular Tool System',
        'Multi-Sensor Integration',
        'Adaptive Control',
        'Real-time Processing'
      ],
      achievements: [
        'Regional Champion',
        'Technical Excellence',
        'Team Spirit Award'
      ]
    }
  ];

  return (
    <section id="robot" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Our Robots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our championship-winning autonomous robots, engineered for excellence in competitive robotics
          </p>
        </div>

        <div className="space-y-20">
          {robots.map((robot, index) => (
            <div key={robot.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Robot Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={robot.image}
                    alt={robot.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-elevation-high group-hover:shadow-elevation-high transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-tech-blue text-white">
                    {robot.category}
                  </Badge>
                </div>
              </div>

              {/* Robot Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {robot.name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {robot.description}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Cpu className="h-5 w-5 text-tech-blue mr-2" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {robot.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                          <span className="text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Target className="h-5 w-5 text-robot-orange mr-2" />
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {robot.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="outline" className="border-robot-orange text-robot-orange">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button className="bg-tech-blue hover:bg-tech-blue-dark text-white group">
                      Learn More About This Robot
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Innovation Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-tech-blue" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">AI-Powered</h4>
                <p className="text-muted-foreground">Advanced machine learning algorithms for autonomous decision making</p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="bg-robot-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-robot-orange" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Precision Control</h4>
                <p className="text-muted-foreground">Sub-millimeter accuracy in manipulation and positioning tasks</p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="bg-success-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-success-green" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Real-time Processing</h4>
                <p className="text-muted-foreground">High-speed sensor data processing for instant response</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotSection;