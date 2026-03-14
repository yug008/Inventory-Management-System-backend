package com.example.Ims_backend.service;

import com.example.Ims_backend.model.Products;
import com.example.Ims_backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    public Products addProducts(Products product){
       return repo.save(product);
    }

    public Products getProducts(Long prodID){
        return repo.findById(prodID).orElseThrow(()->new RuntimeException("Product Not Found"));
    }

    public Products updateProducts(Products p){
        return repo.save(p);
    }

    public void deleteProducts(Long prodID){
        repo.deleteById(prodID);
    }

}
