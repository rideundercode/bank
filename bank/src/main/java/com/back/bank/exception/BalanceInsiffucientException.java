package com.back.bank.exception;

public class BalanceInsiffucientException extends Exception {
    public BalanceInsiffucientException(String insufficientBalance) {
        super(insufficientBalance);
    }
}
