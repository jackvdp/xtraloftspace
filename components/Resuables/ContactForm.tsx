import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, Check, Loader2} from "lucide-react";
import React, {useState} from "react";
import {useForm} from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mlddodpp");
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.3}}
        >
            <motion.div variants={cardVariants}>
                <Card className="relative overflow-hidden bg-white">
                    <CardContent className="p-8 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {['name', 'email', 'phone', 'message'].map((field) => (
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
                                            type={field === 'email' ? 'email' :
                                                field === 'phone' ? 'tel' : 'text'}
                                            required={field !== 'phone'}
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
    )
}