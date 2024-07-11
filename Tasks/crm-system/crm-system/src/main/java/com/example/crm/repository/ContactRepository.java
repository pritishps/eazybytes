package com.example.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crm.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
