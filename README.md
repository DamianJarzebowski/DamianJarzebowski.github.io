# ClarOps - Damian Jarzębowski

Profesjonalna strona firmowa ClarOps zbudowana z wykorzystaniem Hugo i motywu PaperMod.

## 🌐 Strona

Strona dostępna pod adresem: [https://clarops.com](https://clarops.com)

## 🚀 Technologie

- **Hugo** v0.152.2 - szybki generator stron statycznych
- **PaperMod** - minimalistyczny i profesjonalny motyw
- **GitHub Pages** - hosting
- **GitHub Actions** - automatyczny deployment

## 📁 Struktura

```
.
├── content/          # Treść stron (Markdown)
│   ├── about.md      # Strona "O mnie"
│   ├── services.md   # Strona "Usługi"
│   └── contact.md    # Strona "Kontakt"
├── static/           # Pliki statyczne (obrazy, CNAME)
├── themes/PaperMod/  # Motyw (submoduł git)
├── hugo.toml         # Konfiguracja Hugo
└── .github/workflows/hugo.yml  # CI/CD
```

## 🛠️ Praca lokalna

### Wymagania
- Hugo Extended v0.152.2 lub nowszy

### Instalacja Hugo (Linux)
```bash
sudo snap install hugo
```

### Uruchomienie lokalnego serwera
```bash
hugo server --buildDrafts
```

Strona dostępna pod adresem: http://localhost:1313

### Build produkcyjny
```bash
hugo --gc --minify
```

Wygenerowane pliki znajdą się w katalogu `public/`.

## ✏️ Edycja treści

### Edycja istniejących stron
Wszystkie strony znajdują się w katalogu `content/`:
- `content/about.md` - strona "O mnie"
- `content/services.md` - strona "Usługi"
- `content/contact.md` - strona "Kontakt"

### Dodawanie nowej strony
```bash
hugo new nazwa-strony.md
```

### Edycja konfiguracji
Główna konfiguracja znajduje się w pliku `hugo.toml`:
- URL strony
- Menu nawigacyjne
- Social media links
- Parametry motywu

## 🚢 Deployment

Strona automatycznie deployuje się na GitHub Pages po każdym push do brancha `main`.

GitHub Actions workflow:
1. Checkout kodu z submodułami (motyw)
2. Instalacja Hugo
3. Build strony
4. Deploy na GitHub Pages

## 📝 Uwagi

- Plik `CNAME` w katalogu `static/` zapewnia działanie domeny `clarops.com`
- Motyw PaperMod jest dodany jako git submodule
- Wszystkie zmiany w branch `main` automatycznie publikują się na stronie

## 🔧 Konfiguracja GitHub Pages

W ustawieniach repozytorium GitHub:
1. Settings → Pages
2. Source: GitHub Actions
3. Domena niestandardowa: clarops.com (już skonfigurowana)

## 📞 Kontakt

**Damian Jarzębowski**  
Email: kontakt@clarops.com  
GitHub: [DamianJarzebowski](https://github.com/DamianJarzebowski)

---

Made with ❤️ using Hugo
