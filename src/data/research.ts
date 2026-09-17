// One taxonomy and display order for the homepage, archive and content schema.
export const RESEARCH_AREAS = [
  'optical-metrology',
  'gaze-interaction',
  'applied-ml',
  'llm-applications',
] as const;

export const researchDirections = [
  {
    key: 'optical-metrology',
    title: 'Optical and Imaging Metrology',
    summary: 'Current focus: ophthalmic lens inspection and OCT measurement, with related tools for atomic-resolution image analysis.',
  },
  {
    key: 'gaze-interaction',
    title: 'Eye Tracking and Human-Computer Interaction',
    summary: 'Gaze estimation and pose-based motion analysis for interaction, building on earlier research in conjunctival imaging and eye tracking.',
  },
  {
    key: 'applied-ml',
    title: 'Machine Learning for Environmental and Engineering Systems',
    summary: 'Related work in air-quality forecasting, fault-data generation and maintenance scheduling.',
  },
  {
    key: 'llm-applications',
    title: 'LLM Applications',
    summary: 'Applied language- and speech-model systems: course grading, local speech recognition, literature and application workflows, and desktop tooling.',
  },
] as const;
