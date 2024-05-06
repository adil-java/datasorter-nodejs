import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath="/Users/khurramjavaid/Desktop/main"
let files =await fs.readdir(basepath);
for (const items of files) {
    // console.log(items)
    let ext =items.split(".")[items.split(".").length-1];
    if(ext!="js"&&ext!="json" && items.split(".").length>1){
        if(fsn.existsSync(path.join(basepath,ext)) && ext!="js" && ext!="json")  {
            fs.rename(path.join(basepath,items),path.join(basepath,ext,items))
        } else {
            fs.mkdir(ext);
            fs.rename(path.join(basepath,items),path.join(basepath,ext,items));

        }
    }
}