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
        const siteUrl = "https://sameerwalke.github.io/";
        const personId = `${siteUrl}#sameerwalke`;

        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": personId,
            "name": "Sameer Walke",
            "image": `${siteUrl}sameer-walke.jpg`, // Absolute URL
            "jobTitle": ["Digital Strategist", "SEO Expert", "Web Developer", "Digital Marketing Consultant", "Social Media Strategist", "AI Specialist"],
            "description": "I'm a marketing professional passionate about data-driven strategies and building strong brands. I craft compelling marketing campaigns and leverage data analytics for maximum ROI. I'm also a skilled web developer, creating seamless user experiences.",
            "telephone": "+919421723220", // Ensure this is a publicly intended contact number
            "url": siteUrl,
            "sameAs": [
                "https://www.linkedin.com/in/sameerwalke",
                "https://github.com/sameerwalke19",
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
                    "name": "KIIT School of Film and Media Science"
                },
                {
                    "@type": "EducationalOrganization",
                    "name": "YCM Open University"
                }
            ],
            "hasCredential": credentials, // Use the credentials array
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Freelance WordPress Developer",
              "startDate": "2018",
              "description": "Worked on over 500+ websites as a WordPress Developer."
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "email": "talktowalke@gmail.com",
                "contactType": "Sales and General Inquiries",
                "availableLanguage": ["en", "mr"]
              }
            ],
            "knowsAbout": [
                {
                    "@type": "Book",
                    "name": "WordPress For Everyone: Build Websites Without Coding - English Edition",
                    "url": "https://wordpressforeveryone.com",
                    "datePublished": "2024",
                    "inLanguage": "en",
                    "description": "A comprehensive guide to building WordPress websites without coding.",
                    "author": {
                        "@type": "Person",
                        "name": "Sameer Walke",
                        "url": siteUrl
                    },
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
                    "author": {
                        "@type": "Person",
                        "name": "Sameer Walke",
                        "url": siteUrl
                    },
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
                    "author": {
                        "@type": "Person",
                        "name": "Sameer Walke",
                        "url": siteUrl
                    },
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
                "@id": personId // Link to the Person schema
            },
            "serviceType": ["Digital Marketing", "SEO", "Web Development", "Social Media Marketing"]
        };

        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sameer Walke - Digital Portfolio",
            "url": siteUrl,
            "publisher": {
                "@id": personId // You are the publisher of your personal site
            },
            "description": "Official website and portfolio of Sameer Walke, a digital strategist offering digital marketing, SEO, and web development services."
        };

        const profilePageSchema = {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "Sameer Walke - Digital Marketing, SEO, Web Development Services", // From <title>
            "url": siteUrl, // URL of this specific page (index.html)
            "mainEntity": {
                "@id": personId // The main entity of this profile page is you
            },
            "isPartOf": {
                "@type": "WebSite",
                "url": siteUrl
            },
            "description": "Sameer Walke is a digital strategist offering digital marketing, SEO, web development, and social media marketing services.", // From meta description
            "publisher": { "@id": personId }
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

        // Add WebSite Schema
        const websiteScript = document.createElement('script');
        websiteScript.type = 'application/ld+json';
        websiteScript.textContent = JSON.stringify(websiteSchema);
        document.head.appendChild(websiteScript);

        // Add ProfilePage Schema
        const profilePageScript = document.createElement('script');
        profilePageScript.type = 'application/ld+json';
        profilePageScript.textContent = JSON.stringify(profilePageSchema);
        document.head.appendChild(profilePageScript);
    } catch (error) {
        console.error("Error adding schema markup:", error);
    }
}

addSchemaMarkup();
