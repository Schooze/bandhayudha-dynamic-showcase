import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      country: value
    }));
  };

  const sendEmail = async () => {
    try {
      // EmailJS Configuration
      const serviceId = 'service_hh1f9m3'; // Ganti dengan Service ID dari EmailJS
      const templateId = 'template_95rnkcs'; // Ganti dengan Template ID dari EmailJS
      const publicKey = '2g05sy4W4luomcVuz'; // Ganti dengan Public Key dari EmailJS

      const templateParams = {
        to_email: 'bandhayudha.undip@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Tidak diisi',
        company: formData.company || 'Tidak diisi',
        job_title: formData.jobTitle || 'Tidak diisi',
        country: formData.country || 'Tidak diisi',
        message: formData.message,
        subject: `Sponsor Baru: ${formData.firstName} ${formData.lastName}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('Email error:', error);
      return false;
    }
  };

  const sendToBackend = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Backend error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validasi form
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        toast({
          title: "Error",
          description: "Mohon lengkapi semua field yang wajib diisi!",
          variant: "destructive",
        });
        return;
      }

      // Kirim ke backend (WhatsApp)
      const backendResponse = await sendToBackend();
      
      // Kirim email menggunakan EmailJS
      const emailSent = await sendEmail();

      if (backendResponse.success) {
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          country: '',
          message: ''
        });

        // Show success toast
        toast({
          title: "Berhasil!",
          description: `Pesan Anda berhasil dikirim${emailSent ? ' ke WhatsApp dan Email' : ' ke WhatsApp'}!`,
          variant: "default",
        });

        // Reset form HTML
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(backendResponse.message || 'Gagal mengirim pesan');
      }

    } catch (error: any) {
      console.error('Submit error:', error);
      toast({
        title: "Error",
        description: error.message || "Gagal mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate or have questions about our robotics projects? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-elevation-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          required 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          required 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        type="text" 
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input 
                        id="jobTitle" 
                        type="text" 
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select onValueChange={handleSelectChange} disabled={isSubmitting}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indonesia">Indonesia</SelectItem>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                          <SelectItem value="singapore">Singapore</SelectItem>
                          <SelectItem value="thailand">Thailand</SelectItem>
                          <SelectItem value="philippines">Philippines</SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="japan">Japan</SelectItem>
                          <SelectItem value="south-korea">South Korea</SelectItem>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        rows={5} 
                        placeholder="Tell us about your project or inquiry..."
                        required 
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-tech-blue hover:bg-tech-blue-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information - Same as before */}
              <div className="space-y-8">
                <Card className="shadow-elevation-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center items-center space-x-6 text-tech-blue">
                      <a
                        href="https://github.com/BANDHAGIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:opacity-80 transition"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/undip-robotics-development-center/?originalSubdomain=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:opacity-80 transition"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/bandhayudha.undip/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:opacity-80 transition"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elevation-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-tech-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">
                          Student Center of Diponegoro University<br />
                          Jl. Prof. Eko Budihardjo, Tembalang<br />
                          Kec. Tembalang, Kota Semarang<br />
                          Jawa Tengah 50275
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-tech-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">bandhayudha.undip@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-tech-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Contact Numbers</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>085942167648 (Project Manager, Aufa Abdillah)</p>
                          <p>0895811430123 (Managerial, Mega Adinda)</p>
                          <p>082324104226 (Team Leader, Helmi Yusuf)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elevation-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-foreground">Monday - Friday</span>
                        <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Saturday</span>
                        <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;