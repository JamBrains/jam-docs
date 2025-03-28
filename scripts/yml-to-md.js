const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

/**
 * Creates a markdown table from YAML data
 * @param {Object} data - The parsed YAML data
 * @param {string} yamlRelativePath - The relative path to the YAML file
 * @returns {string} The generated markdown table
 */
function createMarkdownTable(data, yamlRelativePath) {
  // Check if the YAML has a members array
  if (!data.members || !Array.isArray(data.members) || data.members.length === 0) {
    throw new Error('YAML file must contain a "members" array with at least one item');
  }

  // Extract headers from the first item
  const headers = Object.keys(data.members[0]);

  // Generate Markdown table
  let markdownTable = `<!-- Auto-generated from YML ${yamlRelativePath} -->\n`;
  markdownTable += `| ${headers.join(' | ')} |\n`;
  markdownTable += `| ${headers.map(() => '---').join(' | ')} |\n`;

  // Add table rows
  data.members.forEach(member => {
    const rowValues = headers.map(header => {
      // Format URLs as Markdown links
      if (header === 'extrinsic' && member[header]) {
        return `[Link](${member[header]})`;
      }

      // Escape pipe characters in content to prevent breaking the Markdown table
      const value = member[header]?.toString() || '';
      return value.replace(/\|/g, '\\|');
    });
    markdownTable += `| ${rowValues.join(' | ')} |\n`;
  });

  return markdownTable;
}

/**
 * Creates a collapsible section with raw YAML content
 * @param {string} yamlContents - The raw YAML content
 * @returns {string} The HTML/markdown for a collapsible section
 */
function createYamlToggle(yamlContents) {
  return `
<details>
<summary>Raw YAML</summary>

\`\`\`yaml
${yamlContents}
\`\`\`

</details>
`;
}

// Main function
function processMarkdown(markdownPath) {
  try {
    // Read the markdown file
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');

    // Regular expression to find the start marker and extract the YAML path
    const startMarkerRegex = /<!-- Auto-generated from YML (.*?) -->/;
    const match = markdownContent.match(startMarkerRegex);

    if (!match || !match[1]) {
      console.error('Error: Markdown file does not contain a valid placeholder comment');
      console.error('Expected format: <!-- Auto-generated from YML path/to/file.yml -->');
      process.exit(1);
    }

    // Get the YAML file path from the placeholder
    const yamlRelativePath = match[1];
    const yamlPath = path.resolve(path.dirname(markdownPath), yamlRelativePath);

    if (!fs.existsSync(yamlPath)) {
      console.error(`Error: YAML file not found: ${yamlPath}`);
      process.exit(1);
    }

    // Read and parse the YAML file
    const yamlContents = fs.readFileSync(yamlPath, 'utf8');
    const data = yaml.load(yamlContents);

    // Generate the markdown table
    const markdownTable = createMarkdownTable(data, yamlRelativePath);

    // Generate the YAML toggle
    const yamlToggle = createYamlToggle(yamlContents);

    // Combine both elements
    const generatedContent = `${markdownTable}${yamlToggle}<!-- End-auto-generated -->`;

    // Regular expression to find content between start and end markers (or to the next section/end of file)
    const contentRegex = new RegExp(
      `<!-- Auto-generated from YML ${yamlRelativePath} -->[\\s\\S]*?(?:<!-- End-auto-generated -->|(?=<!-- Auto-generated)|$)`,
      'g'
    );

    // Replace the section between markers with the new content
    const updatedContent = markdownContent.replace(
      contentRegex,
      generatedContent
    );

    // Write the updated content back to the markdown file
    fs.writeFileSync(markdownPath, updatedContent);
    console.log(`Updated table in ${markdownPath} with data from ${yamlPath}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Read the markdown file path from command line arguments
const markdownPath = process.argv[2];

if (!markdownPath) {
  console.error('Error: Please provide a markdown file path');
  console.error('Usage: node yaml-to-markdown.js path/to/file.md');
  process.exit(1);
}

// Run the process
processMarkdown(markdownPath);
