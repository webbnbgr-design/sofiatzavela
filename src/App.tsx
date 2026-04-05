import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Users, 
  Gavel, 
  Building2, 
  Briefcase, 
  Star,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Το Γραφείο', href: '#about' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Κριτικές', href: '#reviews' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className={cn("w-8 h-8", isScrolled ? "text-legal-gold" : "text-white")} />
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold text-lg leading-tight",
              isScrolled ? "text-legal-navy" : "text-white"
            )}>
              Σοφία Τζαβέλλα
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-widest font-medium",
              isScrolled ? "text-legal-gold" : "text-white/80"
            )}>
              & Συνεργάτες
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-legal-gold",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+302103600000"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all",
              isScrolled 
                ? "bg-legal-navy text-white hover:bg-legal-gold" 
                : "bg-white text-legal-navy hover:bg-legal-gold hover:text-white"
            )}
          >
            <Phone className="w-4 h-4" />
            210 3600000
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-legal-navy" : "text-white"} /> : <Menu className={isScrolled ? "text-legal-navy" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium hover:text-legal-gold py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+302103600000"
              className="flex items-center justify-center gap-2 bg-legal-navy text-white py-3 rounded-lg font-bold"
            >
              <Phone className="w-4 h-4" />
              Κλήση Τώρα
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Legal Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-legal-navy/90 via-legal-navy/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-legal-gold/20 border border-legal-gold/30 text-legal-gold text-xs font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3 h-3" />
            Εμπειρία από το 2006
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            Αποτελεσματική <br />
            <span className="text-legal-gold italic">Νομική Εκπροσώπηση</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
            Στο Δικηγορικό Γραφείο Σοφία Τζαβέλλα & Συνεργάτες, συνδυάζουμε την απόλυτη νομική κατάρτιση με την ταχύτητα στην επίλυση των υποθέσεών σας.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="px-8 py-4 bg-legal-gold text-white font-bold rounded-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2 group"
            >
              Οι Υπηρεσίες Μας
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+302103600000" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-legal-gold" />
              210 3600000
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {[
            { label: 'Έτη Εμπειρίας', value: '18+' },
            { label: 'Επιτυχημένες Υποθέσεις', value: '2.500+' },
            { label: 'Εξειδικευμένοι Συνεργάτες', value: '12' },
            { label: 'Ικανοποιημένοι Πελάτες', value: '99%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                alt="Law Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs border-l-4 border-legal-gold">
              <p className="text-slate-600 italic leading-relaxed">
                "Η εμπιστοσύνη των πελατών μας από το 2006 αποτελεί την κινητήριο δύναμη για την συνεχή μας εξέλιξη."
              </p>
              <p className="mt-4 font-serif font-bold text-legal-navy">— Σοφία Τζαβέλλα</p>
            </div>
          </motion.div>

          <div>
            <span className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4 block">Το Γραφείο Μας</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-navy mb-8 leading-tight">
              Ολοκληρωμένες Λύσεις με <br />
              <span className="text-legal-gold">Εξειδικευμένη Ομάδα</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Από την ίδρυσή μας το 2006, το γραφείο μας έχει καθιερωθεί ως ένας αξιόπιστος σύμβουλος για ιδιώτες και επιχειρήσεις. Η φιλοσοφία μας βασίζεται στην απόλυτη νομική κατάρτιση και την ταχύτητα στην επίλυση των υποθέσεων.
              </p>
              <p>
                Πλαισιωνόμαστε από ένα δίκτυο εξειδικευμένων συνεργατών — <span className="font-bold text-legal-navy">δικηγόρους, δασολόγους και μηχανικούς</span> — ώστε να προσφέρουμε ολοκληρωμένες λύσεις σε σύνθετα ζητήματα, ιδιαίτερα στον τομέα του Κτηματολογίου και των Δασικών Χαρτών.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: CheckCircle2, text: 'Άμεση Ανταπόκριση' },
                { icon: Users, text: 'Πολυεπιστημονική Ομάδα' },
                { icon: Gavel, text: 'Δικαστική & Εξώδικη Επίλυση' },
                { icon: Building2, text: 'Στρατηγική Συμβουλευτική' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-legal-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-legal-gold" />
                  </div>
                  <span className="font-medium text-legal-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Κτηματολόγιο & Δασικοί Χάρτες',
      description: 'Εξειδικευμένες ενέργειες για την προστασία της ακίνητης περιουσίας σας. Αναλαμβάνουμε ενστάσεις, διορθώσεις αρχικών εγγραφών και υποθέσεις δασικής νομοθεσίας με την υποστήριξη δασολόγων και μηχανικών.',
      icon: MapPin,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Αστικό Δίκαιο',
      description: 'Ολοκληρωμένη υποστήριξη σε θέματα κληρονομικού δικαίου, οικογενειακών διαφορών (διαζύγια, επιμέλεια) και σύνταξης ή ελέγχου συμβάσεων κάθε είδους.',
      icon: Scale,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Εμπορικό & Εργατικό Δίκαιο',
      description: 'Νομική θωράκιση επιχειρήσεων και προστασία δικαιωμάτων εργαζομένων. Αναλαμβάνουμε εταιρικές συστάσεις, εμπορικές συμβάσεις και εργατικές διαφορές.',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4 block">Τομείς Εξειδίκευσης</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-navy mb-6">Υπηρεσίες Υψηλού Επιπέδου</h2>
          <p className="text-slate-500 text-lg">
            Προσφέρουμε εξειδικευμένες νομικές υπηρεσίες με έμφαση στην αποτελεσματικότητα και την πλήρη κάλυψη των αναγκών σας.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-legal-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500", service.color)}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4 group-hover:text-legal-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Γιώργος Παπαδόπουλος',
      role: 'Ιδιοκτήτης Ακινήτου',
      text: 'Εξαιρετική δουλειά στο θέμα του Κτηματολογίου. Η κ. Τζαβέλλα και η ομάδα της έλυσαν ένα πρόβλημα που με ταλαιπωρούσε χρόνια μέσα σε λίγους μήνες.',
      rating: 5
    },
    {
      name: 'Ελένη Κωνσταντίνου',
      role: 'Επιχειρηματίας',
      text: 'Επαγγελματισμός και σιγουριά. Το γραφείο παρέχει πλήρη νομική κάλυψη στην εταιρεία μας με ταχύτητα και συνέπεια.',
      rating: 5
    },
    {
      name: 'Νίκος Σταματίου',
      role: 'Ιδιώτης',
      text: 'Πολύ καλή εμπειρία σε κληρονομική υπόθεση. Καταρτισμένοι συνεργάτες που εξηγούν τα πάντα με απλά λόγια.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-legal-navy text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-legal-gold/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-legal-gold/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4 block">Τι Λένε οι Πελάτες Μας</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Εμπιστοσύνη & Αποτελέσματα</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-legal-gold text-legal-gold" />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-legal-gold/20 flex items-center justify-center text-legal-gold font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4 block">Επικοινωνία</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-navy mb-8">Είμαστε στη Διάθεσή σας</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Το γραφείο μας βρίσκεται στην καρδιά της Αθήνας. Επικοινωνήστε μαζί μας τηλεφωνικά για να προγραμματίσουμε το ραντεβού σας και να συζητήσουμε την υπόθεσή σας.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-legal-gold transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-legal-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-legal-navy mb-1">Διεύθυνση</h4>
                  <p className="text-slate-600">Ασκληπιού 67, Αθήνα, Τ.Κ. 106 80</p>
                  <p className="text-slate-400 text-sm mt-1">Κέντρο Αθήνας</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-legal-gold transition-colors duration-300">
                  <Phone className="w-6 h-6 text-legal-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-legal-navy mb-1">Τηλέφωνο</h4>
                  <a href="tel:+302103600000" className="text-2xl font-bold text-legal-navy hover:text-legal-gold transition-colors">
                    210 3600000
                  </a>
                  <p className="text-slate-400 text-sm mt-1">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-legal-gold/5 rounded-2xl border border-legal-gold/10">
              <h4 className="text-xl font-serif font-bold text-legal-navy mb-4">Προγραμματισμός Ραντεβού</h4>
              <p className="text-slate-600 mb-6">
                Για την καλύτερη εξυπηρέτησή σας, παρακαλούμε καλέστε απευθείας στη γραμματεία μας. Δεν υποστηρίζεται ηλεκτρονική κράτηση ραντεβού.
              </p>
              <a 
                href="tel:+302103600000" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-legal-navy text-white font-bold rounded-lg hover:bg-legal-gold transition-all"
              >
                <Phone className="w-5 h-5" />
                Κλήση για Ραντεβού
              </a>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
            {/* Map Placeholder - In a real app, use Google Maps Embed */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center flex-col p-12 text-center">
              <MapPin className="w-16 h-16 text-slate-400 mb-4" />
              <h4 className="text-2xl font-serif font-bold text-slate-500 mb-2">Χάρτης Τοποθεσίας</h4>
              <p className="text-slate-400 max-w-xs">
                Ασκληπιού 67, Αθήνα <br />
                (Πλησίον Μετρό Πανεπιστήμιο / Ομόνοια)
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Ασκληπιού+67+Αθήνα" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 px-6 py-3 bg-white text-legal-navy font-bold rounded-lg shadow-md hover:bg-slate-50 transition-all"
              >
                Άνοιγμα στους Χάρτες
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-legal-gold" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight">Σοφία Τζαβέλλα</span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-legal-gold">& Συνεργάτες</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Παροχή εξειδικευμένων νομικών υπηρεσιών από το 2006. Η ομάδα μας αποτελείται από δικηγόρους, δασολόγους και μηχανικούς για την πληρέστερη κάλυψη των υποθέσεών σας.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Σύνδεσμοι</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-legal-gold transition-colors">Αρχική</a></li>
              <li><a href="#about" className="hover:text-legal-gold transition-colors">Το Γραφείο</a></li>
              <li><a href="#services" className="hover:text-legal-gold transition-colors">Υπηρεσίες</a></li>
              <li><a href="#reviews" className="hover:text-legal-gold transition-colors">Κριτικές</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Τομείς</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Κτηματολόγιο</li>
              <li>Δασικοί Χάρτες</li>
              <li>Αστικό Δίκαιο</li>
              <li>Εμπορικό Δίκαιο</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Δικηγορικό Γραφείο Σοφία Τζαβέλλα & Συνεργάτες. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-legal-gold/30 selection:text-legal-navy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href="tel:+302103600000"
        className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-legal-gold text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
