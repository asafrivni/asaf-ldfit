# LDFIT – תכנון שבועי (אסף)

סטטי, נטול שרת, עם **שמירה אוטומטית** בדפדפן + **אופציה לסינכרון ענן** דרך GitHub Gist. כולל **PWA** (אופליין + Add to Home Screen).

## הפעלה מקומית
פתחו `index.html` בדפדפן. זהו.

## פריסה מהירה – GitHub Pages
1. צרו מאגר חדש בגיטהאב, למשל `ldfit-asaf`.
2. העלו את כל קבצי התיקייה הזו (כולל `.github/workflows/pages.yml`).
3. ודאו שיש ענף `main`. כל push לענף `main` יגרום לפריסה אוטומטית.
4. תחת **Settings → Pages** תראו את הכתובת הציבורית.

## סינכרון ענן (אופציונלי) עם GitHub Gist
- צרו Gist חדש ריק (Public או Secret). העתיקו את ה־ID מהכתובת.
- צרו **Personal Access Token** עם scope: `gist`.
- באתר → **הגדרות & סינכרון**:
  - בחרו מצב `GitHub Gist`.
  - הזינו Token, Gist ID, ו־שם קובץ (למשל `ldfit-asaf.json`).
  - כפתור **Pull** טוען, **Push** שומר. את הטוקן תזינו בכל דפדפן שבו תרצו לעבוד.

## PWA
- `manifest.webmanifest` + `service-worker.js`. עובד אופליין; נתונים נשמרים ב־LocalStorage.

## פרטיות
- הטוקן של GitHub נשמר **מקומית בלבד** בדפדפן (LocalStorage).

