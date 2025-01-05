import React, {useState} from 'react';
import {motion, AnimatePresence, LayoutGroup} from 'framer-motion';
import {useForm, ValidationError} from '@formspree/react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Progress} from '@/components/ui/progress';
import formQuestions from "@/components/Quote/questions";
import {
    pageVariants,
    pageTransition,
    titleVariants,
    progressVariants,
    questionVariants,
    buttonVariants
} from "@/components/Quote/AnimationVariants";
import FormField from "@/components/Quote/FormField";
import SubmitSucceed from "@/components/Quote/SubmitSucceed";

const QuoteForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [direction, setDirection] = useState(0);
    const [state, handleFormspreeSubmit] = useForm("xgvvplgd");

    const totalSteps = Object.keys(formQuestions).length;
    const currentSection = Object.keys(formQuestions)[step - 1];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNext = () => {
        if (step < totalSteps) {
            setDirection(1);
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setDirection(-1);
            setStep(step - 1);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a formatted message from all form data
        const messageBody = Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        // Create the submission object
        const submissionData = {
            ...formData,
            message: messageBody, // Include formatted message for email body
            _subject: "New Loft Conversion Quote Request" // Custom email subject
        };

        // Submit to Formspree
        await handleFormspreeSubmit(submissionData);
    };

    if (state.succeeded) {
        return <SubmitSucceed/>;
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }}
            className="bg-gray-50 py-24 p-4 flex items-center justify-center"
        >
            <LayoutGroup>
                <motion.div
                    layout
                    className="w-full max-w-2xl"
                    transition={{
                        layout: {duration: 0.3, ease: "easeInOut"}
                    }}
                >
                    <Card className="overflow-hidden">
                        <motion.div layout="position">
                            <CardHeader>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`title-${step}`}
                                        variants={titleVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <CardTitle className="text-2xl mb-4">
                                            {formQuestions[currentSection].title}
                                        </CardTitle>
                                    </motion.div>
                                </AnimatePresence>
                                <motion.div
                                    variants={progressVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <Progress
                                        value={(step / totalSteps) * 100}
                                        className="w-full h-2"
                                    />
                                </motion.div>
                            </CardHeader>

                            <form onSubmit={handleSubmit} method="POST">
                                <CardContent className="overflow-hidden">
                                    <motion.div
                                        layout
                                        transition={{
                                            layout: {duration: 0.3, ease: "easeInOut"}
                                        }}
                                    >
                                        <AnimatePresence mode="wait" custom={direction}>
                                            <motion.div
                                                key={step}
                                                custom={direction}
                                                variants={pageVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={pageTransition}
                                                className="space-y-6"
                                            >
                                                {formQuestions[currentSection].questions.map((question, index) => (
                                                    <motion.div
                                                        key={question.id}
                                                        className="space-y-2"
                                                        variants={questionVariants}
                                                        custom={index}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        layout="position"
                                                    >
                                                        <Label>{question.label}</Label>
                                                        <FormField
                                                            question={question}
                                                            value={formData[question.id] || ''}
                                                            onChange={handleInputChange}
                                                            index={index}
                                                        />
                                                        <ValidationError
                                                            prefix={question.label}
                                                            field={question.id}
                                                            errors={state.errors}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </AnimatePresence>
                                    </motion.div>
                                </CardContent>

                                <motion.div layout="position">
                                    <CardFooter className="flex justify-between">
                                        <motion.div
                                            variants={buttonVariants}
                                            initial="initial"
                                            animate="animate"
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={handlePrevious}
                                                disabled={step === 1}
                                            >
                                                Previous
                                            </Button>
                                        </motion.div>

                                        <motion.div
                                            variants={buttonVariants}
                                            initial="initial"
                                            animate="animate"
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            {step < totalSteps ? (
                                                <Button
                                                    type="button"
                                                    onClick={handleNext}
                                                >
                                                    Next
                                                </Button>
                                            ) : (
                                                <Button
                                                    type="submit"
                                                    disabled={state.submitting}
                                                    className="bg-green-600 hover:bg-green-700"
                                                >
                                                    {state.submitting ? 'Submitting...' : 'Get your Free Quote'}
                                                </Button>
                                            )}
                                        </motion.div>
                                    </CardFooter>
                                </motion.div>
                            </form>
                        </motion.div>
                    </Card>
                </motion.div>
            </LayoutGroup>
        </motion.div>
    );
};

export default QuoteForm;