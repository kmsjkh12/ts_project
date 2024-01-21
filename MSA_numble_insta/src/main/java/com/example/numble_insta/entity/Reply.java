package com.example.numble_insta.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyid;

    @Column
    private String replycontent;

    @ManyToOne
    @JoinColumn(name ="commentid")
    private Comment commentid;  //댓글 번호
    @ManyToOne
    @JoinColumn(name ="userid")
    private User userid;    //댓글 작성자

}
