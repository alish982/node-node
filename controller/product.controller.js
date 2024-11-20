const express = require('express')
const app = express()
const Product = require('../models/product.model')

const createProudct = async (req, res) => {
    try{

        const product = await Product.create(req.body)
        res.status(200).json(product)

    }catch (error) {
        
        res.status(500).json({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try{

        const product = await Product.find({})
        res.status(200).json(product)

    }catch(error) {

        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        
        if(!product) {
           return res.status(404).json({ message : 'product not found'})
        }

        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    
    } catch(error){
        res.status(500).json({ message: error.message})
    }
}

const getProductById = async (req, res) => {
    try{

        const { id } = req.params
        const proudct = await Product.findById(id)

        if(!proudct){
            res.status(404).json({message: 'prouct didnt found'})
        }

        res.status(200).json(proudct)

    } catch( error ){

        res.status(500).json({ message: error.message})
    }
} 

const deleteProudct = async (req, res) => {
    try{ 
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: 'proudct not found'})
        } 

        res.status(200).json({ message: 'proudct deleted successfully'})

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = { createProudct, updateProduct, getProductById, deleteProudct, getProduct }