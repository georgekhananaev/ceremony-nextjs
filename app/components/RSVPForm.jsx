import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Check } from 'lucide-react';

export default function RSVPForm() {
    const [formData, setFormData] = useState({
        guest_name: '',
        email: '',
        phone: '',
        attending: '',
        guest_count: 1,
        dietary_restrictions: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitted(true);
        } catch (err) {
            setError('There was an error submitting your RSVP. Please try again.');
        }
        setIsSubmitting(false);
    };

    if (submitted) {
        return (
            <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-12 shadow-xl border border-rose-100/50"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-4xl font-light text-slate-800 mb-4">Thank You!</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Your RSVP has been received. We're so excited to celebrate with you!
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
            <div className="max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">
                        <span className="text-rose-500">RSVP</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Please let us know if you'll be joining us for our special day.
                        We can't wait to celebrate with you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100/50"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="guest_name" className="block text-slate-700 font-medium">Full Name *</label>
                                <input
                                    id="guest_name"
                                    type="text"
                                    value={formData.guest_name}
                                    onChange={(e) => handleInputChange('guest_name', e.target.value)}
                                    className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-slate-700 font-medium">Email Address *</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-slate-700 font-medium">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-slate-700 font-medium">Will you be attending? *</label>
                                <select 
                                    value={formData.attending} 
                                    onChange={(e) => handleInputChange('attending', e.target.value)}
                                    className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                                    required
                                >
                                    <option value="">Please select</option>
                                    <option value="yes">Yes, I'll be there! 💕</option>
                                    <option value="no">Sorry, I can't make it 😔</option>
                                    <option value="maybe">I'm not sure yet</option>
                                </select>
                            </div>

                            {formData.attending === 'yes' && (
                                <div className="space-y-2">
                                    <label className="block text-slate-700 font-medium">Number of Guests</label>
                                    <select
                                        value={formData.guest_count.toString()}
                                        onChange={(e) => handleInputChange('guest_count', parseInt(e.target.value))}
                                        className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                                    >
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {formData.attending === 'yes' && (
                            <div className="space-y-2">
                                <label htmlFor="dietary_restrictions" className="block text-slate-700 font-medium">Dietary Restrictions or Allergies</label>
                                <input
                                    id="dietary_restrictions"
                                    type="text"
                                    value={formData.dietary_restrictions}
                                    onChange={(e) => handleInputChange('dietary_restrictions', e.target.value)}
                                    placeholder="Please let us know about any dietary needs"
                                    className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-slate-700 font-medium">Message for the Couple</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                placeholder="Share your wishes and excitement with us!"
                                className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:border-rose-400 h-24"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.guest_name || !formData.email || !formData.attending}
                            className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-4 text-lg font-medium rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    Sending RSVP...
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    Send RSVP
                                </div>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}