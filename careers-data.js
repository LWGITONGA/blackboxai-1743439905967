// East Africa Career Database
const careers = {
    creative: {
        title: "Creative Careers",
        description: "Opportunities across Kenya, Uganda, Tanzania and Rwanda:",
        icon: "fas fa-palette",
        color: "bg-purple-100 text-purple-800",
        suggestions: [
            {
                title: "Graphic Designer",
                description: "Digital design roles in advertising/media companies across East Africa",
                icon: "fas fa-paint-brush",
                salary: "KES 50K-150K | UGX 1.5M-4.5M | TZS 120K-360K",
                education: "Diploma in Graphic Design",
                markets: ["Nairobi", "Kampala", "Dar es Salaam"],
                ageRange: "18-45 years",
                requirements: "Portfolio required"
            },
            {
                title: "Content Creator",
                description: "Social media and digital content production",
                icon: "fas fa-video",
                salary: "KES 40K-200K | UGX 1.2M-6M | TZS 96K-480K", 
                education: "Certificate in Media/Communications",
                markets: ["All major cities"],
                ageRange: "18-35 years"
            }
        ]
    },
    helping: {
        title: "Helping Professions",
        description: "Community-focused roles across the region:",
        icon: "fas fa-hands-helping",
        color: "bg-blue-100 text-blue-800",
        suggestions: [
            {
                title: "Teacher",
                description: "Primary/secondary school teaching positions",
                icon: "fas fa-chalkboard-teacher",
                salary: "KES 30K-120K | UGX 900K-3.6M | TZS 72K-288K",
                education: "Teaching certification",
                markets: ["Nationwide"],
                ageRange: "22-60 years"
            }
        ]
    }
    // Additional categories...
};

// Monetization Features
const premiumServices = {
    careerCoaching: {
        title: "1-on-1 Career Coaching",
        price: "KES 2,500/session",
        features: [
            "Personalized career plan",
            "Interview preparation",
            "CV optimization"
        ]
    },
    premiumContent: {
        title: "Exclusive Career Guides", 
        price: "KES 500/month",
        features: [
            "Industry reports",
            "Salary benchmarks",
            "Company insights"
        ]
    }
};