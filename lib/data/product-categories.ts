import { CircleDashed, Droplets, Leaf, Sprout } from "lucide-react";

export const productCategories = [
  {
    id: "honey",
    name: "Honey",
    description: "A naturally sweet pantry staple for breakfast, tea, and recipes.",
    icon: Droplets,
    tone: "bg-amber-50 text-amber-700",
    accent: "bg-amber-100",
  },
  {
    id: "nuts",
    name: "Nuts",
    description: "Crunchy, satisfying favorites for snacking and everyday meals.",
    icon: CircleDashed,
    tone: "bg-orange-50 text-orange-700",
    accent: "bg-orange-100",
  },
  {
    id: "black-cumin",
    name: "Black cumin",
    description: "A familiar seed with a distinctive flavor for your kitchen.",
    icon: Sprout,
    tone: "bg-emerald-50 text-emerald-700",
    accent: "bg-emerald-100",
  },
  {
    id: "garlic-cumin",
    name: "Garlic cumin",
    description: "A savory everyday ingredient for adding depth to meals.",
    icon: Leaf,
    tone: "bg-lime-50 text-lime-800",
    accent: "bg-lime-100",
  },
];
