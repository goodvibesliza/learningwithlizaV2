import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Play, Download, Mail, Instagram, Linkedin, Youtube, ArrowRight, BookOpen, Video, Users, Star, Leaf, Sun, Mountain } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent } from './components/ui/card'
import './App.css'

// Import placeholder image (you'll replace with actual photos)
const lizaHeadshot = "/card LwL no words.jpg"
const lizaBeachPhoto = "/liza headshot look left.jpg"
const gardenPhoto = "/garden house.jpg"

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle contact form with Formspree
  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Formspree integration - replace with your actual Formspree endpoint
    const form = e.target
    const formData = new FormData(form)
    
    fetch('https://formspree.io/f/mkgbroop', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Thank you for reaching out! I\'ll get back to you soon. 🌟')
        setContactForm({ name: '', email: '', message: '' })
      } else {
        alert('Oops! There was a problem submitting your form')
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form')
    })
  }

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'My Story' },
    { id: 'vibe-check', label: 'Vibe Check' },
    { id: 'letters', label: 'Letters' },
    { id: 'resources', label: 'Resources' },
    { id: 'connect', label: 'Connect' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="text-2xl font-serif font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              Learning with Liza
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://engagenatural.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                EngageNatural <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-border"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a 
                    href="https://engagenatural.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    EngageNatural →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-24 hero-gradient">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Leaf className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-medium">Hey there, I'm Liza</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Take Control.
                <span className="text-gradient block">Systematize. Evolve.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nutrition PhD • Spiritual Guide • Mom • Writer
                <br />
                <span className="text-lg">
                  Learning With Liza is here to help you tap into your higher truth, 
                  to return to the core of your own essence.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('story')}
                  className="group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch My Story
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('letters')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Letters
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={lizaBeachPhoto}
                  alt="Liza Boone - Nutrition PhD and Spiritual Guide"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sun className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-sm font-medium">25+ Years</div>
                  <div className="text-xs text-muted-foreground">Natural Products</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              My Journey of <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From trauma to triumph, from shadows to sovereignty. This is the story of how I learned 
              that we all hold the key to our own transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Spiritual Connection</h3>
                    <p className="text-muted-foreground">
                      I always felt very connected to a higher guidance and source in my life. 
                      This connection became my anchor through every transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Healing Journey</h3>
                    <p className="text-muted-foreground">
                      I have explored, transmuted, and transformed personal trauma in my life. 
                      I traversed inner shadows and returned with peace. My life is my greatest testimony.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Serving Others</h3>
                    <p className="text-muted-foreground">
                      Here to assist you in transforming your experience of reality, my purpose is to 
                      remind you that you are sovereign, that you choose, that you hold the key.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" onClick={() => scrollToSection('vibe-check')}>
                  <Video className="w-5 h-5 mr-2" />
                  Watch Vibe Check Videos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={lizaHeadshot}
                alt="Liza Boone - Nutrition PhD"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-gradient">
                My results from 25 years of holistic longevity
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Feel 25 at 50</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Increased energy and focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Bloodwork and teeth &lt; 30yo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Reduced stress and brain fog</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                As an organic horticulturalist turned PhD in nutrition, I've developed effective systems 
                for optimizing holistic health and making life better. These are my real results from 
                25 years of dedicated practice.
              </p>

              <Button size="lg" onClick={() => scrollToSection('resources')}>
                <Download className="w-5 h-5 mr-2" />
                Get My Free Resources
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={gardenPhoto}
                alt="Liza in her organic garden"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vibe Check Section */}
      <section id="vibe-check" className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-gradient">Vibe Check</span> Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Raw, authentic moments from my journey. Weekly insights, life updates, 
              and behind-the-scenes glimpses into authentic living and transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video placeholders - replace with actual YouTube embeds */}
            {[
              {
                title: "Finding Your Sovereignty",
                description: "A deep dive into what it means to be truly sovereign in your life choices and personal power.",
                thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              },
              {
                title: "Trauma to Transformation",
                description: "My personal journey through healing and how you can navigate your own path to peace.",
                thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
              },
              {
                title: "Behind the Scenes: EngageNatural",
                description: "The story behind creating a platform that connects hearts and minds in the natural products industry.",
                thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Youtube className="w-5 h-5 mr-2" />
              View All Videos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Letters Section */}
      <section id="letters" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              The <span className="text-gradient">Liza Letters</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reflections on transformation, sovereignty, and the art of authentic living. 
              New posts shared when inspiration strikes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Take Control. Systematize. Evolve.",
                excerpt: "Learning With Liza is here to help you tap into your higher truth, to return to the core of your own essence. Discover the power of sovereignty in your daily choices...",
                date: "December 2024",
                readTime: "5 min read"
              },
              {
                title: "The Art of Sovereignty",
                excerpt: "What does it truly mean to be sovereign? It's not about control—it's about choice, consciousness, and connection to your highest self...",
                date: "November 2024",
                readTime: "7 min read"
              },
              {
                title: "From Trauma to Transformation",
                excerpt: "My journey through the shadows taught me that our greatest wounds often become our greatest gifts. Here's how to traverse your own inner landscape...",
                date: "October 2024",
                readTime: "6 min read"
              }
            ].map((letter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span>{letter.date}</span>
                      <span className="mx-2">•</span>
                      <span>{letter.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-serif">{letter.title}</h3>
                    <p className="text-muted-foreground mb-4">{letter.excerpt}</p>
                    <Button variant="ghost" className="p-0 h-auto">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Free <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simplify and gain clarity on feeling and looking younger for longer. 
              Tools and guides to support your journey of transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Printable Life Tracker",
                description: "Keep track of which diet/lifestyle changes work and which don't as you systematize and blissfully evolve.",
                icon: Download,
                available: true
              },
              {
                title: "Daily Sovereignty Practice",
                description: "A simple morning routine to connect with your inner wisdom and set intentions from your highest self.",
                icon: Sun,
                available: true
              },
              {
                title: "My Optimized Meal Plan",
                description: "Want to see what I eat every day? This is my goal and daily meal plan for optimal health and energy.",
                icon: Leaf,
                available: false
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                    <p className="text-muted-foreground mb-6">{resource.description}</p>
                    <Button 
                      variant={resource.available ? "default" : "secondary"} 
                      disabled={!resource.available}
                      className="w-full"
                    >
                      {resource.available ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </>
                      ) : (
                        "Coming Soon"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to dive deeper? I'd love to hear from you and support your journey of transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Other Ways to Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">My Latest Project</div>
                      <a 
                        href="https://engagenatural.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        EngageNatural.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow the Journey</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <Card className="floating-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Individual Coaching</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I am currently accepting a limited number of individual clients for deep transformational work. 
                    Connect if you're seeking guidance through profound cycles of growth in your inner and outer world.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection('connect')}>
                    Contact Me
                  </Button>
                </CardContent>
              </Card>

              <Card className="floating-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Consulting Services</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I help companies innovate with programs and validated content while reaching 
                    the right customers through trust and transparency. I have helped 4 out of the 
                    top 10 brands in the supplement industry over the past 25 years.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection('connect')}>
                    Business Consulting
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-2xl font-serif font-bold text-primary mb-2">Learning with Liza</div>
              <p className="text-muted-foreground">
                Created by Liza Boone — Nutrition PhD, Spiritual Guide, Founder of 
                <a href="https://engagenatural.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  EngageNatural
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('home')}>
                Home
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('story')}>
                Story
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('connect')}>
                Connect
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Learning with Liza. All rights reserved. Made with 💚 for authentic living.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

