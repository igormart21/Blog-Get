'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, Shield, Star } from 'lucide-react';
import { siteConfig } from '@/data/config';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#0B2E54] to-primary-blue text-white overflow-hidden min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll"
                    style={{
                        backgroundImage: "url('/images/hero-background.png')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-soft/90 via-primary-soft/70 to-primary-soft/30"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[80vh] sm:min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left z-10"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6"
                        >
                            Agende sua{' '}
                            <span className="text-primary-green">Visita Técnica</span>{' '}
                            gratuita agora
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-2xl font-medium mb-6 sm:mb-8 text-gray-100"
                        >
                            e garanta <span className="text-primary-green font-bold">10% de desconto</span> no seu primeiro atendimento
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                        >
                            <a className="inline-flex items-center w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href={`https://wa.me/${siteConfig.whatsapp}`}>
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg>
                                Solicitar Orçamento Agora
                            </a>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4"
                        >
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-primary-green" />
                                <span className="text-sm font-medium">Atendimento 24h</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-primary-green" />
                                <span className="text-sm font-medium">Garantia 90 dias</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-primary-green" />
                                <span className="text-sm font-medium">Orçamento Grátis</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-primary-green" />
                                <span className="text-sm font-medium">Resposta Rápida</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative z-10"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Phone className="w-12 h-12 text-primary-soft" />
                                </div>
                                <h3 className="text-2xl font-poppins font-bold mb-4">
                                    Emergência?
                                </h3>
                                <p className="text-gray-200 mb-6">
                                    Estamos prontos para resolver seu problema de desentupimento a qualquer hora do dia!
                                </p>
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg>
                                    Solicitar Orçamento Agora
                                </a>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-primary-green rounded-full flex items-center justify-center opacity-90 shadow-lg"
                        >
                            <span className="text-primary-soft font-bold text-xl">24h</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-red rounded-full flex items-center justify-center opacity-90 shadow-lg"
                        >
                            <Shield className="w-6 h-6 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
