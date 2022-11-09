import multer from 'multer';
import __dirName from '../utils.js';

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, __dirName+  '../public/images') //la carpeta donde se va a guardar todo
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const uploader = multer({ storage }) 


export default uploader 