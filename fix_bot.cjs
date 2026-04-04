const fs = require('fs');
const files = ['src/components/HeroSection.jsx', 'src/components/PageHeroSection.jsx', 'src/components/InnovationToolsSection.jsx'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let code = fs.readFileSync(f, 'utf8');
    code = code.replace(/BotIcon/g, 'RobotIcon');
    fs.writeFileSync(f, code);
  }
});
