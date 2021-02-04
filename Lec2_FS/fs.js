
//importing file systems
const fs = require("fs");
const path = require("path");

const downloadsPath = "./Downloads";

// reading all the files contained inside download folder

//readdirsync returns an array of all the folders inside the directory

let contentOfDownloads = fs.readdirSync(downloadsPath);



//Now looping through all the files inside downloads

for(let i=0; i<contentOfDownloads;i++){
  
  // we sort the folders here by passing one file each time

   sortFolder(contentOfDownloads[i]);
}


// we pass the file inside the dort Folder method method so that it sortd our file

function sortFolder(file) {
  // .jpg, , .pdf, .vid
  // extension gets the extension of the file. path.extname is an inbuilt method. we o substring because it gives us the extname of the file in .file format, and we want just the name of the file, no dot before.
  let extension = path.extname(file).substring(1);

  let isFolderExist = checkFolder(extension);

  if(isFolderExist){
    moveFile(file, extension);

  }

  else {
    createFolder(extension);
    moveFile(file,extension);
  }
}


function checkFolder(ext) {

  if(ext == "doc"|| ext == "pdf" || ext == "txt"){
    // check Documents folder
    //"./Downloads/Documents"
    let folderPath = downloadsPath+"/Documents";
    return fs.existsSync(folderPath);
  }

  else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
    // check Images
    let folderPath = downloadsPath+"/Images"
    return fs.existsSync(folderPath);
}
else if(ext == "mkv" || ext == "mp4"){
    // check Videos
    let folderPath = downloadsPath+"/Videos"
    return fs.existsSync(folderPath);
}
}



