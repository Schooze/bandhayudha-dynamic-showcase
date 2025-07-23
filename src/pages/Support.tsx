import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Support = () => {
  const sponsors = [
    {
      name: 'JLCPCB',
      category: 'PCB Manufacturing',
      description: 'Leading PCB prototype and manufacturing service providing high-quality circuit boards for our robotics projects.',
      logo: 'https://jlcpcb.com/assets/images/nav_logo.png',
      website: 'https://jlcpcb.com',
      services: ['PCB Prototyping', 'PCB Assembly', 'Component Sourcing', 'Quality Testing'],
      partnership: 'Official PCB Manufacturing Partner'
    },
    {
      name: 'SolidWorks',
      category: '3D CAD Software',
      description: 'Industry-leading 3D CAD software enabling our team to design, simulate, and validate complex mechanical systems.',
      logo: 'https://www.solidworks.com/sites/default/files/2021-10/solidworks-logo-horizontal.png',
      website: 'https://solidworks.com',
      services: ['3D Modeling', 'Simulation', 'Design Validation', 'Collaboration Tools'],
      partnership: 'Education License Partner'
    },
    {
      name: 'Altium',
      category: 'PCB Design Software',
      description: 'Advanced PCB design software providing comprehensive tools for electronic system design and development.',
      logo: 'https://www.altium.com/altium-designer/templates/images/altium-logo.png',
      website: 'https://altium.com',
      services: ['PCB Design', 'Schematic Capture', 'Library Management', 'Design Rules Check'],
      partnership: 'Student License Sponsor'
    },
    {
      name: 'Seeed Studio',
      category: 'Electronics Platform',
      description: 'Open hardware facilitator providing electronic modules, sensors, and prototyping platforms for rapid development.',
      logo: 'https://files.seeedstudio.com/wiki/IndexWiki/logo_2018_horizontal.png',
      website: 'https://seeedstudio.com',
      services: ['Sensor Modules', 'Development Boards', 'Grove System', 'Custom Manufacturing'],
      partnership: 'Hardware Sponsor'
    },
    {
      name: 'EasyEDA',
      category: 'Circuit Design',
      description: 'Web-based EDA tool for circuit design, simulation, and PCB layout with seamless integration to manufacturing.',
      logo: 'https://easyeda.com/image/logo.png',
      website: 'https://easyeda.com',
      services: ['Circuit Design', 'PCB Layout', 'Simulation', 'Component Library'],
      partnership: 'Pro Account Sponsor'
    },
    {
      name: 'SICK Sensor Intelligence',
      category: 'Sensor Technology',
      description: 'World-leading manufacturer of intelligent sensors and sensor solutions for industrial automation and robotics.',
      logo: 'https://www.sick.com/media/layout/logos/SICK_Logo_claim_rgb_2021.png',
      website: 'https://sick.com',
      services: ['LiDAR Sensors', 'Vision Systems', 'Safety Sensors', 'Encoder Systems'],
      partnership: 'Technology Partner'
    },
    {
      name: 'Polymaker',
      category: '3D Printing Materials',
      description: 'Premium 3D printing filaments and materials enabling high-quality prototyping and functional part production.',
      logo: 'https://cdn.polymaker.com/wp-content/uploads/2020/08/polymaker-logo-black.png',
      website: 'https://polymaker.com',
      services: ['PLA Filaments', 'Engineering Materials', 'Support Materials', 'Custom Solutions'],
      partnership: 'Material Sponsor'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Partnering with industry leaders to push the boundaries of robotics innovation
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powered by Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our success in competitive robotics is made possible through strategic partnerships 
              with world-class technology companies. These partnerships provide us with access to 
              cutting-edge tools, materials, and expertise that enable us to compete at the highest levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are grateful for the continued support of our sponsors who share our vision of 
              advancing robotics technology and education.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="h-12 mb-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            // Fallback if logo doesn't load
                            const target = e.currentTarget as HTMLImageElement;
                            const nextElement = target.nextElementSibling as HTMLElement;
                            target.style.display = 'none';
                            if (nextElement) nextElement.style.display = 'block';
                          }}
                        />
                        <div className="hidden bg-gradient-hero text-white px-4 py-2 rounded text-lg font-bold inline-block">
                          {sponsor.name}
                        </div>
                      </div>
                      <p className="text-sm text-tech-blue font-semibold mb-2">{sponsor.category}</p>
                      <h3 className="text-xl font-bold text-foreground mb-3">{sponsor.partnership}</h3>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {sponsor.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Services & Support</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {sponsor.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partnership Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How our sponsor partnerships enable breakthrough innovations in robotics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 shadow-elevation-medium">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-tech-blue mb-2">95%</div>
                <h3 className="font-semibold text-foreground mb-2">Cost Reduction</h3>
                <p className="text-muted-foreground text-sm">
                  In development and prototyping expenses through sponsored tools and materials
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-elevation-medium">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-tech-blue mb-2">50%</div>
                <h3 className="font-semibold text-foreground mb-2">Faster Development</h3>
                <p className="text-muted-foreground text-sm">
                  Accelerated project timelines using professional-grade tools and platforms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-elevation-medium">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-tech-blue mb-2">100%</div>
                <h3 className="font-semibold text-foreground mb-2">Industry Standards</h3>
                <p className="text-muted-foreground text-sm">
                  Professional-quality outputs matching industry engineering standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Sponsor
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our mission to advance robotics education and innovation. Partner with us to 
            support the next generation of engineering talent.
          </p>
          <div className="space-y-4">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Partnership Opportunities
            </Button>
            <p className="text-white/80">
              Contact us at <a href="mailto:bandhayudha.undip@gmail.com" className="underline hover:text-white">
                bandhayudha.undip@gmail.com
              </a> to discuss sponsorship opportunities
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Support;