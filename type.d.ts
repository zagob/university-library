interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string
  coverUrl: string;
  videoUrl: string;
  summary: string;
  isLoadnedBook?: boolean;
}

interface AuthCredentials {
  fullName: string
  email: string
  password: string
  universityId: number
  universityCard: string
}