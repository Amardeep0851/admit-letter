"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';
import NewsCard from "./news-card";

gsap.registerPlugin(ScrollTrigger);

const Featured3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Featured media outlets/platforms
  const featuredNews = [
    {
      name: "ANI",
      logo: "/images/featured/1.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      title: "New Immigration Policy Changes Affect Thousands of Families Nationwide",
      outlet: "The Washington Post",
      link: "https://example.com/article1",
      date: "Dec 15, 2024"
    },
    {
      name: "Flipboard",
      logo: "/images/featured/2.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80",
      title: "Immigration Law Firm Wins Major Case in Federal Court",
      outlet: "Reuters",
      link: "https://example.com/article2",
      date: "Dec 10, 2024"
    },
    {
      name: "Dailyhunt",
      logo: "/images/featured/3.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      title: "Expert Analysis: Understanding Recent USCIS Processing Updates",
      outlet: "CNN",
      link: "https://example.com/article3",
      date: "Dec 8, 2024"
    },
    {
      name: "Google News",
      logo: "/images/featured/4.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: "Immigration Attorneys Provide Free Consultation to Community Members",
      outlet: "The New York Times",
      link: "https://example.com/article4",
      date: "Dec 5, 2024"
    },
    {
      name: "Medium",
      logo: "/images/featured/5.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      title: "Breaking: New Visa Category Announced for Tech Professionals",
      outlet: "BBC News",
      link: "https://example.com/article5",
      date: "Dec 1, 2024"
    },
    {
      name: "Entrepreneur World",
      logo: "/images/featured/6.png",
      grayscale: true,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      title: "Immigration Success Stories: Dreams Become Reality",
      outlet: "USA Today",
      link: "https://example.com/article6",
      date: "Nov 28, 2024"
    },
    {
      name: "Attention India News",
      logo: "/images/featured/7.png",
      grayscale: true,
       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Legal Expert Discusses Path to Citizenship in Exclusive Interview",
      outlet: "Forbes",
      link: "https://example.com/article7",
      date: "Nov 25, 2024"
    },
    {
      name: "The First Talk",
      logo: "/images/featured/8.png",
      grayscale: true,
       image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      title: "Immigration Reform: What You Need to Know in 2024",
      outlet: "Bloomberg",
      link: "https://example.com/article8",
      date: "Nov 20, 2024"
    },
  ];

  useEffect(() => {
    const logos = document.querySelectorAll('.featured-logo');
    
    logos.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        {
          opacity: 0.7,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logo,
            start: 'top 75%',
            end: 'top 0%',
            scrub: true,
            // markers:true
            // toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-zinc-100 to-zinc-50 py-20 px-4 xl:px-0 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl " />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl " />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <div className="flex justify-center items-center">
            <h2 
              className="flex gap-2 items-center font-semibold bg-red-100 text-red-600 px-4 py-1.5  rounded-md mb-4 shadow-sm/20">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Media Presence & Mentions</span>
          </h2>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Media <span className="text-red-700"> Coverage</span>
          </h2>
          
          <p className="text-lg  text-gray-600  mx-auto">
            Our announcements and content have appeared across various media and content platforms.
          </p>
        </motion.header>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 min-[432px]:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 md:gap-6 items-center ">
          {featuredNews.map((item, index) => (
            <div
              key={index}
              className="featured-logo group"
            >
              <NewsCard
              image={item.image}
              title={item.title}
              outlet={item.outlet}
              link={item.link}
              date={item.date}
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Featured3;