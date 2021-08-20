package bookclub.chakmuri.controller.comment;

import bookclub.chakmuri.domain.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class CommentResponseDto {

    private String userImgUrl; // 유저 이미지
    private String userName; // 유저 이름
    private LocalDateTime createdAt; // 생성 날짜
    private LocalDateTime updatedAt; // 생성 날짜
    private String contents; // 댓글

    public CommentResponseDto(Comment comment) {
//        BeanUtils.copyProperties(comment, this);
        this.createdAt = comment.getCreatedAt();
        this.updatedAt = comment.getUpdatedAt();
        this.contents = comment.getContents();
        this.userName = comment.getUser().getName();
        this.userImgUrl = comment.getUser().getImgUrl();
    }

}
