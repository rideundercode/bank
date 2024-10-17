package com.back.bank.repositories;

import com.back.bank.entities.BankAccount;
import com.back.bank.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount, String>{
}