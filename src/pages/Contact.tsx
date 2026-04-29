import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ExternalLink, Code2, Globe, Calendar, Clock, Sparkles, Coffee } from 'lucide-react';

export default function Contact() {
  const { contact, about } = portfolioData;

  const contactMethods = [
    {
      label: "Email",
      value: contact.email,
      icon: <Mail size={24} />,
      link: `mailto:${contact.email}`,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      description: "Send me an email for formal inquiries or project proposals."
    },
    {
      label: "WhatsApp",
      value: `+91 ${contact.whatsapp}`,
      icon: <MessageCircle size={24} />,
      link: `https://wa.me/91${contact.whatsapp}`,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      description: "Quick chat for fast responses. Usually reply within 1-2 hours."
    },
    {
      label: "Phone",
      value: contact.phone,
      icon: <Phone size={24} />,
      link: `tel:${contact.phone}`,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      description: "Available for direct calls during business hours."
    },
    {
      label: "Location",
      value: contact.location,
      icon: <MapPin size={24} />,
      link: "#",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      description: "Based in Mohali, Punjab. Open to remote and hybrid roles."
    }
  ];

  const availabilityStats = [
    { icon: <Clock size={18} />, label: "Response Time", value: "< 24 Hours" },
    { icon: <Calendar size={18} />, label: "Availability", value: "Mon - Sat" },
    { icon: <Coffee size={18} />, label: "Timezone", value: "IST (UTC+5:30)" },
    { icon: <Sparkles size={18} />, label: "Open for", value: "Internships & Projects" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-4">
          Connect with me
        </div>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
          Let's Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Something</span> Together
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
          I'm currently looking for new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-all active:scale-[0.98]"
            >
              <div className="space-y-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20`}>
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">{method.label}</h3>
                  <p className="text-sm text-indigo-400 font-bold mb-4">{method.value}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{method.description}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-800/50 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">Connect Now</span>
                <ExternalLink size={14} className="text-slate-700 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              {/* Decorative Background Icon */}
              <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 ${method.color}`}>
                {method.icon}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Info & Socials Card */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 h-full flex flex-col justify-between border-indigo-500/20 bg-indigo-500/[0.02]"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Availability & Details</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {availabilityStats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">{stat.label}</p>
                      <p className="text-white font-bold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
                  <div>
                    <p className="text-xs font-black text-white uppercase tracking-wider">{about.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{about.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Find me on social media</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Github size={24} />, link: about.links.github, label: "GitHub", color: "hover:text-white" },
                  { icon: <Linkedin size={24} />, link: about.links.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: <Code2 size={24} />, link: about.links.leetcode, label: "LeetCode", color: "hover:text-yellow-500" },
                  { icon: <MessageCircle size={24} />, link: about.links.whatsapp, label: "WhatsApp", color: "hover:text-emerald-400" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 ${social.color} hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group relative`}
                  >
                    {social.icon}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* New Section: FAQ or Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Project Inquiry",
            desc: "Have a project in mind? I'm ready to help you with data science, web development, or AI integration.",
            icon: <Sparkles className="text-indigo-400" />
          },
          {
            title: "Collaboration",
            desc: "I love working on open-source projects or participating in hackathons. Feel free to reach out!",
            icon: <Globe className="text-cyan-400" />
          },
          {
            title: "Quick Coffee Chat",
            desc: "Want to discuss tech, AI, or just say hello? I'm always up for a quick virtual coffee chat.",
            icon: <Coffee className="text-amber-400" />
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 border-slate-800/50 hover:border-indigo-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
