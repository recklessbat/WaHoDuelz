const avatarData = [
  {
    id: 'owl',
    name: 'Mystic Owl',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="52" rx="22" ry="20" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Head */}
        <circle cx="40" cy="28" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Ear tufts */}
        <path d="M28 16 L24 6 L32 14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M52 16 L56 6 L48 14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Eyes */}
        <circle cx="34" cy="26" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="46" cy="26" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="34" cy="26" r="2" fill="currentColor" />
        <circle cx="46" cy="26" r="2" fill="currentColor" />
        {/* Beak */}
        <path d="M38 32 L40 36 L42 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Chest pattern */}
        <path d="M34 45 Q40 50 46 45" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M36 50 Q40 54 44 50" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Feet */}
        <path d="M32 70 L28 76 M32 70 L32 76 M32 70 L36 76" stroke="currentColor" strokeWidth="1.5" />
        <path d="M48 70 L44 76 M48 70 L48 76 M48 70 L52 76" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'fox',
    name: 'Enchanted Fox',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="52" rx="20" ry="16" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Head */}
        <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Ears */}
        <path d="M28 22 L22 8 L34 18" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M52 22 L58 8 L46 18" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Inner ears */}
        <path d="M29 20 L26 12 L33 18" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M51 20 L54 12 L47 18" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Eyes */}
        <ellipse cx="34" cy="28" rx="3" ry="2.5" fill="currentColor" />
        <ellipse cx="46" cy="28" rx="3" ry="2.5" fill="currentColor" />
        {/* Nose */}
        <circle cx="40" cy="34" r="2" fill="currentColor" />
        {/* Snout */}
        <path d="M36 34 Q40 38 44 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Whiskers */}
        <line x1="28" y1="33" x2="18" y2="31" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="35" x2="18" y2="37" stroke="currentColor" strokeWidth="1" />
        <line x1="52" y1="33" x2="62" y2="31" stroke="currentColor" strokeWidth="1" />
        <line x1="52" y1="35" x2="62" y2="37" stroke="currentColor" strokeWidth="1" />
        {/* Tail */}
        <path d="M58 52 Q68 40 64 30 Q60 38 56 44" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Legs */}
        <line x1="30" y1="64" x2="28" y2="74" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="64" x2="52" y2="74" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'deer',
    name: 'Fae Deer',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="52" rx="18" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Neck */}
        <path d="M34 40 L36 30" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M46 40 L44 30" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Head */}
        <ellipse cx="40" cy="24" rx="10" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Antlers */}
        <path d="M32 18 L28 8 L24 12 M28 8 L32 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M48 18 L52 8 L56 12 M52 8 L48 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Eyes */}
        <circle cx="36" cy="23" r="2" fill="currentColor" />
        <circle cx="44" cy="23" r="2" fill="currentColor" />
        {/* Nose */}
        <ellipse cx="40" cy="28" rx="2" ry="1.5" fill="currentColor" />
        {/* Ears */}
        <path d="M30 20 L26 16 L30 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 20 L54 16 L50 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Spots */}
        <circle cx="36" cy="48" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="44" cy="50" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="40" cy="54" r="1.5" fill="currentColor" opacity="0.3" />
        {/* Legs */}
        <line x1="30" y1="62" x2="28" y2="76" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="62" x2="52" y2="76" stroke="currentColor" strokeWidth="2" />
        <line x1="36" y1="64" x2="34" y2="76" stroke="currentColor" strokeWidth="1.5" />
        <line x1="44" y1="64" x2="46" y2="76" stroke="currentColor" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M56 46 Q62 42 60 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'rabbit',
    name: 'Arcane Rabbit',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="54" rx="16" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Head */}
        <circle cx="40" cy="34" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Ears */}
        <ellipse cx="32" cy="14" rx="4" ry="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="48" cy="14" rx="4" ry="12" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Inner ears */}
        <ellipse cx="32" cy="14" rx="2" ry="8" stroke="currentColor" strokeWidth="1" fill="none" />
        <ellipse cx="48" cy="14" rx="2" ry="8" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Eyes */}
        <circle cx="35" cy="32" r="3" fill="currentColor" />
        <circle cx="45" cy="32" r="3" fill="currentColor" />
        <circle cx="36" cy="31" r="1" fill="white" />
        <circle cx="46" cy="31" r="1" fill="white" />
        {/* Nose */}
        <ellipse cx="40" cy="37" rx="2" ry="1.5" fill="currentColor" />
        {/* Mouth */}
        <path d="M38 39 Q40 42 42 39" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Whiskers */}
        <line x1="30" y1="36" x2="20" y2="34" stroke="currentColor" strokeWidth="1" />
        <line x1="30" y1="38" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="36" x2="60" y2="34" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="38" x2="60" y2="40" stroke="currentColor" strokeWidth="1" />
        {/* Feet */}
        <ellipse cx="32" cy="68" rx="6" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="48" cy="68" rx="6" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Tail */}
        <circle cx="54" cy="58" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'bear',
    name: 'Spirit Bear',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="52" rx="22" ry="20" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Head */}
        <circle cx="40" cy="28" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Ears */}
        <circle cx="28" cy="18" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="52" cy="18" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Inner ears */}
        <circle cx="28" cy="18" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="52" cy="18" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Eyes */}
        <circle cx="34" cy="26" r="2.5" fill="currentColor" />
        <circle cx="46" cy="26" r="2.5" fill="currentColor" />
        {/* Nose */}
        <ellipse cx="40" cy="32" rx="3" ry="2" fill="currentColor" />
        {/* Mouth */}
        <path d="M37 34 Q40 38 43 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Belly */}
        <ellipse cx="40" cy="54" rx="12" ry="10" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Paws */}
        <ellipse cx="24" cy="68" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="56" cy="68" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'hedgehog',
    name: 'Woodland Hedgehog',
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="50" rx="24" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Spines */}
        <path d="M20 40 L16 32 L24 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M26 36 L24 26 L30 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M34 34 L34 22 L38 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M42 34 L44 22 L46 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 36 L54 26 L52 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M56 40 L62 32 L58 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M60 46 L66 40 L62 46" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 46 L12 40 L18 44" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Face */}
        <ellipse cx="40" cy="54" rx="12" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Eyes */}
        <circle cx="36" cy="52" r="2" fill="currentColor" />
        <circle cx="44" cy="52" r="2" fill="currentColor" />
        {/* Nose */}
        <circle cx="40" cy="56" r="2" fill="currentColor" />
        {/* Mouth */}
        <path d="M38 58 Q40 60 42 58" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Feet */}
        <ellipse cx="30" cy="66" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="50" cy="66" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default avatarData;
