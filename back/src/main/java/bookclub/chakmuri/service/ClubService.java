package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.club.ClubCreateRequestDto;
import bookclub.chakmuri.controller.club.ClubResponseDto;
import bookclub.chakmuri.controller.club.ClubUpdateRequestDto;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ClubService {
    private final ClubRepository clubRepository;
    private final UserRepository userRepository;

    //아직 태그, 선정도서 목록 등 포함안된 것들 있어서 테스트 불가
    @Transactional
    public Club createClub(ClubCreateRequestDto clubCreateRequestDto){
        //userId NotNull 체크 -> 없어도 됨
        //TODO : 이 유저가 만든 독서모임이 있는지 체크(한사람당 한 개)
        //img upload 로직 짜기
        Club club = clubCreateRequestDto.toEntity();
        final Club newClub = convertToClub(club, clubCreateRequestDto.getUserId());
        return clubRepository.save(newClub);
    }

    //파라미터로 받은 userId 값을 사용해 findById로 찾은 user 객체를 이용, 빌더로 entity를 생성하는 역할
    private Club convertToClub(final Club club, final String userId){
        final User user = userRepository.findById(userId)
                .orElseThrow(); // -> TODO : UserNotFoundException 만들어서 넣기
        System.out.println(user.getId());
        return Club.builder()
                .user(user)
                .title(club.getTitle())
                .contents(club.getContents())
                .imgUrl(club.getImgUrl())
                .minPersonnel(club.getMinPersonnel())
                .maxPersonnel(club.getMaxPersonnel())
                .startDate(club.getStartDate())
                .endDate(club.getEndDate())
                .tags(club.getTags())
                .likes(club.getLikes())
                .bookDescription(club.getBookDescription())
                .description(club.getDescription())
                .addressDetail(club.getAddressDetail())
                .addressStreet(club.getAddressStreet())
                .clubStatus(club.getClubStatus())
                .build();
    }

    public List<Club> findAllClubs(){
        return clubRepository.findAll();
    }

    public Club findClubById(Long clubId){
        return clubRepository.findById(clubId)
                .orElseThrow(); // -> TODO : ClubNotFoundException 만들기
    }

    public Club findClubByUserId(String userId){
        User user = userRepository.findById(userId)
                .orElseThrow(); // -> TODO : UserNotFoundException 만들어서 넣기
        return clubRepository.findByUser(user)
                .orElseThrow();
    }

    @Transactional
    public void updateClub(ClubUpdateRequestDto clubUpdateRequestDto, String userId){
        Club requestClub = clubUpdateRequestDto.toEntity();
        final Club club = findClubByUserId(userId);
        club.updateClub(requestClub.getTitle(),
                requestClub.getContents(),
                requestClub.getImgUrl(),
                requestClub.getMinPersonnel(),
                requestClub.getMaxPersonnel(),
                requestClub.getStartDate(),
                requestClub.getEndDate(),
                requestClub.getTags(),
                requestClub.getBookDescription(),
                requestClub.getDescription(),
                requestClub.getAddressDetail(),
                requestClub.getAddressStreet());
        //TODO : updateDate(수정일 업데이트)
    }

    @Transactional
    public void deleteClub(String userId){
        final Club club = findClubByUserId(userId);
        clubRepository.delete(club);
    }
}