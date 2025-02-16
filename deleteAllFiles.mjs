import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current script's filename
const __filename = fileURLToPath(import.meta.url);
const scriptName = path.basename(__filename);
// Beware if You change the script name of the creation of files
const creatName = "createAllFiles.mjs"

// Function to delete files and folders
const deleteFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    // Skip deleting the script itself
    if (file === scriptName) return;
    if (file === creatName) return;

    // Check if it's a directory
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true }); // Delete folder recursively
    } else {
      fs.unlinkSync(filePath); // Delete file
    }
  });

  console.log("Cleanup complete! Only", scriptName,"& ", creatName, "remains.");
};

// Run the cleanup
deleteFiles(".");
