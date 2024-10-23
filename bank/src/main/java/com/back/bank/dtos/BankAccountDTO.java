package com.back.bank.dtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import com.back.bank.entities.AccountOperation;
import com.back.bank.entities.Customer;
import com.back.bank.entities.enums.AccountStatus;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Data
public class BankAccountDTO {
    private String type;
}
