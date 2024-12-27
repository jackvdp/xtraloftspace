import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useForm} from '@formspree/react';
import {Check, Loader2, ArrowRight} from "lucide-react";

const ContactSection = () => {
    const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, staggerChildren: 0.1}
        }
    };

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
            scale: 0.95,
            rotateX: -10
        },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-24 px-4">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.6}}
                >
                    <motion.div variants={cardVariants} className="text-center space-y-4">
                        <div className="relative inline-block">
                            <h2 className="text-4xl font-bold text-center">Get in {' '}
                                <span className="font-thin">touch</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 max-w-lg mx-auto text-lg">
                            Have a question or want to work together? Drop us a message and we&apos;ll get back to you
                            as soon as possible.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.3}}
                >
                    <motion.div variants={cardVariants}>
                        <Card className="group relative overflow-hidden  bg-white">
                            <CardContent className="p-8 space-y-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {['name', 'email', 'message'].map((field) => (
                                        <motion.div
                                            key={field}
                                            variants={itemVariants}
                                            className="relative space-y-2"
                                            animate={focusedField === field ? {scale: 1.02} : {scale: 1}}
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
                                                    className="min-h-32 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-lg"
                                                />
                                            ) : (
                                                <Input
                                                    id={field}
                                                    name={field}
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    required
                                                    onFocus={() => setFocusedField(field)}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-lg"
                                                />
                                            )}
                                        </motion.div>
                                    ))}

                                    <motion.div variants={itemVariants}>
                                        <Button
                                            type="submit"
                                            disabled={state.submitting}
                                            size="lg"
                                            className="group relative bg-black hover:bg-gray-900 text-white rounded-full h-16 text-lg overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
                                                <div className="flex items-center justify-center h-16">
                                                    {state.submitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-6 w-6 animate-spin"/>
                                                            Sending...
                                                        </>
                                                    ) : state.succeeded ? (
                                                        <>
                                                            <Check className="mr-2 h-6 w-6"/>
                                                            Message Sent!
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <ArrowRight
                                                                className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-center h-16">
                                                    {state.submitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-6 w-6 animate-spin"/>
                                                            Sending...
                                                        </>
                                                    ) : state.succeeded ? (
                                                        <>
                                                            <Check className="mr-2 h-6 w-6"/>
                                                            Message Sent!
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <ArrowRight
                                                                className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactSection;