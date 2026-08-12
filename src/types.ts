export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  category: 'Chest' | 'Back' | 'Legs' | 'Shoulders' | 'Arms' | 'Core';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  shortDesc: string;
  detailedDesc: string;
  image: string;
  keySteps: string[];
  commonMistakes: string[];
  proTip: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceETB: number;
  period: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  notIncluded?: string[];
}

export interface Trainer {
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  experienceYears: number;
  membersTrained: number;
  commitmentRate: number;
  image: string;
  specialties: string[];
  certifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  periodWithGym: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Equipment' | 'Strength' | 'Coaching';
  image: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Facilities' | 'Training' | 'General';
}

export interface ContactInfo {
  gymName: string;
  tagline: string;
  city: string;
  country: string;
  neighborhood: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  telegramHandle: string;
  telegramLink: string;
  email: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface JoinInquiry {
  fullName: string;
  phone: string;
  selectedPlan: string;
  fitnessGoal: string;
  preferredTime: string;
  message?: string;
}
