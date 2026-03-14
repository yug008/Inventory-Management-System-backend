package com.example.Ims_backend.model;

import jakarta.persistence.*;

@Table(name = "usres")
@Entity
public class Users {

    @Column(name = "username", nullable = false)
    private String username;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Users(String username, Long id, String password, Role role) {
        this.username = username;
        this.id = id;
        this.password = password;
        this.role = role;
    }

    public Users(){
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
