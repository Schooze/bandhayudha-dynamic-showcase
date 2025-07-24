import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Members = () => {
  const members = [
    {
      name: 'Aufa Abdillah',
      role: 'Project Manager',
      department: 'Computer Engineering',
      year: '4th Year',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQECgh5OkLhvNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706764420491?e=1756339200&v=beta&t=U--G_2tB7vr7JYaRCluCICCdEUDu2fbkGxfZi18faHc',
      bio: 'Leading project coordination and strategic planning for all robotics competitions. Specializes in system integration and team management.',
      skills: ['Project Management', 'System Integration', 'Leadership', 'Strategic Planning'],
      contact: {
        phone: '085942167648',
        email: 'aufa.abdillah@students.undip.ac.id',
        linkedin: 'aufaabdillah',
        github: 'aufaabdillah'
      }
    },
    {
      name: 'Mega Adinda',
      role: 'Managerial',
      department: 'Industrial Engineering',
      year: '3rd Year',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHN1I1cQiQGTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699149581493?e=1756339200&v=beta&t=tF_jtuWoxcbxxTqE-KYnCQXsd3dEClZfi-CGUfDxa3U',
      bio: 'Responsible for team operations, resource management, and administrative coordination. Ensures smooth workflow and effective communication.',
      skills: ['Operations Management', 'Resource Planning', 'Communication', 'Process Optimization'],
      contact: {
        phone: '0895811430123',
        email: 'mega.adinda@students.undip.ac.id',
        linkedin: 'megaadinda',
        github: 'megaadinda'
      }
    },
    {
      name: 'Helmi Yusuf',
      role: 'Team Leader',
      department: 'Mechanical Engineering',
      year: '4th Year',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEvlHmgFBCq6w/profile-displayphoto-shrink_800_800/B56ZX2ranXHQAg-/0/1743600331886?e=1756339200&v=beta&t=9aSQN7bqmONVPuMCgnaP97utEFx_Op4fDHmQzSR3Ies',
      bio: 'Technical leader focusing on mechanical design and robot construction. Expertise in CAD design, manufacturing, and system optimization.',
      skills: ['Mechanical Design', 'CAD/CAM', 'Manufacturing', 'Technical Leadership'],
      contact: {
        phone: '082324104226',
        email: 'helmi.yusuf@students.undip.ac.id',
        linkedin: 'helmiyusuf',
        github: 'helmiyusuf'
      }
    }
  ];

  const divisions = [
    {
      name: 'Mechanical Division',
      description: 'Robot design, manufacturing, and mechanical systems',
      memberCount: 10,
      color: 'bg-robot-orange'
    },
    {
      name: 'Electronics Division',
      description: 'Circuit design, PCB development, and electronic systems',
      memberCount: 9,
      color: 'bg-tech-blue'
    },
    {
      name: 'Programming Division',
      description: 'Software development, AI algorithms, and robot control',
      memberCount: 11,
      color: 'bg-success-green'
    },
    {
      name: 'Management Division',
      description: 'Project coordination, documentation, and team operations',
      memberCount: 6,
      color: 'bg-accent'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Meet the passionate engineers and innovators behind Bandhayudha's success
          </p>
        </div>
      </section>

      {/* Key Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core team members who drive our vision and lead our technical initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <Card key={index} className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-elevation-medium"
                    />
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-tech-blue font-semibold mb-2">{member.role}</p>
                    <div className="flex flex-col items-center space-y-1 text-sm text-muted-foreground">
                      <span>{member.department}</span>
                      <span>{member.year}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-center space-x-3">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-muted-foreground hover:text-tech-blue transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://linkedin.com/in/${member.contact.linkedin}`}
                        className="text-muted-foreground hover:text-tech-blue transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://github.com/${member.contact.github}`}
                        className="text-muted-foreground hover:text-tech-blue transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      {member.contact.phone}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Team Divisions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our specialized divisions working together to create world-class robotics systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {divisions.map((division, index) => (
              <Card key={index} className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${division.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{division.memberCount}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{division.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{division.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {division.memberCount} Members
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Are you passionate about robotics and innovation? We're always looking for talented 
            individuals to join our mission of advancing robotics technology.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <strong>Open Positions:</strong> Mechanical Engineers, Electronics Engineers, 
              Software Developers, Project Coordinators
            </p>
            <p className="text-muted-foreground">
              Contact us at <a href="mailto:bandhayudha.undip@gmail.com" className="text-tech-blue hover:underline">
                bandhayudha.undip@gmail.com
              </a> to learn more about joining our team.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Members;