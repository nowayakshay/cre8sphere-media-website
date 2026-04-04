const fs = require('fs');

const map = {
  'SmartPhone01Icon': 'Smartphone',
  'NewspaperIcon': 'Newspaper',
  'BotIcon': 'Bot',
  'RobotIcon': 'Bot',
  'ArrowRight01Icon': 'ArrowRight',
  'ArrowUpRight01Icon': 'ArrowUpRight',
  'SparklesIcon': 'Sparkles',
  'CompassIcon': 'Compass',
  'Layers01Icon': 'Layers3',
  'Idea01Icon': 'Lightbulb',
  'AiNetworkIcon': 'Network',
  'BrainIcon': 'BrainCircuit',
  'Car01Icon': 'Car',
  'Rocket01Icon': 'Rocket',
  'PaintBrush01Icon': 'PenTool',
  'FavouriteIcon': 'Heart',
  'InstagramIcon': 'Instagram',
  'Linkedin01Icon': 'Linkedin',
  'hugeicons-react': 'lucide-react',
  '@hugeicons/react': 'lucide-react'
};

const files = [
  'src/pages/ContactPage.jsx',
  'src/components/WhyCre8sphere.jsx',
  'src/components/WhoWeAre.jsx',
  'src/components/PlatformsSection.jsx',
  'src/components/PageHeroSection.jsx',
  'src/components/InnovationToolsSection.jsx',
  'src/components/HeroSection.jsx',
  'src/components/Footer.jsx',
  'src/components/EcosystemSection.jsx',
  'src/components/CtaSection.jsx',
  'src/components/CoverageSection.jsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let code = fs.readFileSync(f, 'utf8');
    Object.keys(map).forEach(k => {
      code = code.split(k).join(map[k]);
    });
    fs.writeFileSync(f, code);
  }
});
