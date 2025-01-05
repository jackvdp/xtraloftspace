import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {motion} from "framer-motion";
import {questionVariants} from "@/components/Quote/AnimationVariants";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import React from "react";

const FormField = ({question, value, onChange, index}) => {
    const inputVariants = {
        hover: {scale: 1.02, transition: {duration: 0.2}},
        tap: {scale: 0.98},
        focus: {scale: 1.02, boxShadow: "0 0 0 2px rgba(0,0,0,0.1)"}
    };

    switch (question.type) {
        case 'radio':
            return (
                <RadioGroup value={value} onValueChange={(value) => onChange(question.id, value)}>
                    {question.options.map((option, optionIndex) => (
                        <motion.div
                            key={option}
                            className="flex items-center space-x-2"
                            variants={questionVariants}
                            custom={index + (optionIndex * 0.1)}
                            whileHover="hover"
                            whileTap="tap"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <RadioGroupItem value={option} id={option}/>
                            <Label htmlFor={option}>{option}</Label>
                        </motion.div>
                    ))}
                </RadioGroup>
            );

        case 'select':
            return (
                <motion.div
                    variants={inputVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Select value={value} onValueChange={(value) => onChange(question.id, value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={`Select ${question.label.toLowerCase()}`}/>
                        </SelectTrigger>
                        <SelectContent>
                            {question.options.map((option) => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </motion.div>
            );

        case 'number':
            return (
                <motion.div
                    variants={inputVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Input
                        type="number"
                        min="0"
                        value={value}
                        onChange={(e) => onChange(question.id, e.target.value)}
                        required={question.required}
                        className="transition-all duration-200"
                    />
                </motion.div>
            );

        default:
            return (
                <motion.div
                    variants={inputVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Input
                        type={question.type}
                        value={value}
                        onChange={(e) => onChange(question.id, e.target.value)}
                        required={question.required}
                        className="transition-all duration-200"
                    />
                </motion.div>
            );
    }
};

export default FormField