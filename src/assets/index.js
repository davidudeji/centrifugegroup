// Centrifuge Brand and Client Assets
import centrifugeLogo from './centrifuge logo.png';
import centralBankHealthLogo from './Central Bank of Health.jpg';
import fmohLogo from './Federal Ministry of Health.jpg';
import heartlandLogo from './Heartland Alliance.jpg';
import nlngLogo from './Nigeria LNG Limited.png';
import nursingCouncilLogo from './Nursing & Mid Wife.jpg';
import carterCenterLogo from './The Carter Center.png';
import womenForWealthLogo from './Women for wealth.jpg';
export const brandAssets = {
    logo: centrifugeLogo,
    name: 'Centrifuge Group',
    tagline: 'Technology that moves business forward.',
};
export const verifiedClients = [
    {
        id: 'fmoh',
        name: 'Federal Ministry of Health',
        role: 'Health Workforce & National Reporting Systems',
        logo: fmohLogo,
        sector: 'Healthcare & Government',
        description: 'Designed and deployed national healthcare management and workforce information systems.',
    },
    {
        id: 'nlng',
        name: 'Nigeria LNG Limited (NLNG)',
        role: 'Enterprise Operations & Digital Solutions',
        logo: nlngLogo,
        sector: 'Enterprise & Energy',
        description: 'Enterprise technology consulting and mission-critical digital systems for operational excellence.',
    },
    {
        id: 'carter-center',
        name: 'The Carter Center',
        role: 'Public Health Tracking & Data Systems',
        logo: carterCenterLogo,
        sector: 'International NGO & Health',
        description: 'Epidemiological data capture, mapping, and monitoring solutions in underserved regions.',
    },
    {
        id: 'nursing-council',
        name: 'Nursing & Midwifery Council of Nigeria',
        role: 'Digital Credentialing & Licensing Portal',
        logo: nursingCouncilLogo,
        sector: 'Healthcare & Regulatory',
        description: 'End-to-end digital examination, verification, and accreditation portal for nationwide medical professionals.',
    },
    {
        id: 'heartland',
        name: 'Heartland Alliance',
        role: 'Health Information Systems',
        logo: heartlandLogo,
        sector: 'Healthcare & Humanitarian',
        description: 'Secure clinical workflows and specialized community healthcare information systems.',
    },
    {
        id: 'central-bank-health',
        name: 'Central Bank of Health Initiative',
        role: 'Healthcare Financial & Program Platform',
        logo: centralBankHealthLogo,
        sector: 'Healthcare & Institutional',
        description: 'Financial management and resource allocation platforms for public health interventions.',
    },
    {
        id: 'women-for-wealth',
        name: 'Women for Wealth',
        role: 'Community Digital Empowerment',
        logo: womenForWealthLogo,
        sector: 'Civil Society & Socioeconomic',
        description: 'Digital tools and training platforms fostering socioeconomic inclusion and capacity building.',
    },
];
