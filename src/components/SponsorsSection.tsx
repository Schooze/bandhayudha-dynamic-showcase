import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'JLCPcb',
      logo: 'https://jlcpcb.com/assets/images/nav_logo.png',
      description: 'PCB Manufacturing'
    },
    {
      name: 'SolidWorks',
      logo: 'https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg',
      description: '3D CAD Software'
    },
    {
      name: 'Altium',
      logo: '/bandhayudha-photo/Altium_Logo_BLK.png',
      description: 'PCB Design Software'
    },
    {
      name: 'Seeed Studio',
      logo: 'https://files.seeedstudio.com/wiki/IndexWiki/logo_2018_horizontal.png',
      description: 'Electronics Platform'
    },
    {
      name: 'EasyEda',
      logo: 'https://easyeda.com/image/logo.png',
      description: 'Circuit Design'
    },
    {
      name: 'Sick Sensor Intelligence',
      logo: 'https://www.sick.com/media/layout/logos/SICK_Logo_claim_rgb_2021.png',
      description: 'Sensor Technology'
    },
    {
      name: 'Polymaker',
      logo: 'https://cdn.polymaker.com/wp-content/uploads/2020/08/polymaker-logo-black.png',
      description: '3D Printing Materials'
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supported by industry-leading companies in robotics, manufacturing, and technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-card rounded-lg shadow-elevation-low hover:shadow-elevation-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 flex items-center justify-center mb-3 w-full">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    const target = e.currentTarget as HTMLImageElement;
                    const nextElement = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <div className="hidden bg-gradient-hero text-white px-3 py-1 rounded text-sm font-semibold">
                  {sponsor.name}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;