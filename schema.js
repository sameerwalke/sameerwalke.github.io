// Separate function to create credential objects
function createCredential(name, url) {
    return {
        "@type": "EducationalOccupationalCredential",
        "name": name,
        "url": url
    };
}

// Array of credentials (moved to a separate variable for better organization)
const credentials = [
    createCredential("Digital Marketing Professional Certificate", "https://www.linkedin.com/learning/certificates/71a4d32ee12fd3ed88396e84ce668b815e94f899eccb5cd1c560b15471bf468e"),
    createCredential("Social Media Marketing Professional Certificate", "https://www.linkedin.com/learning/certificates/c921d5cd2db1d03b1434d46f5d0a5f7f8eba0b3740d0a9c29488dbc53d5e61fc"),
    createCredential("Google Play Academy - Store Listing Certificate", "https://www.credential.net/455394d5-fb4c-42ad-980c-2b1e425928f2"),
    createCredential("AI for Managers", "https://www.linkedin.com/learning/certificates/509f97e2622fcfcad1beefb63a25a54f973f7ee3ccf8e21cbce95b75442fb326"),
    createCredential("Generative AI Productivity Skills", "https://www.linkedin.com/learning/certificates/c4d20630b8f415e2f01ba87ef8b4b156776ba93bb3300ffc4791d55d2dc8b"),
    createCredential("GitHub Professional Certificate", "https://www.linkedin.com/learning/certificates/e59e65944016da82da0397956010bad78474877bbcf57005ffe17ba338b73a9a"),
    createCredential("Docker Foundations Professional Certificate", "https://www.linkedin.com/learning/certificates/435ebd1b92f22289d5cf611397cfc63e9331f97fb526b296b4956b0c63581937")
];


function addSchemaMarkup() {
    try {
        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sameer Walke",
            "image": "/sameer-walke.jpg",
            "jobTitle": ["Digital Strategist", "SEO Expert", "Web Developer", "Content Creator"],
            "telephone": "+919421723220",
            "url": "https://sameerwalke.github.io",
            "sameAs": [
                "https://www.linkedin.com/in/sameerwalke",
                "https://www.upwork.com/freelancers/~01dfc96c7556675ead?mp_source=share",
                "https://wa.me/917499422093"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "SS Marketing Hub",
                "url": "https://ssmarketinghub.github.io"
            },
            "alumniOf": [
                {
                    "@type": "EducationalOrganization",
                    "name": "KIIT Film and Media Science",
                    "description": "Graduated in 2015"
                },
                {
                    "@type": "EducationalOrganization",
                    "name": "YCM Open University",
                    "description": "Bachelor of Arts, 2017"
                }
            ],
            "hasCredential": credentials, // Use the credentials array
            "knowsAbout": [
                {
                    "@type": "Book",
                    "name": "WordPress For Everyone: Build Websites Without Coding - English Edition",
                    "url": "https://wordpressforeveryone.com",
                    "datePublished": "2024",
                    "inLanguage": "en",
                    "description": "A comprehensive guide to building WordPress websites without coding.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "SS Marketing Hub"
                    },
                    "bookFormat": ["Paperback", "EBook"]
                },
                {
                    "@type": "Book",
                    "name": "WordPress For Everyone : कोडींगशिवाय वेबसाईट तयार करा - Marathi Edition",
                    "url": "https://wordpressforeveryone.com",
                    "datePublished": "2024",
                    "inLanguage": "mr",
                    "description": "कोडींगशिवाय वर्डप्रेस वेबसाईट तयार करण्यासाठी एक सर्वसमावेशक मार्गदर्शक.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "SS Marketing Hub"
                    },
                    "bookFormat": ["Paperback", "EBook"]
                },
                {
                    "@type": "Book",
                    "name": "AI For Daily Life",
                    "datePublished": "2025",
                    "inLanguage": "en",
                    "description": "Exploration of how AI can be integrated into everyday tasks.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "SS Marketing Hub"
                    },
                    "bookFormat": ["Paperback", "EBook"]
                }
            ]
        };

        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing, SEO, Web Development",
            "description": "Expert digital marketing, SEO, and web development services to boost your online presence and drive business growth.",
            "provider": {
                "@type": "Person",
                "name": "Sameer Walke"
            },
            "serviceType": ["Digital Marketing", "SEO", "Web Development", "Social Media Marketing"]
        };

        // Add Person Schema
        const personScript = document.createElement('script');
        personScript.type = 'application/ld+json';
        personScript.textContent = JSON.stringify(personSchema);
        document.head.appendChild(personScript);

        // Add Service Schema
        const serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.textContent = JSON.stringify(serviceSchema);
        document.head.appendChild(serviceScript);
    } catch (error) {
        console.error("Error adding schema markup:", error);
    }
}

addSchemaMarkup();
