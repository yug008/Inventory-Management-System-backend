package com.example.Ims_backend.model;

import jakarta.persistence.*;

@Entity
public class Products {

//name, sku, category, name , uom, id

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prodId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String sku;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;

    private String uom;

    public Products(Long prodId, String name, String sku, Category category, String uom) {
        this.prodId = prodId;
        this.name = name;
        this.sku = sku;
        this.category = category;
        this.uom = uom;
    }

    public Products(){}

    public Long getProdId() {
        return prodId;
    }

    public void setProdId(Long prodId) {
        this.prodId = prodId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getUom() {
        return uom;
    }

    public void setUom(String uom) {
        this.uom = uom;
    }
}
