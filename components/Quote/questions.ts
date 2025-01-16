const formQuestions = {
    projectType: {
        title: "Project Type",
        questions: [
            {
                id: 'projectType',
                label: 'Would you like a Loft Conversion or Extension?',
                type: 'radio',
                options: ['Loft Conversion', 'Extension', 'Both'],
                required: true
            }
        ]
    },
    // Loft Conversion Sections
    loftPlanning: {
        title: "Initial Planning",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'loftPlans',
                label: 'Do you have Architectural plans and Structural calculations?',
                type: 'radio',
                options: ['Yes', 'No', 'Xtra loft space to include in Quote'],
                required: true
            }
        ]
    },
    propertyInfo: {
        title: "Property Information",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'propertyType',
                label: 'What type of property do you have?',
                type: 'radio',
                options: ['House', 'Bungalow', 'Townhouse', 'Maisonette'],
                required: true
            },
            {
                id: 'propertyAttachment',
                label: 'Is your property Detached, Semi-Detached, or Attached?', // Reordered options logically
                type: 'radio',
                options: ['Detached', 'Semi-Detached', 'Attached'],
                required: true
            },
            {
                id: 'roofConstruction',
                label: 'What type of roof construction do you have?',
                type: 'radio',
                options: ['Truss Rafter', 'Conventional', "Don't know"],
                required: true
            }
        ]
    },
    currentRooms: {
        title: "Current Property Layout",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'bedrooms',
                label: 'How many bedrooms are there?',
                type: 'select',
                options: ['1', '2', '3', '4', '5', '6'],
                required: true
            },
            {
                id: 'bathrooms',
                label: 'How many bathrooms are there?',
                type: 'select',
                options: ['1', '2', '3', '4', '5', '6'],
                required: true
            }
        ]
    },
    loftCurrent: {
        title: "Current Loft Status",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'loftItems',
                label: 'Do you have any of these items in your loft?', // Reworded for clarity
                type: 'radio',
                options: ['Water Tank', 'Boiler', 'Cylinder', "Don't know"],
                required: true
            },
            {
                id: 'roofTiling',
                label: 'Does your roof need retiling or slating?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            }
        ]
    },
    loftRequirements: {
        title: "New Loft Requirements",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'extraBedrooms',
                label: 'How many Xtra bedrooms would you like in the Loft space?',
                type: 'select',
                options: ['1', '2', '3', '4', "Don't know"],
                required: true
            },
            {
                id: 'extraBathrooms',
                label: 'How many Xtra bathrooms would you like in the loft space?',
                type: 'select',
                options: ['1', '2', "Don't know"],
                required: true
            }
        ]
    },
    loftDesign: {  // Combined features and L-shape
        title: "Loft Design Features",
        showIf: (formData) => ['Loft Conversion', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'lShapeLoft',
                label: 'Would you like an L-Shape Loft Conversion?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            },
            {
                id: 'hipToGables',
                label: 'How many Hip to Gables does your loft need?',
                type: 'radio',
                options: ['0', '1', '2', "Don't know"],
                required: true
            },
            {
                id: 'veluxWindows',
                label: 'How many Velux windows would you like?',
                type: 'select',
                options: ['1', '2', '3', '4', "Don't know"],
                required: true
            }
        ]
    },
    extensionPlanning: {
        title: "Extension Planning",
        showIf: (formData) => ['Extension', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'extensionPlans',
                label: 'Do you have Architectural plans and structural calculations?',
                type: 'radio',
                options: ['Yes', 'No', 'Xtra Loft Space to include in quote'],
                required: true
            },
            {
                id: 'extensionPropertyAttachment',
                label: 'Is your property Attached, Detached or semi detached?',
                type: 'radio',
                options: ['Attached', 'Detached', 'Semi detached'],
                required: true
            }
        ]
    },
    extensionType: {
        title: "Extension Type",
        showIf: (formData) => ['Extension', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'extensionType',
                label: 'What extension would you like?',
                type: 'radio',
                options: ['Single rear', 'Double rear', 'Single side', 'Double side', 'Side and rear', 'Porch', 'Other'],
                required: true
            }
        ]
    },
    siteClearance: {
        title: "Site Assessment", // Changed title to be more professional
        questions: [
            {
                id: 'demolitionNeeds',
                label: 'What needs demolishing to build the extension?',
                type: 'radio',
                options: ['Nothing', 'Garage', 'Original extension', 'Conservatory', 'Out house toilet', 'Decking or patio', 'A Lean-to', "Don't know"],
                required: true
            },
            {
                id: 'drainageIssues',
                label: 'Are there any drainage manholes or drain lines where the extension will be built?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            }
        ]
    },
    extensionDesign: {
        title: "Extension Design",
        showIf: (formData) => ['Extension', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'roofType',
                label: 'What roof style would you like on the extension?',
                type: 'radio',
                options: ['Flat roof', 'Pitched roof', 'Table top roof', "Don't know"],
                required: true
            },
            {
                id: 'masonryFinish',
                label: 'What masonry finish would you like on your extension?',
                type: 'radio',
                options: ['Face brickwork', 'Blockwork and rendered', 'Cladding', "Don't know"],
                required: true
            }
        ]
    },
    propertyChanges: {
        title: "Additional Modifications",
        showIf: (formData) => ['Extension', 'Both'].includes(formData.projectType),
        questions: [
            {
                id: 'newKitchen',
                label: 'Would you like a new kitchen in your extension?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            },
            {
                id: 'wallRemoval',
                label: 'Do walls need to be removed and supported in the house to accommodate the extension?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            },
            {
                id: 'boilerChanges',
                label: 'Does Boiler or cylinder need moving to new position?',
                type: 'radio',
                options: ['Yes', 'No', 'New heating system needed', "Don't know"],
                required: true
            }
        ]
    },
    contactInfo: {
        title: "Contact Information",
        questions: [
            {
                id: 'firstName',
                label: 'First Name*',
                type: 'text',
                required: true
            },
            {
                id: 'lastName',
                label: 'Last Name',
                type: 'text',
                required: false
            },
            {
                id: 'email',
                label: 'Email Address*',
                type: 'email',
                required: true
            },
            {
                id: 'phone',
                label: 'Phone',
                type: 'tel',
                required: false
            },
            {
                id: 'postCode',
                label: 'Post Code',
                type: 'text',
                required: false
            }
        ]
    }
};

export default formQuestions;