import { Router } from 'express';
import Contenedor from '../Contenedor/contenedor.js';
import uploader from '../services/upload.js';

const router = Router();

    router.post('/',uploader.single('image'),async (req,res)=>{
        console.log(req.file);
        const image = req.protocol+"://"+req.hostname+':8080/images/'+req.file.filename;  
        let product = req.body; 
        product.image = image;
        const result = await productService.add(product);
        res.send({status:"success",message:"El producto ha sido agregado"});
    })

    router.get('/',async(req,res)=>{
        let result = await productsService.get();
        res.send(result);
    })


export default router;