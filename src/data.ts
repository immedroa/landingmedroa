import { CategoryInfo, MethodStep, ServiceInfo } from './types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrXq-qyG7HRGYVortUWaP5ALkBXbnOSi7gFEXBE1O_Dv9VzP0t0xk38AufE6bg0l2LlNxgFXbVIjcQFT3P3H-H6GBh_e99sPATvOyXtO4g_2UBiOxJ2q9a8oVcLqcOC3goMxzY5VR_knlpYQb_rDcmRPOvMgaAwemdBQkNPvaVtV4H7Zo9zYZaOKmD1WhjynWJUCEYgUugAXH3r4NOdE7BJskBi4MmPEAAp7IT7RycsHk0ij9QK2kc';

export const PAPER_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuClRzoZmKXBK1X_3XG4isrJR5WmNgsmOut7EHce8bJH1bLYbK_9Yq_9vGvngqEYvoT13oTubK4vc3Lpjvq4YxQDCOvmpS0L6SoPw_RfOrro6initpASkUVkpULlsxKaxJdKfy3HVl79DuLblFYqrDkKZEZ7LJI53thR8r2yNsTL1d4Ua870N_tgowaIy1Aui0aKhDuwIJHw_uzfwZs1NIpU1QtwoJvDT7ld8UlnpvhtdxJPoOn6CGwB';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'diagnostico',
    icon: 'coins',
    title: 'Evaluación inicial del proyecto',
    subtitle: 'DIAGNÓSTICO Y ELEGIBILIDAD',
    description: 'Analizamos el perfil de tu empresa, el estado de tu iniciativa y el nivel de encaje con líneas de cofinanciamiento no reembolsable.',
    features: [
      'Revisión de elegibilidad.',
      'Identificación de fondo o línea aplicable.',
      'Detección de brechas técnicas y documentales.'
    ],
    ctaText: 'Solicitar evaluación',
    prefillValue: 'Diagnóstico: Evaluación inicial del proyecto'
  },
  {
    id: 'formulacion',
    icon: 'code',
    title: 'Estructuración técnica de la postulación',
    subtitle: 'FORMULACIÓN DE PROYECTO',
    description: 'Convertimos tu necesidad empresarial en una propuesta clara, coherente y correctamente sustentada, con objetivos, actividades, cronograma, presupuesto e indicadores.',
    features: [
      'Formulación narrativa y técnica.',
      'Presupuesto y cronograma.',
      'Ordenamiento documental.'
    ],
    ctaText: 'Ver alcance',
    prefillValue: 'Diagnóstico: Estructuración técnica de la postulación'
  },
  {
    id: 'acompanamiento',
    icon: 'marketing',
    title: 'Soporte durante el proceso',
    subtitle: 'POSTULACIÓN Y ACOMPAÑAMIENTO',
    description: 'Te acompañamos en la revisión final del expediente, la presentación de la postulación y la atención de observaciones vinculadas a la convocatoria.',
    features: [
      'Revisión final del expediente.',
      'Acompañamiento durante la postulación.',
      'Orientación inicial posterior, según alcance contratado.'
    ],
    ctaText: 'Agendar diagnóstico',
    prefillValue: 'Diagnóstico: Soporte durante el proceso'
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'digitalizacion',
    icon: 'devices',
    title: 'Digitalización',
    description: 'Proyectos orientados a transformación digital, incorporación de herramientas tecnológicas y mejora de procesos empresariales.',
    highlight: 'Financia hasta el 70% del costo total sin dilución.',
    examples: [
      'Sistemas ERP o CRM en la nube.',
      'Plataformas B2B o B2C e-commerce.',
      'Ciberseguridad y automatización.'
    ],
    maxGrantEstimate: 'Hasta S/ 45,000 de cofinanciamiento RNR'
  },
  {
    id: 'certificacion',
    icon: 'verified',
    title: 'Certificación',
    description: 'Normas ISO, certificaciones de calidad y estandarización de procesos operativos.',
    highlight: 'Certificaciones individuales o binormas: hasta S/ 45,000.00 de cofinanciamiento RNR. Certificaciones en trinorma: hasta S/ 60,000.00 de cofinanciamiento RNR.',
    examples: [
      'ISO 9001 (Calidad).',
      'ISO 27001 (Seguridad de la Información).',
      'HACCP / BPM / GlobalG.A.P.'
    ],
    maxGrantEstimate: 'Hasta S/ 45,000 o S/ 60,000 de cofinanciamiento RNR'
  },
  {
    id: 'innovacion',
    icon: 'lightbulb',
    title: 'Innovación',
    description: 'Proyectos orientados a investigación, desarrollo, validación técnica o comercial y creación de nuevos productos, servicios o soluciones.',
    highlight: 'Fondos concursables de alto impacto para prototipos y scale-ups.',
    examples: [
      'Desarrollo de nuevo hardware o software.',
      'Validación clínica o técnica.',
      'Ensayos de laboratorio y patentes.'
    ],
    maxGrantEstimate: 'S/ 200,000 a S/ 500,000'
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: 1,
    title: 'Diagnóstico inicial',
    description: 'Revisamos tu empresa, tu proyecto y la convocatoria más adecuada.',
    deliverables: []
  },
  {
    number: 2,
    title: 'Evaluación de elegibilidad',
    description: 'Detectamos requisitos, brechas y viabilidad de postulación.',
    deliverables: []
  },
  {
    number: 3,
    title: 'Formulación del proyecto',
    description: 'Ordenamos la propuesta técnica, documental y presupuestal.',
    deliverables: []
  },
  {
    number: 4,
    title: 'Postulación acompañada',
    description: 'Te asistimos en la presentación y revisión final del expediente.',
    deliverables: []
  },
  {
    number: 5,
    title: 'Seguimiento orientativo',
    description: 'Te guiamos ante observaciones o en la etapa inicial de ejecución, según el alcance contratado.',
    deliverables: []
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
    label: 'Seleccionar fecha y hora',
    link: 'https://calendar.app.google/KM76Txgz1kS2LZNPA'
  }
};

