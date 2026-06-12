const fs = require('fs');
const path = require('path');

const spaDir = 'dist/fragment/browser'
const wfAssetsDir = path.join(spaDir, 'wf-assets');

// Move css/js files to /wf-assets/ dir folder
fs.readdirSync(spaDir).forEach(file => {
    if (file.endsWith('.css') || file.endsWith('.js')) {
        const oldPath = path.join(spaDir, file);
        const newPath = path.join(wfAssetsDir, file);
        fs.renameSync(oldPath, newPath);
    }
});