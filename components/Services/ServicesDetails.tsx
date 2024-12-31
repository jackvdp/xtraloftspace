"use client";

import React from "react";
import {services} from "@/components/Services/Service";
import SingleService from "@/components/Services/SingleService";

const ServicesDetails = () => {
    return (
        <div className="w-full flex flex-col relative overflow-hidden">
            {services.map((service, index) => (
                <SingleService key={index} service={service} index={index}/>
            ))}
        </div>
    );
};

export default ServicesDetails;