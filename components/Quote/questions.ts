// Questions Data Structure
const formQuestions = {
    propertyInfo: {
        title: "Property Information",
        questions: [
            {
                id: 'propertyType',
                label: 'What type of property do you have?*',
                type: 'radio',
                options: ['House', 'Townhouse', 'Bungalow'],
                required: true
            },
            {
                id: 'rooms',
                label: 'How many rooms are there?',
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
    loftInfo: {
        title: "Loft Information",
        questions: [
            {
                id: 'loftConstruction',
                label: 'What type of loft construction do you have?',
                type: 'radio',
                options: ['Truss Rafter', 'Conventional'],
                required: true
            },
            {
                id: 'waterTank',
                label: 'Do you have a water tank in your loft?',
                type: 'radio',
                options: ['Yes', 'No', "Don't know"],
                required: true
            }
        ]
    },
    requirements: {
        title: "Your Requirements",
        questions: [
            {
                id: 'extraBedrooms',
                label: 'How many extra bedrooms would you like?',
                type: 'select',
                options: ['1', '2', '3', '4', "Don't know"],
                required: true
            },
            {
                id: 'extraBathrooms',
                label: 'How many extra bathrooms would you like?',
                type: 'select',
                options: ['1', '2', "Don't know"],
                required: true
            }
        ]
    },
    windows: {
        title: "Window Requirements",
        questions: [
            {
                id: 'flatDormers',
                label: 'How many flat dormer windows would you like?*',
                type: 'number',
                required: true
            },
            {
                id: 'veluxWindows',
                label: 'How many Velux roof windows would you like?*',
                type: 'number',
                required: true
            },
            {
                id: 'pitchedDormers',
                label: 'How many pitched dormer windows would you like?*',
                type: 'number',
                required: true
            },
            {
                id: 'hipToGables',
                label: 'How many hip to gables do you need?',
                type: 'radio',
                options: ['0', '1', '2', "Don't know"],
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