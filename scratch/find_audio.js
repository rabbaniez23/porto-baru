// scratch/find_audio.js
// scratch/find_audio.js

async function main() {
  try {
    const response = await fetch('https://paralleluniverse.com.ua/en/');
    const html = await response.text();
    
    console.log("Searching for audio sources...");
    
    // Find all audio tags
    const audioTags = html.match(/<audio[^>]*>([\s\S]*?)<\/audio>|<audio[^>]*\/>/gi);
    console.log("Audio Tags found:", audioTags);
    
    // Find all mp3/wav/ogg urls
    const urls = html.match(/https?:\/\/[^\s'\"<>]+?\.(?:mp3|wav|ogg|m4a)/gi);
    console.log("Audio URLs found:", urls);

    // Find source elements
    const sources = html.match(/<source[^>]*src=["']([^"']+)["']/gi);
    console.log("Source tags found:", sources);

  } catch (err) {
    console.error("Error:", err);
  }
}

main();
