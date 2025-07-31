# 📱 Tala — AI-Powered Travel Assistant

**Tala** is a cross-platform travel app built with Expo, React Native, and Supabase.  
Discover curated destinations, plan your adventures, and keep track of your travel history — all in a clean, Gen Z-inspired interface.

---

## ✨ Features

- Explore trending, personalized, and “hidden gem” destinations
- Smart AI travel search (Airbnb-inspired)
- Multi-tab navigation: Explore, Plan, Profile
- Light/dark mode with custom theming
- Modern UI with Inter font and custom icons
- Secure login system (email auth, Supabase ready)
- Responsive design: web, iOS, and Android

---

## 🛠️ Tech Stack

- **React Native + Expo** (cross-platform app)
- **Expo Router** (file-based navigation & tabs)
- **TypeScript** (typed everywhere)
- **Supabase** (auth, data, Postgres backend)
- **Custom theming** (`/theme`)
- **Screen-based styles** (`/styles`)
- **Inter font** via `expo-font`

---

## 🚀 Getting Started

1. **Clone the repo**
    ```sh
    git clone https://github.com/zaycation/tala.git
    cd tala
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Add your environment variables**

    Copy `.env.example` to `.env` and fill in your Supabase keys.

4. **Start the Expo server**
    ```sh
    npm start
    # or
    npx expo start
    ```
    - **Web:** open in browser
    - **iOS/Android:** scan QR code in Expo Go or open in simulator

---

## 🗂️ Project Structure

```
tala/
├── app/
│   ├── _layout.tsx          # Tab navigation & Auth gate
│   ├── index.tsx            # Explore tab
│   ├── plan.tsx             # Plan tab
│   ├── profile.tsx          # Profile tab
│   └── screens/
│       └── LoginScreen.tsx  # Login (not a tab)
├── styles/                  # All styles split per screen
│   ├── explore.styles.ts
│   ├── plan.styles.ts
│   ├── profile.styles.ts
│   └── login.styles.ts
├── theme/
│   └── colors.ts            # Central colors, etc
├── context/
│   └── AuthContext.tsx      # Auth logic (login, logout, state)
├── assets/
│   └── fonts/
│       └── InterVariable.ttf
├── lib/
│   └── supabase.ts          # Supabase client
├── .env                     # (You add this with your Supabase keys)
└── README.md
```

## 📝 Development Notes

- **Tabs auto-sync with files in `/app`**  
  (`index.tsx`, `plan.tsx`, `profile.tsx` = Explore, Plan, Profile tabs)
- **Auth gate is in _layout.tsx**  
  (Shows LoginScreen if not logged in, otherwise MainTabs)
- **All styling should be in `/styles` and `/theme`**  
  (No inline styles in components!)
- **Uses Unsplash URLs for mock images**

---

## ⚡ Next Steps

- [ ] Connect Supabase auth (email, social, etc)
- [ ] CRUD for trips & user plans
- [ ] Refine Explore screen with live data & recommendations
- [ ] Deploy web version

---

## 🧑🏾‍💻 Contributing

PRs welcome! Please open an issue or discussion first if you’re proposing a major change.

---

## 📜 License

MIT

---

## 👤 Author

[@zaycation](https://github.com/zaycation)
