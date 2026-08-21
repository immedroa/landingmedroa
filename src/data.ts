import { CategoryInfo, MethodStep, ServiceInfo } from './types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrXq-qyG7HRGYVortUWaP5ALkBXbnOSi7gFEXBE1O_Dv9VzP0t0xk38AufE6bg0l2LlNxgFXbVIjcQFT3P3H-H6GBh_e99sPATvOyXtO4g_2UBiOxJ2q9a8oVcLqcOC3goMxzY5VR_knlpYQb_rDcmRPOvMgaAwemdBQkNPvaVtV4H7Zo9zYZaOKmD1WhjynWJUCEYgUugAXH3r4NOdE7BJskBi4MmPEAAp7IT7RycsHk0ij9QK2kc';

export const PAPER_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuClRzoZmKXBK1X_3XG4isrJR5WmNgsmOut7EHce8bJH1bLYbK_9Yq_9vGvngqEYvoT13oTubK4vc3Lpjvq4YxQDCOvmpS0L6SoPw_RfOrro6initpASkUVkpULlsxKaxJdKfy3HVl79DuLblFYqrDkKZEZ7LJI53thR8r2yNsTL1d4Ua870N_tgowaIy1Aui0aKhDuwIJHw_uzfwZs1NIpU1QtwoJvDT7ld8UlnpvhtdxJPoOn6CGwB';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'fondos',
    icon: 'coins',
    title: 'Captación de Fondos',
    subtitle: 'Subsidios No Reembolsables',
    description: 'Estructuramos, redactamos y postulamos proyectos a fondos concursables públicos para financiar el crecimiento de su negocio sin devolver un solo sol.',
    features: [
      'Subsidios desde S/ 45,000 hasta S/ 500,000',
      'Capital 100% no reembolsable (sin deuda ni acciones)',
      'Acompañamiento integral hasta la rendición final'
    ],
    ctaText: 'Simular Elegibilidad',
    prefillValue: 'Consultoría Fondos No Reembolsables (PYMES y Startups).'
  },
  {
    id: 'tecnologia',
    icon: 'code',
    title: 'Tecnología e Ingeniería',
    subtitle: 'Software a Medida & E-commerce',
    description: 'Diseñamos y desarrollamos soluciones tecnológicas robustas que automatizan procesos y escalan operaciones comerciales de alta disponibilidad.',
    features: [
      'Desarrollo de Software Web & Aplicaciones Móviles',
      'Sistemas ERP, CRM y automatización de procesos',
      'E-commerce avanzado y pasarelas de pago'
    ],
    ctaText: 'Cotizar Proyecto de TI',
    prefillValue: 'Creación de soluciones digitales - Software, websites.'
  },
  {
    id: 'marketing',
    icon: 'marketing',
    title: 'Marketing & Publicidad B2B',
    subtitle: 'Escalamiento & Tracción Comercial',
    description: 'Diseñamos y ejecutamos campañas de adquisición digital de alta rentabilidad para captar prospectos y posicionar marcas en mercados competitivos.',
    features: [
      'Estrategia de pauta publicitaria (Google & Meta Ads)',
      'Generación de prospectos calificados (B2B Leads)',
      'Posicionamiento y optimización de presencia de marca'
    ],
    ctaText: 'Solicitar Plan de Growth',
    prefillValue: 'Escalamiento de presencia en redes sociales, marketing y publicidad.'
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'digitalizacion',
    icon: 'devices',
    title: 'Digitalización',
    description:
      'E-commerce, implementación de software especializado y transformación digital integral.',
    highlight: 'Financia hasta el 70% del costo total sin dilución.',
    examples: ['Sistemas ERP / CRM en la nube', 'Plataformas B2B / B2C e-commerce', 'Ciberseguridad y automatización'],
    maxGrantEstimate: 'S/ 45,000'
  },
  {
    id: 'certificacion',
    icon: 'verified',
    title: 'Certificación',
    description:
      'Normas ISO, certificaciones de calidad y estandarización de procesos operativos.',
    highlight: 'Auditorías, consultorías de implementación y sellos internacionales.',
    examples: ['ISO 9001 (Calidad)', 'ISO 27001 (Seguridad de Información)', 'HACCP / BPM / GlobalGAP'],
    maxGrantEstimate: 'S/ 45,000'
  },
  {
    id: 'innovacion',
    icon: 'lightbulb',
    title: 'Innovación',
    description:
      'Proyectos de Investigación y Desarrollo (I+D), creación de nuevos productos y validación comercial.',
    highlight: 'Fondos concursables de alto impacto para prototipos y scale-ups.',
    examples: ['Desarrollo de nuevo hardware/software', 'Validación clínica o técnica', 'Ensayos de laboratorio y patentes'],
    maxGrantEstimate: 'S/ 200,000 - S/ 500,000'
  },
  {
    id: 'economia-circular',
    icon: 'recycling',
    title: 'Economía Circular',
    description:
      'Sostenibilidad, eficiencia energética y modelos de negocio de impacto ambiental positivo.',
    highlight: 'Líneas preferentes orientadas a descarbonización y valorización.',
    examples: ['Eficiencia energética y solar', 'Revalorización de mermas y residuos', 'Ecodiseño y bioempaques'],
    maxGrantEstimate: 'Hasta S/ 500,000'
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: 1,
    title: 'Diagnóstico',
    description:
      'Evaluamos las necesidades de su empresa, la viabilidad técnica del desarrollo de TI o la elegibilidad para fondos concursables.',
    deliverables: ['Scoring preliminar de viabilidad', 'Propuesta técnica comercial', 'Checklist documental y de requisitos']
  },
  {
    number: 2,
    title: 'Estrategia',
    description:
      'Diseñamos el plan de acción, la arquitectura de software, la estrategia de marketing o la formulación y presupuesto del proyecto.',
    deliverables: ['Roadmap del proyecto e hitos', 'Presupuesto justificado', 'Arquitectura técnica / Plan de pauta']
  },
  {
    number: 3,
    title: 'Ejecución',
    description:
      'Desarrollamos las soluciones de TI, implementamos campañas de marketing o postulamos a los fondos concursables con máximo rigor.',
    deliverables: ['Código fuente / Postulación cargada', 'Configuración de pauta y anuncios', 'Entregables técnicos mensuales']
  },
  {
    number: 4,
    title: 'Éxito & Cumplimiento',
    description:
      'Acompañamos en el despliegue comercial, la optimización continua de campañas o la rendición financiera y técnica ante entes gubernamentales.',
    deliverables: ['Mantenimiento y soporte técnico', 'Optimización de ROI y conversiones', 'Informes de cierre y desembolsos']
  }
];

export const DIRECT_CHANNELS = {
  whatsapp: {
    number: '+51 906 000 905',
    link: 'https://wa.me/51906000905?text=Hola%20Medroa,%20quisiera%20solicitar%20un%20diagn%C3%B3stico%20para%20postulaci%C3%B3n%20a%20fondos%20no%20reembolsables.'
  },
  email: {
    address: 'medroavargas@gmail.com',
    link: 'mailto:medroavargas@gmail.com?subject=Consulta%20Fondos%20No%20Reembolsables%20-%20Medroa'
  },
  calendar: {
    url: 'cal.com/marcelo-medroa',
    link: 'https://cal.com/marcelo-medroa/30min'
  }
};

