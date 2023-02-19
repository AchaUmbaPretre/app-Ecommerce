import Order from "../models/Order.js";

export const addOrder = async (req, res) =>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const orderUpdate = async (req, res)=>{

    try{
        const orderUpdateNew = Order.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, {new: true});
        res.status(200).json(orderUpdateNew)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const orderDelete = async (req, res) =>{
    
    try{
       Order.findOneAndDelete(req.params.id)
       res.status(200).json('Order est a ete supprimé')
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getRecoverOrder = async (req, res)=>{

    try{
        const recoverOrderId = await Order.findById(req.params.id);
        const {password, ...other} = recoverOrderId._doc;
        res.status(200).json(other)

    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getAllRecoverOrde = (req)=>{

}