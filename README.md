# Red Devils Fan Portal

Prosty mini-portal o Manchesterze United z wyszukiwaniem piłkarzy, ciekawostką dnia i zapamiętywaniem imienia w `localStorage`.

## Uruchomienie lokalne

W PowerShellu:

```powershell
npm.cmd install
npm.cmd run dev
```

Otwórz adres pokazany w terminalu (zwykle `http://localhost:5173`).

## Publikacja na GitHub Pages

1. W repozytorium przejdź do **Settings → Pages** i ustaw **Source** na **GitHub Actions**.
2. Wypchnij zmiany na gałąź `main` lub uruchom workflow **Deploy to GitHub Pages** ręcznie w zakładce **Actions**.
3. Po zakończeniu workflow strona będzie dostępna pod adresem:
   [https://miszol6927.github.io/projekt/](https://miszol6927.github.io/projekt/)

## Publikacja na Vercel

1. Umieść projekt w repozytorium GitHub.
2. Zaloguj się na [vercel.com](https://vercel.com) i wybierz **Add New → Project**.
3. Zaimportuj repozytorium. Vercel wykryje Vite; ustawienia domyślne to:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Kliknij **Deploy**. Po zakończeniu Vercel pokaże publiczny adres strony.

Projekt można też sprawdzić przed publikacją poleceniami `npm.cmd run build` i `npm.cmd run preview`.
