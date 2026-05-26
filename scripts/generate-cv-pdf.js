const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  // Read image and convert to base64
  const rootDir = path.join(__dirname, '..');
  const photoPath = path.join(rootDir, 'assets', 'foto-profile.jpg');
  const photoBase64 = fs.readFileSync(photoPath).toString('base64');
  const photoDataUri = `data:image/jpeg;base64,${photoBase64}`;

  // Read HTML template
  let html = fs.readFileSync(path.join(rootDir, 'cv.html'), 'utf8');

  // Replace image src with base64 data URI
  html = html.replace('src="assets/foto-profile.jpg"', `src="${photoDataUri}"`);

  // Launch browser and generate PDF
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.join(rootDir, 'assets', 'cv-mohammad-yasrul.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.4in',
      bottom: '0.4in',
      left: '0.4in',
      right: '0.4in'
    },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('✅ PDF generated: assets/cv-mohammad-yasrul.pdf');
})();