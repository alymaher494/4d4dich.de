import { siteInfo } from "@/data/website-text";

interface JsonLdProps {
    data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function getLocalBusinessSchema(settings: any) {
    const acf = settings?.acf || settings || {};
    const email = acf.global_email || siteInfo.email;
    const phone = acf.global_phone || siteInfo.phone;
    const address = acf.global_address || siteInfo.address;
    const location = acf.global_location || siteInfo.location;

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "4D FÜR DICH",
        "image": "https://4d4dich.de/images/assets/4bf9d1cd2d37202c1683c052a2acce3e.png",
        "@id": "https://4d4dich.de",
        "url": "https://4d4dich.de",
        "telephone": phone,
        "email": email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": address,
            "addressLocality": location.split(' ')[1] || "Rodgau",
            "postalCode": location.split(' ')[0] || "63110",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.0245,
            "longitude": 8.8875
        },
        "sameAs": [
            acf.global_instagram || "https://www.instagram.com/4d4dich/",
            acf.global_facebook || "https://www.facebook.com/4d4dich/"
        ]
    };
}
