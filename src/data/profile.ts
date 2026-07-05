export const researchDirections = [
  {
    key: 'medical-metrology',
    title: 'Medical and Optical Metrology',
    summary:
      'Ophthalmic lenses, OCT images, microscopy data, and atomic-resolution images converted into repeatable measurement workflows.',
    projects: ['DM_Scan', 'Microlens_DF', 'OCT_LatRes', 'STEM_atomap_GUI'],
    grants: [
      'National Key R&D Program: defocus microstructure lens wear detection and key-parameter assessment',
    ],
    courses: ['Digital Image Processing'],
    evidence: [
      'Dark-field lens-wear dataset, defect detection and scoring workflow',
      'OCT B-scan lateral-resolution and contact-lens measurement tools',
      'STEM atomic-position GUI for displacement and strain visualisation',
    ],
  },
  {
    key: 'hci-vision',
    title: 'Human-Computer Interaction and Visual Recognition',
    summary:
      'Eye tracking, visual similarity, pose analysis, and interaction devices that turn perception signals into usable interfaces.',
    projects: ['BadmintonCoach', 'SoccerCoach', 'DanceBattle', 'WaveGazeZoo', 'WDMPA-Net', 'Fashion Similarity Detection Tool'],
    grants: [
      'Zhejiang Natural Science Foundation: conjunctival vascular layering and eye tracking',
      'National Key R&D Program: trademark and product similarity evidence collection',
    ],
    courses: ['Applied Human-Computer Interaction'],
    evidence: [
      'Authorised invention patent CN115984952B for conjunctival vascular image-based eye tracking',
      'Pose-estimation workflow for dance movement comparison',
      'Gaze-estimation, gaze-target, and HRI diagnostics experiments in WaveGazeZoo',
      'Compact wavelet-attention gaze-estimation model with deployment benchmarking in WDMPA-Net',
    ],
  },
  {
    key: 'green-ml',
    title: 'Machine Learning for Energy, Environment, and Quality Systems',
    summary:
      'Solar irradiance, building energy, carbon emissions, PM2.5, equipment diagnosis, and maintenance planning.',
    projects: ['IntelligentMaintenancePlanning', 'CMamba-AAE', 'DMGENet'],
    grants: [],
    courses: ['Computer Frontier Topics'],
    evidence: [
      'Solar irradiance and building-energy forecasting with LSTM, reinforcement learning, and generative models',
      'Chiller fault diagnosis under limited-sample conditions',
      'Reinforcement-learning-based dynamic multi-graph ensemble for multi-station air-quality prediction',
    ],
  },
  {
    key: 'cs-education',
    title: 'Large Language Model Applications',
    summary:
      'LLM-assisted grading, local-LLM automation pipelines, developer tooling, and course laboratories across systems, programming, HCI, and image processing.',
    projects: ['HCI-AutoGrader', 'AcadBridge', 'cswap-gui'],
    grants: [],
    courses: [
      'Computer Organization and Design',
      'C Programming',
      'Python Programming',
      'Applied Human-Computer Interaction',
    ],
    evidence: [
      'LLM-assisted rubric grading for HCI assignments with roster import, multimodal review, gradebook statistics, and feedback export',
      'Supervised 19 MSc students, including 13 graduated students and 6 students currently in training in 2026',
      'Class adviser for the 2024 full-time MSc cohort in Computer Science and Technology, 69 students',
      'Project-style supervision across OCT measurement, fashion similarity, pose analysis, and image segmentation',
    ],
  },
] as const;

export const bioTimeline = [
  {
    period: '2024 –',
    text: 'Class adviser for the 2024 full-time MSc cohort in Computer Science and Technology at China Jiliang University.',
  },
  {
    period: '2023 – 2024',
    text: 'Visiting scholar in the Department of Computer Science and Software Engineering, Auckland University of Technology.',
  },
  {
    period: '2021 – 2022',
    text: 'Research assistant at the National Institute of Metrology, working on ophthalmic optical measurement and OCT-related algorithms.',
  },
  {
    period: '2018 –',
    text: 'Lecturer in Computer Science at China Jiliang University.',
  },
  {
    period: '2016 – 2018',
    text: 'Co-founder and CEO of Tianjin Jieshi Interactive Technology, developing head-mounted eye-tracking interaction for AR.',
  },
  {
    period: '2009 – 2016',
    text: 'M.S. and Ph.D. at Tianjin University in Measuring Technology and Instrument, focused on conjunctival vasculature recognition and pulse-wave measurement.',
  },
  {
    period: '2004 – 2008',
    text: 'B.S. in Mechatronics Engineering at Changchun University of Science and Technology.',
  },
] as const;

export const courses = [
  {
    name: 'Applied Human-Computer Interaction',
    years: '2019-2025',
    features:
      'User experience, interaction devices, face analysis, gesture recognition, reading reports, experiments, and project assessment.',
  },
  {
    name: 'Digital Image Processing',
    years: '2020-2022',
    features:
      'Image acquisition, intensity transforms, enhancement, filtering, segmentation, and OpenCV-style algorithm practice.',
  },
  {
    name: 'Computer Organization and Design',
    years: '2018-2026',
    features:
      'Performance, instruction representation, MIPS, datapath/control, pipelining, cache, and cooperative-programme laboratories.',
  },
  {
    name: 'C Programming',
    years: '2022-2026',
    features:
      'Structured programming, data types, control flow, arrays, functions, pointers, and laboratory programming practice.',
  },
  {
    name: 'Python Programming',
    years: '2025-2026',
    features:
      'Python syntax, control structures, strings, lists, tuples, dictionaries, sets, and experiments for international and cross-disciplinary students.',
  },
  {
    name: 'Computer Frontier Topics',
    years: '2018-2025',
    features:
      'Emerging computer-science methods, reading and presentation tasks, and links to current research directions.',
  },
] as const;

export const supervisionHighlights = [
  'Supervised 19 MSc students, including 13 graduated students and 6 students currently in training in 2026.',
  'Mentored 22 undergraduate final-year projects across HCI, image processing, OCT metrology, visual similarity, and pose analysis.',
  'Serves as class adviser for the 2024 full-time MSc cohort in Computer Science and Technology, covering 69 students.',
] as const;
