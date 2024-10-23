package com.back.bank.exception;

public class BankAccountNotFoundException extends Exception {
    public BankAccountNotFoundException(String accountNotFound) {
        super(accountNotFound);
    }
}