const fs = require('fs');
const files = ['src/pages/ContactPage.jsx', 'src/components/WhyCre8sphere.jsx', 'src/components/WhoWeAre.jsx', 'src/components/PlatformsSection.jsx', 'src/components/PageHeroSection.jsx', 'src/components/InnovationToolsSection.jsx', 'src/components/HeroSection.jsx', 'src/components/Footer.jsx', 'src/components/EcosystemSection.jsx', 'src/components/CtaSection.jsx', 'src/components/CoverageSection.jsx'];
const map = {
  'Smartphone01Icon': 'SmartPhone01Icon',
  'Smartphone02Icon': 'SmartPhone01Icon',
  'SmartphoneIcon': 'SmartPhone01Icon',
  'ArrowUpRight01Icon': 'ArrowUpRight01Icon',
  'ArrowUpRightIcon': 'ArrowUpRight01Icon',
  'ArrowRight01Icon': 'ArrowRight01Icon',
  'ArrowRightIcon': 'ArrowRight01Icon',
  'Linkedin02Icon': 'Linkedin01Icon',
  'LinkedinIcon': 'Linkedin01Icon',
  'Layers01Icon': 'Layers01Icon',
  'LayersIcon': 'Layers01Icon',
  'Share01Icon': 'AiNetworkIcon',
  'ShareIcon': 'AiNetworkIcon',
  'Idea01Icon': 'Idea01Icon',
  'IdeaIcon': 'Idea01Icon',
  'CarIcon': 'Car01Icon',
  'RocketIcon': 'Rocket01Icon',
  'PaintBrushIcon': 'PaintBrush01Icon'
};

files.forEach(f => {
  let code = fs.readFileSync(f, 'utf8');
  Object.keys(map).forEach(k => {
    code = code.split(k).join(map[k]);
  });
  fs.writeFileSync(f, code);
});
