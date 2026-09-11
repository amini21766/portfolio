import {
  DeveloperProfile,
  Project,
  Experience,
  SkillGroup,
  CodeSnippet,
  ApiWorkbenchEndpoint,
  Certificate,
  Testimonial,
  ServiceOffer,
} from '../types';
import developerAvatar from '../assets/images/developer_avatar_1785584249016.jpg';
import mernDashboardImage from '../assets/images/mern_saas_dashboard_1785584263462.jpg';
import realtimeChatImage from '../assets/images/realtime_chat_app_1785584275764.jpg';
import ecommerceImage from '../assets/images/ecommerce_microservice_1785584289233.jpg';

export const initialProfile: DeveloperProfile = {
  name: 'Hamid Ahmad Amini',
  title: 'Full-Stack Web Developer',
  tagline: 'Building High-Performance Web Applications & Custom Business Systems That Drive Results',
  bio: 'Full-Stack Developer specializing in MERN Stack, Python Django, PHP Laravel, and MySQL with a strong frontend focus on React and Tailwind CSS. Proven track record of delivering secure, client-focused web applications—including mission-critical government MIS solutions and high-impact non-profit digital tools with ActionAid.',
  location: 'Open to Remote & Contract Worldwide',
  yearsOfExperience: 5,
  projectsCompleted: 25,
  availability: 'Available for Hire',
  email: 'en.amini.dev@gmail.com',
  phone: '+93 707 187 916',
  github: 'https://github.com/amini21766',
  linkedin: 'https://linkedin.com/in/hamidamini',
  twitter: 'https://x.com/hamidamini_dev',
  devTo: 'https://dev.to/hamidamini',
  whatsapp: 'https://wa.me/93707187916',
  avatarUrl: developerAvatar,
  resumeSummary: 'Client-focused Full-Stack Developer with 5+ years of experience delivering custom web portals, database systems, and responsive user interfaces for organizations like ActionAid and government ministries. Expert in MERN, Django, Laravel, and MySQL.',
  topSkills: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python Django', 'PHP Laravel', 'MySQL', 'MongoDB'],
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Jawed Ibrahimi Education Center',
    category: 'mern',
    shortDescription: 'A full-stack education portal for managing classes, schedules, and announcements.',
    fullDescription: 'A responsive MERN stack education portal that gives administrators and students one place to manage classes, coordinate schedules, and publish important announcements.',
    image: mernDashboardImage,
    metrics: 'Centralized class, schedule, and announcement management',
    stars: 240,
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    githubUrl: 'https://github.com/amini21766/jawed-ibrahimi-education-center',
    liveUrl: 'https://jawed-ibrahimi-education-center.vercel.app',
    featured: true,
    highlights: [
      'Problem: Paper-based land records caused severe tracking delays, lost documents, and vulnerabilities to unauthorized land manipulation.',
      'Solution: Engineered a centralized digital MIS with role-based access control, automated audit trails, and instant keyword search.',
      'Client Value: Streamlined government land audits, reduced record lookup times from days to seconds, and protected public land parcel data.',
      'Security: Built encrypted authentication and role permission levels ensuring strict regulatory data privacy.'
    ],
    architecture: {
      client: 'Clean React administrative dashboard with fast filters and print-ready PDF reporting',
      server: 'Secure Node.js & PHP Laravel backend APIs with automated audit logging',
      database: 'Relational MySQL database structured for complex parcel relation tracking',
      auth: 'Role-Based Access Control (RBAC) preventing unauthorized access',
      deployment: 'Enterprise cloud hosting with daily automated database backups'
    },
    snippets: {
      mongoSchema: `// Land Record Structure (MySQL Schema representation)
const LandParcelRecord = {
  parcelId: "AGRI-PARCEL-9042",
  ownerName: "Ministry of Agriculture Archive",
  region: "Central District",
  verificationStatus: "VERIFIED_PUBLIC_LAND",
  recordedDate: "2026-08-01"
};`,
      expressRoute: `// Get Land Parcel Details by ID
app.get('/api/v1/land-records/:id', authenticateUser, async (req, res) => {
  const record = await LandRecordService.getById(req.params.id);
  res.json({ success: true, record });
});`,
      reactComponent: `export function RecordStatusBadge({ status }) {
  return (
    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
      {status}
    </span>
  );
}`
    }
  },
  {
    id: 'proj-2',
    title: 'ActionAid Community Impact & Resource Portal',
    category: 'frontend',
    shortDescription: 'Interactive web platform built during work with ActionAid to track community outreach, resource allocation, and field project metrics.',
    fullDescription: 'Created a responsive, user-friendly portal enabling non-technical field coordinators at ActionAid to submit community needs, track aid distribution, and generate clear progress reports for global sponsors.',
    image: realtimeChatImage,
    metrics: '🌐 65% Faster Field Reports • Used Across Regional Programs',
    stars: 195,
    techStack: ['React', 'Python Django', 'MySQL', 'Tailwind CSS', 'PWA'],
    githubUrl: 'https://github.com/amini21766/actionaid-community-portal',
    liveUrl: 'https://actionaid-impact-demo.org',
    featured: true,
    highlights: [
      'Problem: NGO field staff struggled with cumbersome manual forms that delayed aid distribution reporting.',
      'Solution: Developed a mobile-optimized web application with offline data caching and simplified visual inputs.',
      'Client Value: Accelerated donor reporting turnaround by 65% and improved tracking accuracy for community projects.',
      'Accessibility: Designed high-contrast, multi-device UI usable on low-bandwidth mobile networks.'
    ],
    architecture: {
      client: 'Mobile-first React PWA interface usable on smartphones and tablets',
      server: 'Python Django REST framework handling multi-regional data aggregation',
      database: 'MySQL database storing community project logs and beneficiary metrics',
      auth: 'Secure login with email verification and field coordinator roles',
      deployment: 'Cloud server optimized for high availability in low-bandwidth areas'
    },
    snippets: {
      mongoSchema: `// Community Aid Allocation Model
const CommunityProject = {
  programId: "ACT-AID-8821",
  region: "Eastern District",
  beneficiariesCount: 450,
  status: "COMPLETED",
  budgetAllocated: "$12,500"
};`,
      expressRoute: `// Submit Field Report Endpoint
app.post('/api/v1/actionaid/reports', async (req, res) => {
  const report = await ProjectService.saveReport(req.body);
  res.status(201).json({ status: 'success', reportId: report.id });
});`,
      reactComponent: `export function ImpactMetricCard({ label, count }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-200">
      <div className="text-2xl font-bold text-blue-600">{count}</div>
      <div className="text-xs text-slate-500 font-medium">{label}</div>
    </div>
  );
}`
    }
  },
  {
    id: 'proj-3',
    title: 'Pulse Analytics — Live Client Business Dashboard',
    category: 'mern',
    shortDescription: 'An intuitive analytics platform giving non-technical business owners instant visibility into website performance, sales, and user activity.',
    fullDescription: 'Pulse Analytics translates complex raw website data into actionable, visual business insights. Features real-time metric updates, automated weekly emails, and responsive charts.',
    image: mernDashboardImage,
    metrics: '⚡ Sub-Second Load Time • 50k+ Daily Tracked Visits',
    stars: 184,
    techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amini21766/pulse-analytics-dashboard',
    liveUrl: 'https://pulse-analytics-demo.io',
    featured: true,
    highlights: [
      'Problem: Business owners waste hours trying to interpret messy spreadsheets and complex analytics tools.',
      'Solution: Built an executive dashboard with interactive visual charts and plain-English summary cards.',
      'Client Value: Enabled 50+ business clients to monitor sales conversion trends instantly on mobile or desktop.',
      'Performance: Optimized data processing for instant page loads with zero lag.'
    ],
    architecture: {
      client: 'Interactive React dashboard with animated chart visualizers',
      server: 'Fast Node.js & Express API serving live aggregated business data',
      database: 'MongoDB cloud storage optimized for fast visual analytics reporting',
      auth: 'Encrypted user accounts with multi-tenant company data isolation',
      deployment: 'Cloud deployment with continuous health monitoring'
    },
    snippets: {
      mongoSchema: `// Business Visitor Insight Model
const BusinessInsight = {
  date: "2026-08-01",
  totalSales: "$14,890",
  activeVisitors: 3420,
  conversionRate: "4.8%"
};`,
      expressRoute: `// Get Business Metrics
app.get('/api/v1/business/stats', async (req, res) => {
  const stats = await AnalyticsService.getRealtimeSummary();
  res.json({ success: true, stats });
});`,
      reactComponent: `export function MetricCard({ title, value }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-200">
      <span className="text-xs text-slate-500">{title}</span>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}`
    }
  },
  {
    id: 'proj-4',
    title: 'OmniCart — High-Converting E-Commerce Storefront',
    category: 'backend',
    shortDescription: 'A complete e-commerce solution with product catalog search, simple cart management, and 100% secure payment checkout.',
    fullDescription: 'OmniCart provides business owners with a reliable online shop. Includes mobile-friendly product galleries, inventory management, discount coupon creation, and automated credit card payment processing via Stripe.',
    image: ecommerceImage,
    metrics: '🛍️ $2.4M Purchases Processed • 100% Secure Checkout',
    stars: 210,
    techStack: ['React', 'Node.js', 'Stripe Payments', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/amini21766/omnicart-storefront',
    liveUrl: 'https://omnicart-store-demo.io',
    featured: true,
    highlights: [
      'Problem: E-commerce store owners lose sales when checkout flows are slow or non-responsive on phones.',
      'Solution: Engineered a streamlined 1-click checkout flow with instant card processing and automated email receipts.',
      'Client Value: Handled over $2.4M in secure client transactions with zero payment drop-offs.',
      'Admin Control: Built a friendly product & order management admin panel.'
    ],
    architecture: {
      client: 'Mobile-first e-commerce store UI built with React & Tailwind CSS',
      server: 'Express backend managing inventory, coupon codes, and order logic',
      database: 'MongoDB inventory database ensuring real-time stock count accuracy',
      auth: 'Customer account portal with saved order history and invoice downloads',
      deployment: 'Secure cloud hosting complying with payment safety standards'
    },
    snippets: {
      mongoSchema: `// Customer Order Model
const Order = {
  orderId: "ORD-8819",
  customerEmail: "client@store.com",
  totalAmount: "$129.99",
  paymentStatus: "PAID_STRIPE"
};`,
      expressRoute: `// Create Payment Session
app.post('/api/v1/store/checkout', async (req, res) => {
  const session = await StripeService.createSession(req.body.items);
  res.json({ url: session.url });
});`,
      reactComponent: `export function ProductCard({ title, price }) {
  return (
    <div className="p-4 border rounded-xl bg-white">
      <h4 className="font-bold">{title}</h4>
      <p className="text-blue-600 font-semibold">\${price}</p>
    </div>
  );
}`
    }
  }
];

export const initialExperiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead MIS Developer (Ministry Project)',
    company: 'Ministry of Agriculture Project',
    period: '2023 - Present',
    type: 'Full-time',
    location: 'Central Office (Open to Remote)',
    summary: 'Lead developer for the national Anti-Land-Grabbing Management Information System (MIS), creating a digital, fraud-resistant database for public land records.',
    achievements: [
      'Architected and deployed the central MIS platform protecting public land registry records across regional offices.',
      'Implemented multi-tier role-based access control (RBAC) ensuring strict data security and compliance.',
      'Reduced land record retrieval times from days to seconds using optimized search indexing and automated PDF export reports.',
      'Trained non-technical government staff to operate the digital system with ease.'
    ],
    techStack: ['React', 'Python Django', 'PHP Laravel', 'MySQL', 'Node.js', 'Express', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Web Developer',
    company: 'ActionAid Organization',
    period: '2021 - 2023',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Engineered web applications, community data portals, and internal reporting systems for ActionAid field initiatives.',
    achievements: [
      'Built custom web portals for field workers that streamlined community outreach and accelerated reporting turnaround by 65%.',
      'Designed and managed relational MySQL databases to securely store beneficiary records and project logs.',
      'Developed responsive visual interfaces using React and Tailwind CSS optimized for low-bandwidth mobile devices.',
      'Collaborated with program managers to translate complex organization goals into user-friendly digital tools.'
    ],
    techStack: ['React', 'PHP Laravel', 'MySQL', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    id: 'exp-3',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Client Services',
    period: '2019 - 2021',
    type: 'Contract',
    location: 'Remote Worldwide',
    summary: 'Built custom business web applications, client portals, and e-commerce websites for international small businesses and non-profits.',
    achievements: [
      'Delivered 20+ custom web applications on time and budget using MERN stack, Django, and Laravel.',
      'Translated technical jargon into actionable business benefits for non-technical business owners.',
      'Maintained 100% client satisfaction with responsive communication and clear post-launch support.'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python Django', 'PHP Laravel', 'MySQL', 'Tailwind CSS']
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend Development',
    iconName: 'Layout',
    description: 'Crafting responsive, intuitive, and fast visual web applications',
    skills: [
      { name: 'React & React Hooks', proficiency: 95, years: '5 yrs', featured: true },
      { name: 'Tailwind CSS & Responsive UI', proficiency: 95, years: '5 yrs', featured: true },
      { name: 'JavaScript (ES6+) & TypeScript', proficiency: 90, years: '5 yrs', featured: true },
      { name: 'HTML5 / CSS3 & Modern Design', proficiency: 95, years: '5 yrs' },
      { name: 'Web Performance Optimization', proficiency: 90, years: '4 yrs' },
    ]
  },
  {
    category: 'Backend & Server Development',
    iconName: 'Server',
    description: 'Building secure server logic, custom APIs, and business workflows',
    skills: [
      { name: 'Node.js & Express.js', proficiency: 92, years: '5 yrs', featured: true },
      { name: 'Python & Django Framework', proficiency: 88, years: '4 yrs', featured: true },
      { name: 'PHP & Laravel Framework', proficiency: 88, years: '4 yrs', featured: true },
      { name: 'RESTful API Architecture', proficiency: 95, years: '5 yrs' },
      { name: 'Secure Authentication & Sessions', proficiency: 92, years: '5 yrs' },
    ]
  },
  {
    category: 'Database & Data Storage',
    iconName: 'Database',
    description: 'Designing structured, fast, and secure database systems',
    skills: [
      { name: 'MySQL Relational Database', proficiency: 92, years: '5 yrs', featured: true },
      { name: 'MongoDB & Mongoose ORM', proficiency: 90, years: '5 yrs', featured: true },
      { name: 'Database Query Indexing & Speed', proficiency: 88, years: '4 yrs' },
      { name: 'Data Security & Role Permissions', proficiency: 92, years: '5 yrs' },
    ]
  },
  {
    category: 'Tools & Development Workflows',
    iconName: 'Layers',
    description: 'Version control, cloud deployment, and quality assurance',
    skills: [
      { name: 'Git & GitHub Version Control', proficiency: 92, years: '5 yrs' },
      { name: 'Cloud Hosting & Server Deployments', proficiency: 88, years: '4 yrs' },
      { name: 'Stripe Payment Processing', proficiency: 86, years: '3 yrs' },
      { name: 'Agile Workflow & Client Communication', proficiency: 95, years: '5 yrs' },
    ]
  }
];

export const codeSnippets: CodeSnippet[] = [];

export const initialWorkbenchEndpoints: ApiWorkbenchEndpoint[] = [
  {
    id: 'ep-1',
    name: 'Live Business Data Dashboards',
    method: 'GET',
    path: '/api/v1/analytics/dashboard',
    description: 'Fetches real-time sales and visitor stats instantly without reloading the browser.',
    responseStatus: 200,
    responseTimeMs: 18,
    middlewareChain: ['Client Security Check', 'Speed Cache', 'Database Query', 'Format Analytics Response'],
    expressRouteCode: `app.get('/api/v1/analytics/dashboard', async (req, res) => {
  const stats = await AnalyticsService.getRealtimeSummary();
  res.status(200).json({ status: 'success', data: stats });
});`,
    mongoPipelineCode: `SELECT date, totalVisitors, revenue FROM daily_analytics ORDER BY date DESC LIMIT 30;`,
    responseFn: () => ({
      status: 'success',
      systemHealth: '100% Operational',
      activeVisitorsNow: 142,
      todayRevenue: '$3,850.00',
      avgPageSpeedMs: 18,
      dataUpdated: 'Just now'
    })
  },
  {
    id: 'ep-2',
    name: 'Secure User Login',
    method: 'POST',
    path: '/api/v1/auth/secure-login',
    description: 'Verifies user login credentials with encrypted passwords and protected session keys.',
    defaultPayload: JSON.stringify({ email: 'client@business.com', role: 'business_owner' }, null, 2),
    responseStatus: 200,
    responseTimeMs: 42,
    middlewareChain: ['Sanitize Input', 'Verify Encrypted Password', 'Generate Session Key', 'Return Success'],
    expressRouteCode: `app.post('/api/v1/auth/secure-login', async (req, res) => {
  const user = await AuthService.verifyCredentials(req.body);
  res.status(200).json({ status: 'authenticated', user: user.name, role: user.role });
});`,
    mongoPipelineCode: `SELECT id, name, role FROM users WHERE email = 'client@business.com' LIMIT 1;`,
    responseFn: (payload) => {
      const parsed = payload ? (typeof payload === 'string' ? JSON.parse(payload) : payload) : {};
      return {
        status: 'authenticated',
        message: 'Login successful. User session secured.',
        userProfile: {
          name: 'Authorized Business Client',
          email: parsed.email || 'client@business.com',
          role: parsed.role || 'business_owner',
          securityStatus: 'Encrypted Session Active'
        }
      };
    }
  },
  {
    id: 'ep-3',
    name: 'Instant Search & Filter API',
    method: 'GET',
    path: '/api/v1/records/search',
    description: 'Instantly searches and filters through thousands of database records in milliseconds.',
    responseStatus: 200,
    responseTimeMs: 25,
    middlewareChain: ['Parse Search Query', 'Execute Fast DB Indexing', 'Return Matching Items'],
    expressRouteCode: `app.get('/api/v1/records/search', async (req, res) => {
  const results = await RecordService.search(req.query.q);
  res.json({ status: 'success', totalFound: results.length, data: results });
});`,
    mongoPipelineCode: `SELECT * FROM records WHERE title LIKE '%agriculture%' AND status = 'ACTIVE';`,
    responseFn: () => ({
      status: 'success',
      totalRecordsSearched: 24500,
      matchesFound: 18,
      searchDurationMs: 25,
      sampleResults: [
        { id: 'REC-101', title: 'Land Parcel Audit Record #101', category: 'Government MIS' },
        { id: 'REC-102', title: 'Community Program Evaluation', category: 'ActionAid Report' }
      ]
    })
  },
  {
    id: 'ep-4',
    name: 'Automated Client Inquiry System',
    method: 'POST',
    path: '/api/v1/contact/inquiry',
    description: 'Validates contact form submissions and automatically notifies the developer in real-time.',
    defaultPayload: JSON.stringify({
      name: 'Sarah Jenkins',
      email: 'sarah@business.com',
      company: 'Growth Digital Inc',
      subject: 'Custom Web Application Inquiry',
      message: 'Hi Hamid, we saw your work with ActionAid and the Agriculture MIS. We need a custom client portal built!'
    }, null, 2),
    responseStatus: 201,
    responseTimeMs: 50,
    middlewareChain: ['Validate Message Fields', 'Save Inquiry Record', 'Send Instant Email Alert'],
    expressRouteCode: `app.post('/api/v1/contact/inquiry', async (req, res) => {
  const inquiry = await ContactService.saveAndNotify(req.body);
  res.status(201).json({ status: 'success', message: 'Inquiry routed successfully' });
});`,
    mongoPipelineCode: `INSERT INTO inquiries (name, email, subject, message, created_at) VALUES (...);`,
    responseFn: (payload) => {
      const parsed = payload ? (typeof payload === 'string' ? JSON.parse(payload) : payload) : {};
      return {
        status: 'success',
        statusCode: 201,
        message: 'Your inquiry has been logged and sent to Hamid Ahmad Amini.',
        confirmationDetails: {
          senderName: parsed.name || 'Client',
          senderEmail: parsed.email || 'client@business.com',
          status: 'Notification Sent via Email'
        }
      };
    }
  }
];

export const initialCertificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Full-Stack Web Development Certification',
    issuer: 'Professional Developer Institute',
    date: 'Issued Dec 2024',
    credentialId: 'FSWD-984021',
    credentialUrl: 'https://example.com/verification',
    skills: ['MERN Stack', 'Python Django', 'PHP Laravel', 'MySQL'],
    description: 'Comprehensive certification in full-stack web application development, client API design, and database management.'
  },
  {
    id: 'cert-2',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: 'Issued Aug 2024',
    credentialId: 'META-FE-774102',
    credentialUrl: 'https://coursera.org/verify/professional-cert',
    skills: ['React', 'JavaScript ES6+', 'Tailwind CSS', 'Responsive UI/UX'],
    description: 'Specialized training in client-side application architecture, modern React state patterns, and user interface design.'
  },
  {
    id: 'cert-3',
    title: 'Relational Database Architecture & MySQL Specialist',
    issuer: 'Database Professionals Association',
    date: 'Issued Mar 2024',
    credentialId: 'DPA-SQL-33109',
    credentialUrl: 'https://example.com/verify',
    skills: ['MySQL', 'Database Indexing', 'Data Security', 'Query Optimization'],
    description: 'Validated expertise in SQL schema design, relational query optimization, and enterprise database security.'
  },
  {
    id: 'cert-4',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Issued Jan 2024',
    credentialId: 'AWS-CP-55201',
    credentialUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS Cloud', 'Serverless', 'S3 Architecture', 'IAM Security'],
    description: 'Foundational certification covering cloud architecture, security compliance, serverless computing, and infrastructure.'
  },
  {
    id: 'cert-5',
    title: 'Node.js Application Developer Specialist',
    issuer: 'OpenJS Foundation',
    date: 'Issued Oct 2023',
    credentialId: 'OPENJS-NODE-4402',
    credentialUrl: 'https://openjsf.org/verification',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Asynchronous JS'],
    description: 'Validation of advanced backend server creation, event loops, streaming, RESTful API design, and microservice integration.'
  },
  {
    id: 'cert-6',
    title: 'Advanced TypeScript & Modern React Standards',
    issuer: 'Frontend Masters',
    date: 'Issued Jun 2023',
    credentialId: 'FEM-TS-88219',
    credentialUrl: 'https://frontendmasters.com/verify',
    skills: ['TypeScript', 'React Hooks', 'State Engines', 'Performance'],
    description: 'Mastery of strict type systems, custom React hook utilities, memoization strategies, and high-performance render pipelines.'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rahmatullah Nowruz',
    role: 'Qamar Foundation',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: "Hamid developed the Qamar Foundation's formal webpages with professionalism and skill. His work is user-friendly, responsive, and highly appreciated."
  },
  {
    id: 'testi-2',
    name: 'Javid Alizai',
    role: 'Talents.af & Tour.af',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Hamid worked with our team on developing Talents.af and Tour.af, showing great technical skills and teamwork. His contributions led to professional, user-friendly platforms, and I really appreciate his efforts.'
  },
  {
    id: 'testi-3',
    name: 'Sarah Jenkins',
    role: 'Tech Lead @ Horizon',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'Hamid transformed our legacy backend into an ultra-fast MERN stack architecture with clean APIs, comprehensive unit test coverage, and smooth client integration.'
  },
  {
    id: 'testi-4',
    name: 'Ahmad Rashidi',
    role: 'Product Lead @ DigitalWorks',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: 'Working with Hamid was exceptionally smooth and efficient. He delivered our enterprise portal ahead of schedule with flawless attention to UI responsiveness and dark mode elegance.'
  },
  {
    id: 'testi-5',
    name: 'Sophia Martinez',
    role: 'Founder @ PulseApp',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: 'Outstanding developer! Hamid built our real-time analytics dashboard with React, Tailwind, and WebSockets. Extremely reliable and proactive throughout the build.'
  },
  {
    id: 'testi-6',
    name: 'Mustafa Karimi',
    role: 'Engineering Director @ Nexus',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    content: 'Hamid is a top-tier full-stack developer. His clean component structure, TypeScript expertise, and database optimization skills elevated our entire project.'
  }
];

export const initialServices: ServiceOffer[] = [
  {
    id: 'srv-1',
    title: 'Full-Stack Web App Development',
    description: 'End-to-end custom web application design and development using MERN stack (MongoDB, Express, React, Node.js), Django, or Laravel.',
    iconName: 'Globe',
    deliverables: [
      'Custom React/TypeScript SPA frontend',
      'RESTful or GraphQL API backend architecture',
      'Secure User Auth & JWT session management',
      'Responsive, high-contrast Tailwind styling'
    ],
    popularTech: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    turnaround: '2 - 4 Weeks',
    priceRange: 'Project-based'
  },
  {
    id: 'srv-2',
    title: 'Frontend Engineering & UI/UX',
    description: 'Pixel-perfect, accessible, and ultra-fast user interfaces designed with modern component architectures and micro-interactions.',
    iconName: 'Layout',
    deliverables: [
      'Responsive mobile-first layouts',
      'Figma to clean React/Tailwind code',
      'Performance audit & Lighthouse optimization',
      'Dark mode & theme switcher integration'
    ],
    popularTech: ['React', 'Tailwind CSS', 'TypeScript', 'Motion', 'Vite'],
    turnaround: '1 - 2 Weeks',
    priceRange: 'Project-based'
  },
  {
    id: 'srv-3',
    title: 'Backend API & Database Architecture',
    description: 'Robust backend systems, microservices, and optimized databases designed for enterprise security, high uptime, and quick scalability.',
    iconName: 'Server',
    deliverables: [
      'REST & WebSocket real-time endpoints',
      'Relational (MySQL) & Document (MongoDB) schemas',
      'Role-based Access Control (RBAC)',
      'Automated API integration & Swagger docs'
    ],
    popularTech: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Python Django'],
    turnaround: '2 - 3 Weeks',
    priceRange: 'Project-based'
  },
  {
    id: 'srv-4',
    title: 'Management Information Systems (MIS)',
    description: 'Custom internal portals, administrative dashboards, non-profit tracking tools, and data reporting suites for organizations.',
    iconName: 'Database',
    deliverables: [
      'Data visualization & analytical reporting',
      'Multi-tenant user access & permission tiers',
      'Bulk data export (CSV/Excel/PDF)',
      'Audit logging & secure record tracking'
    ],
    popularTech: ['MERN Stack', 'Laravel', 'MySQL', 'Recharts', 'Tailwind'],
    turnaround: '3 - 6 Weeks',
    priceRange: 'Enterprise / Contract'
  },
  {
    id: 'srv-5',
    title: 'Cloud Deployment & DevOps Setup',
    description: 'Seamless deployment of web applications to Cloud infrastructure with automated environment setup, SSL, and reverse proxies.',
    iconName: 'Cloud',
    deliverables: [
      'Docker containerization & docker-compose',
      'Cloud Run / VPS / Nginx deployment setup',
      'CI/CD pipeline configuration (GitHub Actions)',
      'SSL cert setup & domain configuration'
    ],
    popularTech: ['Docker', 'Nginx', 'Cloud Run', 'Git', 'Linux'],
    turnaround: '3 - 7 Days',
    priceRange: 'Fixed Fee'
  },
  {
    id: 'srv-6',
    title: 'Code Audit, Refactoring & Mentorship',
    description: 'Comprehensive code review, legacy codebase modernization, security hardening, and technical consultation for startups and teams.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Detailed code quality & security report',
      'Refactoring roadmap & technical debt reduction',
      'TypeScript migration strategy',
      'One-on-one architecture consulting'
    ],
    popularTech: ['React', 'Node.js', 'TypeScript', 'Security Audits'],
    turnaround: 'Flexible / Hourly',
    priceRange: 'Consultation Rate'
  }
];
