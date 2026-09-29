import { verifiedClients } from '../assets';
export const mockCategories = [
    {
        id: 'cat-1',
        name: 'Inverters & Pure Sine Wave',
        slug: 'inverters',
        description: 'Industrial and commercial pure sine wave inverters engineered for continuous operation.',
        productCount: 4,
        createdAt: '2024-01-15T08:00:00Z',
    },
    {
        id: 'cat-2',
        name: 'Uninterruptible Power Supplies (UPS)',
        slug: 'ups',
        description: 'Data-center grade online double-conversion UPS systems for critical enterprise workloads.',
        productCount: 4,
        createdAt: '2024-01-15T08:00:00Z',
    },
    {
        id: 'cat-3',
        name: 'Solar Charge Controllers',
        slug: 'solar-controllers',
        description: 'High-efficiency MPPT and PWM solar charge controllers with telemetry and remote management.',
        productCount: 4,
        createdAt: '2024-01-15T08:00:00Z',
    },
    {
        id: 'cat-4',
        name: 'Enterprise Hardware & IoT',
        slug: 'enterprise-hardware',
        description: 'Ruggedized IoT telemetry gateways, fleet trackers, and edge computing nodes.',
        productCount: 4,
        createdAt: '2024-01-15T08:00:00Z',
    },
];
export const mockProducts = [
    {
        id: 'prod-1',
        name: 'Centrifuge Titan 5kVA Pure Sine Wave Inverter',
        slug: 'titan-5kva-inverter',
        description: 'Heavy-duty 48V pure sine wave hybrid inverter designed for erratic grid conditions. Features fast transfer time (<10ms), smart battery equalization, and Modbus/RS485 remote monitoring.',
        shortDescription: '48V hybrid pure sine wave inverter with smart generator auto-start.',
        sku: 'CFG-INV-5000',
        price: 950000,
        compareAtPrice: 1050000,
        costPrice: 720000,
        categoryId: 'cat-1',
        categoryName: 'Inverters & Pure Sine Wave',
        brand: 'Centrifuge Power',
        images: [
            'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 24,
        lowStockThreshold: 5,
        weight: '28.5 kg',
        dimensions: '440 x 330 x 180 mm',
        status: 'active',
        featured: true,
        specifications: {
            'Rated Power': '5000W / 5kVA',
            'DC Input': '48V DC',
            'AC Output': '230V AC, 50Hz',
            'Surge Capacity': '10,000VA (5 sec)',
            'Waveform': 'Pure Sine Wave (THD < 3%)',
            'Transfer Time': '9.8 ms',
        },
        seoTitle: 'Titan 5kVA Pure Sine Wave Inverter | Centrifuge Store',
        seoDescription: 'High-reliability 5kVA 48V hybrid pure sine wave inverter for enterprise and hospital installations.',
        createdAt: '2024-01-10T10:00:00Z',
        updatedAt: '2024-02-01T12:00:00Z',
    },
    {
        id: 'prod-2',
        name: 'Centrifuge Titan 10kVA Three-Phase Industrial Inverter',
        slug: 'titan-10kva-three-phase-inverter',
        description: 'Industrial-grade 3-phase hybrid inverter with dual MPPT trackers, high overload capability, and seamless zero-downtime microgrid synchronization.',
        shortDescription: '10kVA 3-phase hybrid power system for mission-critical facilities.',
        sku: 'CFG-INV-10000-3P',
        price: 2450000,
        compareAtPrice: 2600000,
        costPrice: 1850000,
        categoryId: 'cat-1',
        categoryName: 'Inverters & Pure Sine Wave',
        brand: 'Centrifuge Power',
        images: [
            'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 8,
        lowStockThreshold: 3,
        weight: '52.0 kg',
        dimensions: '600 x 450 x 260 mm',
        status: 'active',
        featured: true,
        specifications: {
            'Rated Power': '10,000W / 10kVA',
            'DC Voltage': '96V DC',
            'AC Output': '400V/230V 3-Phase',
            'Peak Efficiency': '96.8%',
            'Connectivity': 'Ethernet, RS485, SNMP',
        },
        createdAt: '2024-01-12T10:00:00Z',
        updatedAt: '2024-02-15T12:00:00Z',
    },
    {
        id: 'prod-3',
        name: 'Centrifuge Pulse-Pro 3000VA Online Double-Conversion UPS',
        slug: 'pulse-pro-3000va-ups',
        description: 'True online double-conversion rackmount/tower UPS with zero transfer time. Ideal for server rooms, medical diagnostics, and telecommunication hubs.',
        shortDescription: '3kVA online rackmount UPS with pure sine wave and hot-swappable batteries.',
        sku: 'CFG-UPS-3000',
        price: 780000,
        compareAtPrice: 850000,
        costPrice: 580000,
        categoryId: 'cat-2',
        categoryName: 'Uninterruptible Power Supplies (UPS)',
        brand: 'Centrifuge Enterprise',
        images: [
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 15,
        lowStockThreshold: 4,
        weight: '26.0 kg',
        dimensions: '2U Rackmount (88 x 438 x 600 mm)',
        status: 'active',
        featured: true,
        specifications: {
            'Topology': 'Online Double-Conversion',
            'Capacity': '3000VA / 2700W',
            'Transfer Time': '0 ms',
            'Battery Voltage': '72V DC Internal',
            'Monitoring': 'SNMP card included',
        },
        createdAt: '2024-01-14T10:00:00Z',
        updatedAt: '2024-02-18T12:00:00Z',
    },
    {
        id: 'prod-4',
        name: 'Centrifuge Pulse-Pro 10kVA Modular Server Room UPS',
        slug: 'pulse-pro-10kva-modular-ups',
        description: 'Modular high-density 10kVA UPS designed for mission-critical enterprise data cabinets. N+1 parallel redundancy support and cold-start capability.',
        shortDescription: '10kVA N+1 redundant modular enterprise UPS cabinet.',
        sku: 'CFG-UPS-10000',
        price: 2900000,
        costPrice: 2200000,
        categoryId: 'cat-2',
        categoryName: 'Uninterruptible Power Supplies (UPS)',
        brand: 'Centrifuge Enterprise',
        images: [
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 4,
        lowStockThreshold: 2,
        weight: '84.0 kg',
        dimensions: '6U Cabinet (264 x 440 x 720 mm)',
        status: 'active',
        featured: false,
        specifications: {
            'Capacity': '10,000VA / 10,000W (Unity PF)',
            'Input Range': '110V - 300V AC',
            'Redundancy': 'N+1 Parallelable up to 4 units',
            'Display': 'Color Touchscreen LCD',
        },
        createdAt: '2024-01-16T10:00:00Z',
        updatedAt: '2024-02-20T12:00:00Z',
    },
    {
        id: 'prod-5',
        name: 'Centrifuge SolarTrack 100A MPPT Controller',
        slug: 'solartrack-100a-mppt',
        description: 'State-of-the-art Maximum Power Point Tracking (MPPT) solar charge controller with 99.5% tracking efficiency, 200V PV VOC, and integrated 4G telemetry for remote sites.',
        shortDescription: '100A MPPT solar controller with 200V PV input and remote telemetry.',
        sku: 'CFG-MPPT-100A',
        price: 380000,
        compareAtPrice: 420000,
        costPrice: 280000,
        categoryId: 'cat-3',
        categoryName: 'Solar Charge Controllers',
        brand: 'Centrifuge Solar',
        images: [
            'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 32,
        lowStockThreshold: 6,
        weight: '5.8 kg',
        dimensions: '290 x 205 x 100 mm',
        status: 'active',
        featured: true,
        specifications: {
            'Max Charge Current': '100A',
            'Max PV Input Voltage': '200V VOC',
            'System Voltage': '12V / 24V / 48V Auto-detect',
            'MPPT Tracking Efficiency': '> 99.5%',
            'Connectivity': 'Bluetooth + 4G LTE IoT SIM slot',
        },
        createdAt: '2024-01-18T10:00:00Z',
        updatedAt: '2024-02-22T12:00:00Z',
    },
    {
        id: 'prod-6',
        name: 'Centrifuge SolarTrack 60A MPPT Controller',
        slug: 'solartrack-60a-mppt',
        description: 'Rugged 60A MPPT controller designed for regional solar health clinic installations and telecommunication base stations.',
        shortDescription: '60A MPPT controller with die-cast aluminum heat sink.',
        sku: 'CFG-MPPT-60A',
        price: 240000,
        costPrice: 175000,
        categoryId: 'cat-3',
        categoryName: 'Solar Charge Controllers',
        brand: 'Centrifuge Solar',
        images: [
            'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 18,
        lowStockThreshold: 5,
        weight: '3.9 kg',
        dimensions: '240 x 170 x 85 mm',
        status: 'active',
        featured: false,
        specifications: {
            'Max Charge Current': '60A',
            'Max PV Input': '150V VOC',
            'Efficiency': '98.5%',
        },
        createdAt: '2024-01-20T10:00:00Z',
        updatedAt: '2024-02-22T12:00:00Z',
    },
    {
        id: 'prod-7',
        name: 'Centrifuge FleetTrack-X Rugged GPS Telemetry Gateway',
        slug: 'fleettrack-x-telemetry-gateway',
        description: 'IP67 water- and dust-resistant GPS/OBD-II hardware device for heavy fleet management. Features fuel level sensor integration, harsh braking detection, and dual-SIM failover.',
        shortDescription: 'IP67 OBD-II/CAN-Bus fleet telematics gateway with satellite backup.',
        sku: 'CFG-IOT-FLT1',
        price: 185000,
        compareAtPrice: 210000,
        costPrice: 120000,
        categoryId: 'cat-4',
        categoryName: 'Enterprise Hardware & IoT',
        brand: 'Centrifuge Logistics',
        images: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 60,
        lowStockThreshold: 10,
        weight: '0.45 kg',
        dimensions: '110 x 80 x 28 mm',
        status: 'active',
        featured: true,
        specifications: {
            'Cellular': '4G LTE-M / NB-IoT + 2G Fallback',
            'GNSS': 'GPS, GLONASS, Galileo (<2.5m CEP)',
            'CAN Bus': 'J1939, OBD-II supported',
            'Internal Backup Battery': '1200mAh Li-Po',
            'Enclosure': 'IP67 Waterproof',
        },
        createdAt: '2024-01-22T10:00:00Z',
        updatedAt: '2024-02-25T12:00:00Z',
    },
    {
        id: 'prod-8',
        name: 'Centrifuge EdgeNode Industrial IoT Hub',
        slug: 'edgenode-iot-hub',
        description: 'Quad-core ARM industrial gateway running secure containerized Linux for cold chain temperature logging, hospital vaccine freezer monitoring, and automated alerts.',
        shortDescription: 'Cold-chain monitoring and telemetry edge controller with multi-sensor input.',
        sku: 'CFG-IOT-EDGE4',
        price: 340000,
        costPrice: 240000,
        categoryId: 'cat-4',
        categoryName: 'Enterprise Hardware & IoT',
        brand: 'Centrifuge Logistics',
        images: [
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
        ],
        stockQuantity: 14,
        lowStockThreshold: 4,
        weight: '1.2 kg',
        dimensions: '160 x 115 x 45 mm',
        status: 'active',
        featured: false,
        specifications: {
            'CPU': 'Quad-Core 1.5GHz Industrial ARM',
            'RAM / Storage': '2GB RAM / 32GB eMMC Industrial',
            'Sensor Ports': '4x RS485 Modbus, 6x Analog 4-20mA, 8x Digital I/O',
            'Certifications': 'CE, FCC, RoHS',
        },
        createdAt: '2024-01-24T10:00:00Z',
        updatedAt: '2024-02-25T12:00:00Z',
    }
];
export const mockOrders = [
    {
        id: 'ord-1001',
        orderNumber: 'CFG-2024-1001',
        customerId: 'cust-1',
        customerName: 'Amina Bello (Apex Logistics)',
        customerEmail: 'amina.bello@apexlogistics.ng',
        items: [
            {
                productId: 'prod-7',
                productName: 'Centrifuge FleetTrack-X Rugged GPS Telemetry Gateway',
                productImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
                sku: 'CFG-IOT-FLT1',
                price: 185000,
                quantity: 12,
                total: 2220000
            }
        ],
        subtotal: 2220000,
        shipping: 25000,
        tax: 166500,
        discount: 50000,
        total: 2361500,
        paymentMethod: 'Bank Transfer / Paystack',
        paymentStatus: 'paid',
        orderStatus: 'shipped',
        shippingAddress: {
            fullName: 'Amina Bello',
            email: 'amina.bello@apexlogistics.ng',
            phone: '+234 803 234 5678',
            addressLine1: 'Plot 14B Commercial Boulevard, Ikeja Industrial Estate',
            city: 'Ikeja',
            state: 'Lagos',
            country: 'Nigeria',
            postalCode: '100001'
        },
        notes: 'Urgent deployment for interstate cargo transport fleet.',
        createdAt: '2024-03-24T09:14:00Z',
        updatedAt: '2024-03-25T11:20:00Z'
    },
    {
        id: 'ord-1002',
        orderNumber: 'CFG-2024-1002',
        customerId: 'cust-2',
        customerName: 'Dr. Chidi Okonkwo (CarePoint Diagnostics)',
        customerEmail: 'c.okonkwo@carepoint.org',
        items: [
            {
                productId: 'prod-3',
                productName: 'Centrifuge Pulse-Pro 3000VA Online Double-Conversion UPS',
                productImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
                sku: 'CFG-UPS-3000',
                price: 780000,
                quantity: 2,
                total: 1560000
            }
        ],
        subtotal: 1560000,
        shipping: 20000,
        tax: 117000,
        discount: 0,
        total: 1697000,
        paymentMethod: 'Card Payment',
        paymentStatus: 'paid',
        orderStatus: 'delivered',
        shippingAddress: {
            fullName: 'Dr. Chidi Okonkwo',
            email: 'c.okonkwo@carepoint.org',
            phone: '+234 802 987 6543',
            addressLine1: '12 Medical Drive, Victoria Island',
            city: 'Lagos',
            state: 'Lagos',
            country: 'Nigeria',
        },
        createdAt: '2024-03-22T14:30:00Z',
        updatedAt: '2024-03-24T16:00:00Z'
    },
    {
        id: 'ord-1003',
        orderNumber: 'CFG-2024-1003',
        customerId: 'cust-3',
        customerName: 'Tunde Adeyemi (Sterling Energy Ltd)',
        customerEmail: 'tunde@sterlingenergy.com',
        items: [
            {
                productId: 'prod-1',
                productName: 'Centrifuge Titan 5kVA Pure Sine Wave Inverter',
                productImage: 'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=800&q=80',
                sku: 'CFG-INV-5000',
                price: 950000,
                quantity: 1,
                total: 950000
            },
            {
                productId: 'prod-5',
                productName: 'Centrifuge SolarTrack 100A MPPT Controller',
                productImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
                sku: 'CFG-MPPT-100A',
                price: 380000,
                quantity: 1,
                total: 380000
            }
        ],
        subtotal: 1330000,
        shipping: 15000,
        tax: 99750,
        discount: 0,
        total: 1444750,
        paymentMethod: 'Bank Transfer',
        paymentStatus: 'pending',
        orderStatus: 'pending',
        shippingAddress: {
            fullName: 'Tunde Adeyemi',
            email: 'tunde@sterlingenergy.com',
            phone: '+234 811 345 6789',
            addressLine1: '8 Marina Street, Central Business District',
            city: 'Abuja',
            state: 'FCT',
            country: 'Nigeria',
        },
        createdAt: '2024-03-28T16:45:00Z',
        updatedAt: '2024-03-28T16:45:00Z'
    }
];
export const mockCustomers = [
    {
        id: 'cust-1',
        name: 'Amina Bello',
        email: 'amina.bello@apexlogistics.ng',
        phone: '+234 803 234 5678',
        ordersCount: 4,
        totalSpent: 8420000,
        status: 'active',
        addresses: [
            {
                fullName: 'Amina Bello',
                email: 'amina.bello@apexlogistics.ng',
                phone: '+234 803 234 5678',
                addressLine1: 'Plot 14B Commercial Boulevard, Ikeja Industrial Estate',
                city: 'Ikeja',
                state: 'Lagos',
                country: 'Nigeria'
            }
        ],
        createdAt: '2023-11-10T08:00:00Z'
    },
    {
        id: 'cust-2',
        name: 'Dr. Chidi Okonkwo',
        email: 'c.okonkwo@carepoint.org',
        phone: '+234 802 987 6543',
        ordersCount: 2,
        totalSpent: 3100000,
        status: 'active',
        addresses: [
            {
                fullName: 'Dr. Chidi Okonkwo',
                email: 'c.okonkwo@carepoint.org',
                phone: '+234 802 987 6543',
                addressLine1: '12 Medical Drive, Victoria Island',
                city: 'Lagos',
                state: 'Lagos',
                country: 'Nigeria'
            }
        ],
        createdAt: '2023-12-05T10:30:00Z'
    },
    {
        id: 'cust-3',
        name: 'Tunde Adeyemi',
        email: 'tunde@sterlingenergy.com',
        phone: '+234 811 345 6789',
        ordersCount: 1,
        totalSpent: 1444750,
        status: 'active',
        addresses: [
            {
                fullName: 'Tunde Adeyemi',
                email: 'tunde@sterlingenergy.com',
                phone: '+234 811 345 6789',
                addressLine1: '8 Marina Street, Central Business District',
                city: 'Abuja',
                state: 'FCT',
                country: 'Nigeria'
            }
        ],
        createdAt: '2024-03-28T16:00:00Z'
    }
];
export const mockInventoryMovements = [
    {
        id: 'mov-1',
        productId: 'prod-7',
        productName: 'Centrifuge FleetTrack-X Rugged GPS Telemetry Gateway',
        sku: 'CFG-IOT-FLT1',
        type: 'decrease',
        quantity: 12,
        previousStock: 72,
        newStock: 60,
        reason: 'Customer Order #CFG-2024-1001 fulfillment',
        userId: 'usr-1',
        userName: 'Kelechi Nwosu (Store Admin)',
        createdAt: '2024-03-24T10:00:00Z'
    },
    {
        id: 'mov-2',
        productId: 'prod-5',
        productName: 'Centrifuge SolarTrack 100A MPPT Controller',
        sku: 'CFG-MPPT-100A',
        type: 'increase',
        quantity: 20,
        previousStock: 12,
        newStock: 32,
        reason: 'Warehouse restock batch #PO-8821',
        userId: 'usr-1',
        userName: 'Kelechi Nwosu (Store Admin)',
        createdAt: '2024-03-20T14:15:00Z'
    }
];
export const mockDiscounts = [
    {
        id: 'disc-1',
        code: 'CENTRIFUGE10',
        type: 'percentage',
        value: 10,
        minSpend: 500000,
        maxDiscount: 100000,
        usageCount: 14,
        usageLimit: 50,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
    },
    {
        id: 'disc-2',
        code: 'ENTERPRISE50K',
        type: 'fixed',
        value: 50000,
        minSpend: 1500000,
        usageCount: 8,
        usageLimit: 30,
        startDate: '2024-02-01',
        isActive: true
    }
];
// Real Projects & Products Showcase (per project_spec.md)
export const mockProjects = [
    {
        id: 'proj-1',
        slug: 'optimax-enterprise-erp',
        name: 'Optimax Enterprise ERP Platform',
        category: 'Enterprise ERP',
        industry: 'Commerce & Operations',
        description: 'An all-in-one business management platform connecting commerce, finance, inventory, multi-warehouse logistics, HR, and real-time business intelligence.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Recharts'],
        status: 'live',
        liveUrl: 'https://centrifugegroup.co',
        demoUrl: 'https://demo.centrifugegroup.co/optimax',
        caseStudySlug: 'enterprise-digital-transformation',
        featured: true,
        displayOrder: 1,
        overview: 'Optimax was engineered from the ground up to address the fragmented software landscape in growing African enterprises, unifying disparate accounting, inventory, and supply chain tools into a single source of truth.',
        challenge: 'Businesses were relying on disconnected spreadsheets and legacy single-user software, causing stock discrepancies, financial reconciliation delays, and blind spots in operational planning.',
        solution: 'A cohesive web-native ERP suite with granular role-based permissions, automated ledger postings, automated reorder triggers, and real-time executive analytics.',
        capabilities: [
            'Multi-currency automated financial ledgers',
            'Real-time multi-location inventory synchronization',
            'Integrated POS and B2B eCommerce channels',
            'Automated payroll and tax compliance',
            'Predictive demand forecasting'
        ]
    },
    {
        id: 'proj-2',
        slug: 'centrifuge-logistics-mobility',
        name: 'Logistics & Dispatch Mobility Suite',
        category: 'Logistics Management',
        industry: 'Logistics & Mobility',
        description: 'Mission-critical fleet tracking, driver telematics, route optimization, and digital proof-of-delivery platform handling high-volume freight logistics.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        technologies: ['React', 'GIS / Mapbox', 'Node.js', 'WebSockets', 'IoT Gateways', 'PostGIS'],
        status: 'live',
        demoUrl: 'https://demo.centrifugegroup.co/logistics',
        caseStudySlug: 'nationwide-fleet-telematics',
        featured: true,
        displayOrder: 2,
        overview: 'High-precision operational management system for transport companies, 3PL providers, and internal corporate fleets.',
        challenge: 'Lack of real-time visibility on long-haul routes, high fuel wastage from unoptimized routing, and delayed delivery documentation.',
        solution: 'Hardware-agnostic telematics integration providing second-by-second vehicle tracking, automated geofence triggers, digital ePOD, and maintenance predictive alerts.',
        capabilities: [
            'Live map vehicle tracking with speed & idle telemetry',
            'Automated trip dispatch and route optimization',
            'Mobile driver app with offline digital proof-of-delivery',
            'Instant temperature alerts for cold chain goods',
            'Automated customer tracking links via SMS/WhatsApp'
        ]
    },
    {
        id: 'proj-3',
        slug: 'hrhis-health-workforce',
        name: 'Human Resource for Health Information System (HRHIS)',
        category: 'HRHIS',
        industry: 'Healthcare / Government',
        description: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        technologies: ['Angular / React', 'PostgreSQL', 'DHIS2 Standards', 'Docker', 'OpenHIE'],
        status: 'live',
        caseStudySlug: 'fmoh-national-health-workforce',
        featured: true,
        displayOrder: 3,
        overview: 'Collaborative initiative deployed in partnership with federal healthcare institutions to streamline medical personnel distribution and licensing nationwide.',
        challenge: 'Paper-based records led to ghost workers, inequitable rural/urban doctor allocations, and multi-month delays in professional license renewal.',
        solution: 'Standardized digital registry adhering to WHO and OpenHIE guidelines, providing verifiable digital practitioner credentials and state-by-state staffing heatmaps.',
        capabilities: [
            'Digital licensing and Continuing Professional Development (CPD) tracking',
            'Health facility workforce allocation modeling',
            'Interoperability with national DHIS2 health data instances',
            'Biometric and verified identity reconciliation'
        ]
    },
    {
        id: 'proj-4',
        slug: 'electronic-hospital-management-system',
        name: 'Electronic Hospital Management Platform (EHMP)',
        category: 'Electronic Hospital Management',
        industry: 'Healthcare',
        description: 'Clinical workflows, patient electronic medical records (EMR), laboratory diagnostics, pharmacy dispensing, and NHIS billing for multi-specialty medical centers.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'HL7 / FHIR Standards'],
        status: 'live',
        featured: false,
        displayOrder: 4,
        overview: 'Turnkey hospital information software designed to eliminate paperwork in triage, consultation, laboratory tests, and automated billing.',
        challenge: 'Long outpatient waiting times, misplaced patient paper folders, and revenue leakage across hospital departments.',
        solution: 'Zero-loss digital clinical pipeline where patient check-in instantly notifies doctors, lab orders transmit digitally to technicians, and pharmacy prescriptions route automatically.',
        capabilities: [
            'Comprehensive outpatient & inpatient EMR',
            'Laboratory Information System (LIS) with automated test results',
            'Pharmacy inventory and drug dispensing control',
            'Health insurance (NHIS/HMO) automated claims generation'
        ]
    },
    {
        id: 'proj-5',
        slug: 'geospatial-mapping-health-facilities',
        name: 'Geospatial Health & Infrastructure GIS Mapping',
        category: 'Geospatial & Mapping',
        industry: 'GIS / Data',
        description: 'Interactive GIS spatial mapping platform cataloging public health facilities, cold-chain storage hubs, and road accessibility to optimize emergency response.',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
        technologies: ['MapLibre', 'PostGIS', 'GeoJSON', 'React', 'Python Spatial Tools'],
        status: 'live',
        featured: false,
        displayOrder: 5,
        overview: 'Spatial intelligence tool enabling ministries and international donors to pinpoint underserved communities and deploy resources with geographic precision.',
        challenge: 'Lack of verified coordinate data on primary healthcare facilities and road network access in remote regions.',
        solution: 'A nationwide interactive GIS layer with satellite basemaps, catchment radius analysis, and facility capacity overlays.',
        capabilities: [
            'Catchment population accessibility calculations',
            'Offline-first mobile GIS field surveying',
            'Heatmap overlays of disease prevalence and immunization coverage'
        ]
    },
    {
        id: 'proj-6',
        slug: 'iot-cold-chain-monitoring',
        name: 'IoT Vaccine & Cold-Chain Monitoring System',
        category: 'IoT Solutions',
        industry: 'IoT / Infrastructure',
        description: 'Hardware-software ecosystem continuously monitoring temperature and humidity in pharmaceutical storage, vaccine refrigerators, and cold-transport vehicles.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        technologies: ['MQTT', 'C/C++ Embedded', 'React', 'Time-series DB', 'GSM/4G'],
        status: 'live',
        featured: false,
        displayOrder: 6,
        overview: 'Guarding vaccine potency and critical temperature-sensitive medications with automated SMS and audible alarm triggers.',
        challenge: 'Power fluctuations causing silent temperature spikes in vaccine depots, resulting in compromised medicine and millions in wasted stock.',
        solution: 'Cellular IoT sensor probes with 72-hour battery backup that ping readings every 60 seconds and broadcast immediate alerts if thresholds are breached.',
        capabilities: [
            'Continuous 24/7 temperature logging (-40°C to +85°C)',
            'Automated SMS, voice call, and email escalation cascades',
            'Regulatory compliance audit trail PDF reports'
        ]
    }
];
// Authentic Case Studies highlighting real clients
export const mockCaseStudies = [
    {
        id: 'cs-1',
        slug: 'fmoh-national-health-workforce',
        title: 'Modernizing Healthcare Workforce Governance for the Federal Ministry of Health',
        client: 'Federal Ministry of Health',
        clientLogo: verifiedClients.find(c => c.id === 'fmoh')?.logo,
        industry: 'Healthcare & Public Sector',
        challenge: 'The Federal Ministry of Health managed records for hundreds of thousands of health workers across hundreds of federal and state facilities using disparate paper ledgers and static spreadsheets. This caused critical bottlenecks in staff deployment, accreditation validation, and emergency response allocation.',
        solution: 'Centrifuge Group engineered and rolled out a modern Human Resource for Health Information System (HRHIS). The system introduced centralized digital professional registries, biometric verification integrations, and automated facility staffing gap analyses.',
        capabilities: [
            'National registry digitization across 36 states and FCT',
            'Role-based departmental access and audit trails',
            'Integration with regulatory council credential verification APIs'
        ],
        implementation: 'Deployed across cloud and on-premise government datacenters with comprehensive training delivered to federal planning officers and hospital administrators across the federation.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'DHIS2 Standards'],
        results: [
            'Reduced medical license verification turnaround from 6 weeks to instant online check',
            'Unified workforce visibility across public hospitals nationwide',
            'Enabled evidence-based clinical resource deployment during nationwide health initiatives'
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        relatedServiceSlug: 'software-development'
    },
    {
        id: 'cs-2',
        slug: 'nursing-council-digital-licensing',
        title: 'Transforming Professional Accreditation & Licensing for Nursing Professionals',
        client: 'Nursing & Midwifery Council of Nigeria',
        clientLogo: verifiedClients.find(c => c.id === 'nursing-council')?.logo,
        industry: 'Regulatory & Healthcare',
        challenge: 'Graduates and practicing nurses across Nigeria experienced significant physical travel and processing delays to sit examinations, verify credentials, and renew professional practicing licenses.',
        solution: 'Centrifuge developed a secure national licensing and digital verification portal. The platform digitizes examination scheduling, result dissemination, payment confirmation, and verifiable QR-code digital certificates.',
        capabilities: [
            'Digital application and document verification pipeline',
            'Automated financial reconciliation with Remita / payment gateways',
            'Tamper-proof verifiable digital practice certificates with cryptographic QR codes'
        ],
        implementation: 'Rolled out nationwide with high-concurrency architecture supporting simultaneous examination registrations from thousands of nursing training institutions.',
        technologies: ['React', 'PostgreSQL', 'Node.js', 'Redis', 'Tailwind CSS'],
        results: [
            'Eliminated manual queues and multi-state travel for documentation',
            'Provided instantaneous online employer credential verification for domestic and international hospitals',
            'Accelerated license renewal processing time by over 80%'
        ],
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        relatedServiceSlug: 'software-development'
    },
    {
        id: 'cs-3',
        slug: 'nationwide-fleet-telematics',
        title: 'Real-Time Visibility and Route Efficiency for Inter-State Logistics',
        client: 'Enterprise Logistics Operators',
        clientLogo: verifiedClients.find(c => c.id === 'nlng')?.logo,
        industry: 'Logistics & Supply Chain',
        challenge: 'Long-haul freight operations struggled with high fuel pilferage, unexpected vehicle breakdowns on remote routes, and lack of real-time confirmation of delivery to industrial consignees.',
        solution: 'Centrifuge deployed an integrated hardware-software telematics solution combining ruggedized OBD-II / CAN-Bus sensors with our cloud-native dispatch and live tracking dashboard.',
        capabilities: [
            'Sub-second telemetry data ingestion and processing',
            'Automated geofencing alert triggers on entry and departure from terminals',
            'Driver mobile application with offline-capable digital signatures and photo capture'
        ],
        implementation: 'Full integration with in-vehicle engine sensors and automated integration with enterprise ERP billing modules.',
        technologies: ['React', 'WebSockets', 'Mapbox GIS', 'IoT Gateways', 'PostGIS', 'Tailwind CSS'],
        results: [
            'Achieved 100% end-to-end trip visibility across major transit corridors',
            'Significantly reduced fuel anomalies and unauthorized detours',
            'Instant electronic proof of delivery reducing invoicing cycles from days to minutes'
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        relatedServiceSlug: 'infrastructure'
    }
];
// Editorial Insights & Articles
export const mockArticles = [
    {
        id: 'art-1',
        slug: 'building-resilient-healthcare-software-in-emerging-markets',
        title: 'Architecting Resilient Health Information Systems for Intermittent Connectivity',
        category: 'Healthcare',
        summary: 'How offline-first data architectures and cryptographic reconciliation enable uninterrupted clinical care even when regional telecommunications fail.',
        content: `
When building clinical software for regional hospitals and primary healthcare centers across emerging markets, assuming constant 5G connectivity is an architectural failure. 

In this architectural overview, the Centrifuge engineering team explains how we designed local-first IndexedDB stores, differential delta syncing, and conflict-free replicated data types (CRDTs) to ensure doctors never face a frozen screen during urgent patient consultations.

### The Problem of Network Latency in Critical Care
In many district health facilities, power cuts and ISP downtime are daily realities. A hospital information management system that depends entirely on round-trip HTTP requests to remote cloud instances will fail when it is needed most: during medical triage.

### Our Three-Tier Sync Architecture
1. **Local-First Working Cache**: Every consultation, vitals capture, and prescription is committed locally to encrypted client storage before any network request is fired.
2. **Background Sync Worker**: Service workers monitor connectivity states and queue encrypted transactional packets with exponential backoff.
3. **Deterministic Reconciliation**: When reconnected, changes are merged using idempotent ledger timestamps, guaranteeing clinical history accuracy without overwriting concurrent nurse notes.
    `,
        author: {
            name: 'Dr. Ikenna Madu',
            role: 'Head of Health Informatics, Centrifuge Group'
        },
        date: 'March 18, 2024',
        readingTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
        featured: true,
        tags: ['Healthcare', 'Architecture', 'Offline First', 'HealthTech']
    },
    {
        id: 'art-2',
        slug: 'optimax-modular-erp-architecture',
        title: 'Why Monolithic ERPs Fail Fast-Growing Businesses: The Optimax Approach',
        category: 'Enterprise',
        summary: 'Exploring how modular micro-frontends and event-driven backends give enterprise leaders agility without the multi-year implementation nightmare.',
        content: `
Legacy enterprise resource planning systems were built in an era of static annual budgets and rigid corporate hierarchies. Today's businesses need to launch new ecommerce channels, integrate automated delivery partners, and restructure inventory workflows in days, not years.

### The Curse of Multi-Year ERP Deployments
Traditional ERP implementations frequently drag on for 18 to 24 months, with total costs ballooning while business requirements change midway. When the software finally goes live, staff resist the outdated user interface.

### The Modular Approach
With Optimax, we decoupled core operations into modular blocks: Commerce, Inventory, Accounting, and Logistics. Organizations can activate what they need today and seamlessly plug in new capabilities tomorrow without database migrations or downtime.
    `,
        author: {
            name: 'Adewale Adeleke',
            role: 'Principal Systems Architect'
        },
        date: 'February 29, 2024',
        readingTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        featured: false,
        tags: ['ERP', 'Optimax', 'Enterprise Software', 'Engineering']
    },
    {
        id: 'art-3',
        slug: 'telematics-data-pipeline-logistics',
        title: 'Processing 10 Million Vehicle Telemetry Events Daily with High Reliability',
        category: 'Logistics',
        summary: 'A deep dive into our geospatial data pipeline, stream processing, and how we deliver real-time driver feedback without cloud cost spirals.',
        content: `
Modern fleet management requires processing thousands of GPS coordinates, speed vectors, CAN-Bus diagnostics, and temperature probe readings per second. 

Here is how the Centrifuge engineering team designed our edge-to-cloud pipeline using lightweight MQTT protocols, spatial partitioning in PostGIS, and real-time WebSocket broadcast channels to keep logistics dispatchers informed in real time.
    `,
        author: {
            name: 'Fatima Sanusi',
            role: 'Lead Data & Infrastructure Engineer'
        },
        date: 'January 22, 2024',
        readingTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
        featured: false,
        tags: ['Logistics', 'IoT', 'Spatial GIS', 'Data Engineering']
    }
];
// Career Opportunities
export const mockJobs = [
    {
        id: 'job-1',
        slug: 'senior-fullstack-engineer',
        title: 'Senior Full-Stack Engineer (React & Node.js)',
        department: 'Engineering',
        location: 'Abuja / Hybrid / Remote (Nigeria)',
        type: 'Full-time',
        shortDescription: 'Build mission-critical enterprise software, healthcare platforms, and cloud solutions utilized by tens of thousands daily.',
        aboutRole: 'As a Senior Full-Stack Engineer at Centrifuge Group, you will lead the architecture and implementation of core modules across our Optimax ERP suite and public health information platforms.',
        responsibilities: [
            'Design, build, and maintain high-performance frontend interfaces with React, TypeScript, and modern CSS architectures',
            'Develop robust REST and GraphQL API services using Node.js and PostgreSQL with rigorous unit and integration test coverage',
            'Collaborate closely with product designers to translate complex operational workflows into intuitive user experiences',
            'Mentor intermediate and junior engineers, conducting thorough code reviews and advocating for engineering best practices'
        ],
        requirements: [
            '5+ years of production experience in web application development with React and TypeScript',
            'Solid command of relational database design (PostgreSQL) and query optimization',
            'Experience building and deploying scalable web services in containerized environments (Docker)',
            'Demonstrated passion for clean code, web performance, and accessible UI standards'
        ],
        niceToHave: [
            'Experience with health informatics protocols (DHIS2, FHIR/HL7) or supply chain logistics systems',
            'Familiarity with event-driven architectures (Kafka, Redis Pub/Sub, RabbitMQ)'
        ],
        benefits: [
            'Competitive compensation package with performance-based reviews',
            'Flexible hybrid working arrangements with modern tech hardware provided',
            'Comprehensive health insurance coverage for you and your dependents',
            'Dedicated learning & certification stipend'
        ],
        isActive: true
    },
    {
        id: 'job-2',
        slug: 'health-informatics-specialist',
        title: 'Health Informatics & Implementation Specialist',
        department: 'Healthcare Solutions',
        location: 'Abuja, Nigeria (Field Travel Required)',
        type: 'Full-time',
        shortDescription: 'Lead the field deployment, stakeholder engagement, and user training for national health workforce and hospital information systems.',
        aboutRole: 'Work alongside ministries of health, healthcare facilities, and international development partners to deploy digital health solutions that directly improve public health administration.',
        responsibilities: [
            'Lead requirements gathering and clinical workflow analysis with doctors, nurses, and hospital administrators',
            'Conduct hands-on user training programs across federal and state medical facilities',
            'Monitor system adoption metrics and collaborate with the engineering team to prioritize field enhancements',
            'Ensure compliance with national healthcare data governance guidelines'
        ],
        requirements: [
            'Degree in Health Informatics, Public Health, Computer Science, or related discipline',
            '3+ years experience deploying digital health systems or working with health sector stakeholders',
            'Deep understanding of healthcare workflows in hospitals and regulatory bodies',
            'Outstanding verbal and written communication skills'
        ],
        niceToHave: [
            'Hands-on experience with DHIS2, OpenMRS, or national health registries'
        ],
        benefits: [
            'Competitive salary and travel per diem allowances',
            'Medical insurance coverage',
            'Direct social impact improving national healthcare delivery'
        ],
        isActive: true
    },
    {
        id: 'job-3',
        slug: 'ui-ux-product-designer',
        title: 'Senior UI/UX Product Designer',
        department: 'Product Design',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        shortDescription: 'Shape the design system, product interfaces, and user workflows for complex enterprise dashboards and mobile field applications.',
        aboutRole: 'Bring elegance, clarity, and ergonomic precision to complex enterprise software. You will design product interfaces that people rely on 8 hours a day to run businesses and hospitals.',
        responsibilities: [
            'Design end-to-end user journeys, wireframes, high-fidelity prototypes, and design system components',
            'Conduct usability testing with enterprise customers, truck drivers, hospital clerks, and store managers',
            'Partner closely with frontend engineers to maintain design consistency and high visual polish'
        ],
        requirements: [
            '4+ years designing production web applications and SaaS platforms',
            'Mastery of Figma, design token systems, and responsive layout principles',
            'Strong portfolio demonstrating complex data visualization and dashboard design'
        ],
        niceToHave: [
            'Understanding of HTML/CSS/Tailwind and frontend engineering constraints'
        ],
        benefits: [
            'Competitive compensation package',
            'Design tool budget and high-end workstation support',
            'Autonomous product design culture'
        ],
        isActive: true
    }
];
export const mockStoreSettings = {
    storeName: 'Centrifuge Group Store',
    legalName: 'Centrifuge Information Technology Limited',
    contactEmail: 'store@centrifugegroup.co',
    supportPhone: '+234 803 000 1234',
    address: 'Plot 1083, Cadastral Zone B06, Mabushi District, Abuja, Nigeria',
    currency: 'NGN',
    currencySymbol: '₦',
    taxRate: 7.5,
    defaultShippingFee: 15000,
    freeShippingThreshold: 2000000,
    maintenanceMode: false,
};
