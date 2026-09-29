import { useEffect } from 'react';
export const SEO = ({ title, description = 'Centrifuge Group designs and delivers enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.', }) => {
    useEffect(() => {
        const fullTitle = title.includes('Centrifuge')
            ? title
            : `${title} | Centrifuge Group`;
        document.title = fullTitle;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
    }, [title, description]);
    return null;
};
