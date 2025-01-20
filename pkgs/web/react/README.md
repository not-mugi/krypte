# Krypte React Web Package 📁✨

This document will guide you through the structure of the project **Krypte React Web Package**!🚀

## 📂 Folder Structure
```
/krypte/pkgs/web/react/
├── src/                        # Source files for the React components
│   ├── atoms/                  # atom lvl react components are implemented here
│   ├── particles/              # particle lvl javascript mixins and classes
│      ├── quarks/              # classes with predefined css style groups to construct atom components
│      └── flavors/             # mixins to set css styling properties with counterpart tailwind class getter functions
│   └── main.ts                 # main library exports
├── tests/                      # Unit and integration tests
└── README.md                   # Project documentation
```

## 🌌 quarks to be defined 
- Up(visible properties) - color, opacity, background
- Down(structure) - container, spacing, sizing
- Charm(decorative) - border, typo, transitions & animations
- Strange(interactive) - cursor, hover/focus/active/..., user-select, form
- Top(layout and order) align, layout
- Bottom(subtle properties) smoothing, media queries

Happy Coding! 💻✨
Mugi-Team