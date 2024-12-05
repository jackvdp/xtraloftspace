import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from '@formspree/react';
import { Check, Send, Loader2, ArrowRight } from "lucide-react";

const ContactSection = () => {
    const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full max-w-4xl mx-auto pb-24 px-4">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
                <motion.div variants={itemVariants} className="text-center space-y-4">
                    <div className="relative inline-block">
                        <h2 className="text-4xl font-bold text-center">Get in touch</h2>
                    </div>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Have a question or want to work together? Drop me a message and we'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <Card className="group relative overflow-hidden border-2 border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {['name', 'email', 'message'].map((field) => (
                                <motion.div
                                    key={field}
                                    variants={itemVariants}
                                    className="relative space-y-2"
                                    animate={focusedField === field ? { scale: 1.02 } : { scale: 1 }}
                                >
                                    <Label htmlFor={field} className="text-lg font-medium">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </Label>
                                    {field === 'message' ? (
                                        <Textarea
                                            id={field}
                                            name={field}
                                            required
                                            onFocus={() => setFocusedField(field)}
                                            onBlur={() => setFocusedField(null)}
                                            className="min-h-32 bg-white/50 border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-xl"
                                        />
                                    ) : (
                                        <Input
                                            id={field}
                                            name={field}
                                            type={field === 'email' ? 'email' : 'text'}
                                            required
                                            onFocus={() => setFocesedField(field)}
                                            onBlur={() => setFocusedField(null)}
                                            className="bg-white/50 border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-xl"
                                        />
                                    )}
                                </motion.div>
                            ))}

                            <motion.div variants={itemVariants}>
                                <Button
                                    type="submit"
                                    disabled={state.submitting}
                                    size="lg"
                                    className="group relative bg-blue-500 hover:bg-blue-600 text-white rounded-full h-16 text-lg"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        {state.submitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                                Sending...
                                            </>
                                        ) : state.succeeded ? (
                                            <>
                                                <Check className="mr-2 h-6 w-6" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default ContactSection;