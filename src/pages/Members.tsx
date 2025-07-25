import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Members = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  const members = [
    {
      name: 'Aufa Abdillah',
      role: 'Project Manager',
      department: 'Mechanical Engineering',
      year: '5th Year',
      joinYear: 2025,
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
      department: 'Electrical Engineering',
      year: '3rd Year',
      joinYear: 2025,
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHN1I1cQiQGTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699149581493?e=1756339200&v=beta&t=tF_jtuWoxcbxxTqE-KYnCQXsd3dEClZfi-CGUfDxa3U',
      bio: 'Responsible for team operations, resource management, and administrative coordination. Ensures smooth workflow and effective communication.',
      skills: ['Operations Management', 'Resource Planning', 'Communication', 'Process Optimization'],
      contact: {
        phone: '0895811430123',
        email: 'mega.adinda@students.undip.ac.id',
        linkedin: 'megaadinda',
        github: null
      }
    },
    {
      name: 'Helmi Yusuf',
      role: 'Team Leader',
      department: 'Electrical Engineering',
      year: '3rd Year',
      joinYear: 2025,
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEvlHmgFBCq6w/profile-displayphoto-shrink_800_800/B56ZX2ranXHQAg-/0/1743600331886?e=1756339200&v=beta&t=9aSQN7bqmONVPuMCgnaP97utEFx_Op4fDHmQzSR3Ies',
      bio: 'Technical leader focusing on guiding the team, motivating members, and ensuring project alignment with technical goals. Expert in electrical systems and robotics.',
      skills: ['Electrical Design', 'Circuit Analysis', 'Robotics', 'Technical Leadership'],
      contact: {
        phone: '082324104226',
        email: 'helmi.yusuf@students.undip.ac.id',
        linkedin: null,
        github: 'helmiyusuf'
      }
    },
    // 2024 Members
    {
      name: 'Sarah Wijaya',
      role: 'Software Lead',
      department: 'Computer Science',
      year: '4th Year',
      joinYear: 2024,
      image: null,
      bio: 'Led the development of autonomous navigation systems and AI algorithms. Expert in ROS and computer vision.',
      skills: ['Python', 'ROS', 'Computer Vision', 'Machine Learning'],
      contact: {
        phone: '081234567890',
        email: 'sarah.wijaya@students.undip.ac.id',
        linkedin: 'sarahwijaya',
        github: 'sarahw'
      }
    },
    {
      name: 'Ahmad Rizki',
      role: 'Hardware Engineer',
      department: 'Electrical Engineering',
      year: '3rd Year',
      joinYear: 2024,
      image: null,
      bio: 'Specialized in PCB design and embedded systems. Developed control systems for various robot competitions.',
      skills: ['PCB Design', 'Arduino', 'Embedded Systems', 'Control Systems'],
      contact: {
        phone: '082345678901',
        email: 'ahmad.rizki@students.undip.ac.id',
        linkedin: null,
        github: null
      }
    },
    // 2023 Members
    {
      name: 'Diana Putri',
      role: 'Mechanical Designer',
      department: 'Mechanical Engineering',
      year: '5th Year',
      joinYear: 2023,
      image: null,
      bio: 'Expert in CAD design and mechanical analysis. Designed award-winning robot chassis.',
      skills: ['SolidWorks', 'ANSYS', 'CAD/CAM', '3D Printing'],
      contact: {
        phone: '083456789012',
        email: 'diana.putri@students.undip.ac.id',
        linkedin: 'dianaputri',
        github: 'dputri'
      }
    },
    {
      name: 'Budi Santoso',
      role: 'Project Coordinator',
      department: 'Industrial Engineering',
      year: '4th Year',
      joinYear: 2023,
      image: null,
      bio: 'Managed project timelines and resources. Ensured successful competition participation.',
      skills: ['Project Management', 'Agile', 'Team Coordination', 'Documentation'],
      contact: {
        phone: '084567890123',
        email: 'budi.santoso@students.undip.ac.id',
        linkedin: 'budisantoso',
        github: null
      }
    }
  ];

  // Get unique years and sort them
  const years = [...new Set(members.map(m => m.joinYear))].sort((a, b) => b - a);
  
  // Filter members by year
  const displayYear = hoveredYear || selectedYear;
  const filteredMembers = members.filter(member => member.joinYear === displayYear);

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
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Year Timeline Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {years.map((year, index) => (
            <div key={year} className="relative group">
              <button
                onMouseEnter={() => setHoveredYear(year)}
                onMouseLeave={() => setHoveredYear(null)}
                onClick={() => setSelectedYear(year)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  (hoveredYear === year || selectedYear === year) 
                    ? 'bg-tech-blue text-white scale-110 shadow-lg' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {year}
              </button>
              {index < years.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-300 mx-auto mt-2" />
              )}
              
              {/* Tooltip */}
              <div className={`absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap transition-opacity duration-200 ${
                hoveredYear === year ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                {members.filter(m => m.joinYear === year).length} members
              </div>
            </div>
          ))}
        </div>
      </div>

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
                Leadership Team - {displayYear}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The core team members who drive our vision and lead our technical initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-elevation-medium"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center shadow-elevation-medium">
                          <User className="h-12 w-12 text-gray-500" />
                        </div>
                      )}
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
                        {member.contact.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${member.contact.linkedin}`}
                            className="text-muted-foreground hover:text-tech-blue transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.contact.github && (
                          <a
                            href={`https://github.com/${member.contact.github}`}
                            className="text-muted-foreground hover:text-tech-blue transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
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