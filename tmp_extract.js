const fs = require('fs');

const shapes = ['triangle', 'square', 'pentagon', 'hexagon', 'circle'];

const data = shapes.map(shape => {
  try {
    const content = fs.readFileSync(`./public/${shape}.svg`, 'utf-8');
    // Extract path d="..." or circle cx cy r
    let path = '';
    const pathMatch = content.match(/<path[^>]*d="([^"]+)"/);
    if (pathMatch) {
      path = pathMatch[1];
    } else {
        const circleMatch = content.match(/<circle[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"[^>]*r="([^"]+)"/);
        if (circleMatch) {
            // we will let MorphSVGPlugin handle the circle if we just pass the selector, or we can use the GSAP MorphSVGPlugin.convertToPath() later. 
            // Or better yet, we just inject the SVG string and let GSAP morph it!
            path = "circle";
        }
    }
    
    return {
      id: shape,
      title: shape.charAt(0).toUpperCase() + shape.slice(1),
      description: `Placeholder description for ${shape}. ` + "A short workshop to understand your goals, audience, challenges and existing assets.",
      svgPath: path,
      rawSvg: content
    };
  } catch(e) { return null; }
}).filter(Boolean);

fs.writeFileSync('./app/components/data-how-we-work.ts', `export const workSteps = ${JSON.stringify(data, null, 2)};\n`);
