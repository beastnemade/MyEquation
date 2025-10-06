import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashCardProps {
    frontText: string;
    backText: string;
    icon?: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ frontText, backText, icon }) => {
    const [flipped, setFlipped] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimatePresence>
            {!expanded ? (
                <motion.div
                    className="w-64 h-40 cursor-pointer perspective"
                    onHoverStart={() => {
                        setFlipped(true);
                        setExpanded(true);
                    }}
                    onHoverEnd={() => {
                        setFlipped(false);
                        setExpanded(false);
                    }}
                >
                    <motion.div
                        className="relative w-full h-full rounded-xl shadow-xl bg-gradient-to-br from-neo-orange to-neo-yellow"
                        animate={{ rotateY: flipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Front */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-lg font-bold backface-hidden p-4">
                            {icon && (
                                <img
                                    src={icon}
                                    alt={frontText}
                                    className="w-16 h-16 mb-3 object-contain"
                                />
                            )}
                            <span className="text-white text-center">{frontText}</span>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 flex items-center justify-center text-base bg-neo-charcoal text-white font-semibold rotate-y-180 backface-hidden p-6 rounded-xl border border-white/20">
                            <p className="text-center line-clamp-4">{backText}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-neo-charcoal border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-white">{frontText}</h2>
                            {icon && (
                                <img
                                    src={icon}
                                    alt={frontText}
                                    className="w-16 h-16 object-contain"
                                />
                            )}
                        </div>
                        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
                            {backText}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FlashCard;
