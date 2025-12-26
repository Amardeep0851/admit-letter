import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";

function SocialLinks() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/admitletter",
      color: "hover:bg-blue-600",
      description: "Follow us on Facebook",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/admitletter",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
      description: "Follow us on Instagram",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@admitletter",
      color: "hover:bg-red-600",
      description: "Subscribe on YouTube",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/919232322929",
      color: "hover:bg-green-500",
      description: "Chat on WhatsApp",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col z-50">
      {/* <h4 className="text-lg font-semibold mb-4">Connect With Us</h4> */}
      <div className="flex flex-wrap gap-3  z-50">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.description}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 bg-red-400/30 rounded-xl flex items-center justify-center ${social.color} transition-all duration-100 group  z-50`}
          >
            <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
