// schema.js

function addSchemaMarkup() {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sameer Walke",
      "image": "sameer-walke.jpg",
      "jobTitle": ["Digital Strategist", "Author"],
      "url": "https://sameerwalke.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/sameerwalke",
        "https://www.upwork.com/freelancers/~01dfc96c7556675ead?mp_source=share"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "SS Marketing Hub",
        "url": "https://ssmarketinghub.github.io"
      },
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
  
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.textContent = JSON.stringify(personSchema);
    document.head.appendChild(personScript);
  
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);
  }
  
  addSchemaMarkup();