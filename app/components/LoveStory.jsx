import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

export default function LoveStory() {
  const milestones = [
    { 
      date: "May 2021", 
      title: "First Meeting", 
      description: "We met at a coffee shop in Bangkok. The conversation flowed naturally, and we knew this was something special.",
      icon: Heart
    },
    { 
      date: "December 2021", 
      title: "First Trip Together", 
      description: "Our adventure to Chiang Mai brought us closer. We discovered our shared love for adventure and exploration.",
      icon: MapPin
    },
    { 
      date: "February 2024", 
      title: "The Proposal", 
      description: "Under the stars at Koh Samui beach, the question was asked and answered with a joyful 'Yes!'",
      icon: Heart
    },
    { 
      date: "March 2026", 
      title: "Our Wedding Day", 
      description: "The beginning of our forever journey together, surrounded by family and friends.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">
            Our <span className="text-rose-500">Love Story</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every love story is beautiful, but ours is our favorite. 
            Join us as we share the moments that brought us together.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>
          
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2" />
                
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100/50">
                    <p className="text-rose-500 font-medium mb-2">{milestone.date}</p>
                    <h3 className="text-2xl font-light text-slate-800 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}