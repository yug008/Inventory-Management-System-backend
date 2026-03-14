package com.example.Ims_backend.controller;

import com.example.Ims_backend.model.Products;
import com.example.Ims_backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ims")
public class ProductController {

    @Autowired
    ProductService service;

    @PostMapping("/products")
    public ResponseEntity<Products> addProducts(@RequestBody Products product){
        Products prod = service.addProducts(product);
        return new ResponseEntity<>(prod, HttpStatus.CREATED);
    }

    @GetMapping("/products")
    public Products getProducts(Long prodID){
        return service.getProducts(prodID);
    }

    @PutMapping("/products")
    public ResponseEntity<String> updateProducts(@RequestBody Products p){
        service.updateProducts(p);
        String body = "Product updated successfully";
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @DeleteMapping("/products")
    public ResponseEntity<String> deleteProducts(Long prodID){
        service.deleteProducts(prodID);
        String s = "Product deleted successfully";
        return new ResponseEntity<>(s,HttpStatus.OK);
    }
}
