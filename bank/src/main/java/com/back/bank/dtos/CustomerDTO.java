package com.back.bank.dtos;

import lombok.*;

@Data @AllArgsConstructor @NoArgsConstructor @Builder @Setter @Getter
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
}
