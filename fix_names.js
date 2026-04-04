const fs = require('fs');
const files = ['src/pages/ContactPage.jsx', 'src/components/WhyCre8sphere.jsx', 'src/components/WhoWeAre.jsx', 'src/components/PlatformsSection.jsx', 'src/components/PageHeroSection.jsx', 'src/components/InnovationToolsSection.jsx', 'src/components/HeroSection.jsx', 'src/components/Footer.jsx', 'src/components/EcosystemSection.jsx', 'src/components/CtaSection.jsx', 'src/components/CoverageSection.jsx'];
files.forEach(f => {
  let code = fs.readFileSync(f, 'utf8');
  code = code.replace(/01Icon/g, 'Icon').replace(/02Icon/g, 'Icon');
  fs.writeFileSync(f, code);
});
