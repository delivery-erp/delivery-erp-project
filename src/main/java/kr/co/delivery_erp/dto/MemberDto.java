package kr.co.delivery_erp.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="member")
public class MemberDto {
    private String uid;
    private String uname;
    private String upass;
    private String utel;
    private String uemail;
}
