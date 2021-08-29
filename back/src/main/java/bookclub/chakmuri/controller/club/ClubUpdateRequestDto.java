package bookclub.chakmuri.controller.club;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ClubUpdateRequestDto {
    //TODO : clubStatus 관리 -> 만약 만료되었는데 endDate 를 변경한다면?

    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private String startDate;
    private String endDate;
    private String tags;
    private String bookTitle;
    private String author;
    private String publisher;
    private int publishedAt;
    private String bookDescription;
    private String description;
    private String addressDetail;
    private String addressStreet;
}