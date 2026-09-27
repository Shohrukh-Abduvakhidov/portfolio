export interface ProjectFeature {
  id?: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectFeatureGroup {
  id?: string;
  groupName: string;
  features: ProjectFeature[];
}

export interface Project {
  slug: string;
  translationKey?: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  type?: string;
  status: string;
  timeline?: string;
  team?: string;
  users?: string;
  businessModel?: string;
  featured: boolean;
  stack: string[];
  stackGroups?: { groupName: string; technologies: string[] }[];
  features?: ProjectFeature[];
  featureGroups?: ProjectFeatureGroup[];
  technicalChallenges?: { id?: string; title: string; description?: string; challengeText?: string; solutionText?: string }[];
  cover: string;
  images: { src: string; label: string; description?: string }[];
  liveUrl?: string;
  githubUrl?: string; // "private" for lock icon
}
