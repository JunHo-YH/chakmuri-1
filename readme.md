<h1 align="center"> 📚 책무리 프로젝트 (Chakmuri Project) </h1>
<h3 align="center"> 책으로 하나되어 모이다. "책무리" </h3>


![image](https://user-images.githubusercontent.com/71365547/131267031-58c7fe10-5a43-4ed1-905c-73f728a77da3.png)
<br>


<h2 id="table-of-contents">🔖 목차</h2>
<details open="open">
  <summary> 목차</summary>
  <ol>
    <li><a href="#description"> ➤ 웹서비스 설명</a></li>
    <li><a href="#site"> ➤ 사이트</a></li>
    <li><a href="#design"> ➤ 기획 & 설계</a></li>
    <li><a href="#period"> ➤ 개발 기간</a?</li>
    <li><a href="#skills"> ➤ 기술 스택</a></li>
    <li><a href="#fe-be-role"> ➤ FE & BE 역할 분담 </a></li>
  </ol>
</details>

<br>
<!--DESCRIPTION-->
<h2 id="description">👩‍🏫 웹서비스 설명</h2>
  
 **책무리**는 다양한 주제의 독서모임에 참여하고, 내가 필요한 독서모임을 만들어 사람들을 모집할 수 있는 맞춤형 독서모임 플랫폼입니다. 책무리는 독서모임을 만들고 독서모임에 참여할 사람들을 모집하고 싶은 사용자와, 어떤 독서모임들이 있는지 검색하고 독서모임에 참여하고자 하는 사용자, 이 두 역할의 사용자들을 대상으로 합니다.
  
  <br>
  
  > ### 독서모임 운영자
  > **독서모임을 만들고 독서모임에 참여할 사람들을 모집하고 싶은 사용자**의 경우, 독서모임을 등록하거나 수정, 삭제, 참여자 관리를 할 수 있습니다.
  
  <br>
  
  - **독서모임 등록** 
    - 이름, 한 줄 소개, 참여 인원, 진행 기간, 선정도서, 위치 등의 정보를 작성해 등록할 수 있습니다. 
    - 한 사람 당 하나의 독서모임만 등록할 수 있습니다.
  - **독서모임 수정, 삭제**
    - 마이페이지 > 운영중인 독서모임에서 독서모임의 정보를 수정, 삭제할 수 있습니다.
  - **참여자 관리**
    - 참여 신청이 오면 승인 대기자 목록에 참여 신청자가 추가되며, 운영자에게 참여 신청이 있다는 메일이 발송됩니다. 만약 승인 전에 참여 신청자가 참여 신청 취소를 한다면, 승인 대기자 목록에서 삭제되어 표시되지 않습니다.
    - 승인 대기자, 참여자 목록에는 참여신청자의 이메일이 표시됩니다. 이 연락처를 사용해 참여신청자와 연락 후 승인, 거절 여부를 결정합니다.
    - 승인 -> 참여자 목록에 추가되며, 참여 신청자에게 승인 메일이 발송됩니다.
    - 거절 -> 승인 대기자 목록에서 삭제되며, 참여 신청자에게 거절 메일이 발송됩니다.
    - 독서모임 참여자를 내보내고 싶을 때에는 참여자 목록에서 '내보내기'버튼을 클릭해 참여자 목록에서 삭제할 수 있습니다.
    - 내보내기 -> 참여자 목록에서 삭제되며, 참여자에게 내보내기 되었다는 메일이 발송됩니다.
  
  <br>
  
> ### 독서모임 참여자
> **어떤 독서모임들이 있는지 검색하고 독서모임에 참여하고자 하는 사용자**의 경우, 모집중 여부와 태그, 검색어 키워드로 독서모임을 조회할 수 있고, 최신순, 좋아요 순으로 정렬해 조회할 수도 있습니다. 이렇게 조건에 맞게 검색된 독서모임들의 상세 정보를 탐색한 뒤 참여하고자 하는 독서모임이 있으면 참여 신청을 할 수 있습니다. 
  
  <br>
  
  - **독서모임 검색**
    - 모집중 체크박스 : 체크 시 모집중인 독서모임만 페이지에 표시됩니다.
    - 태그(소수정예, 온라인, 오프라인, 온/오프라인, 수도권, 지방, 친목, 독서 외 활동) : 선택 시 해당 태그를 포함하고 있는 독서모임이 표시(or조건 -> 선택한 태그들 중 하나라도 포함한다면 조회됩니다.)
    - 검색어 키워드 : 검색어 키워드를 입력하고 검색 버튼을 누르면, 독서모임 이름으로 독서모임을 조회할 수 있습니다.
    - 정렬 : 최신순, 좋아요 순으로 정렬할 수 있으며, 최신순은 최근에 등록된 독서모임 순, 좋아요 순은 좋아요 개수가 많은 순으로 정렬됩니다.
    - 독서모임 진행 기간의 최종 날짜가 지나면 독서모임 모집은 '마감' 상태가 되며, 독서모임 목록 조회 시 '마감' 라벨이 표시됩니다.
  - **좋아요**
    - 하트 버튼을 눌러 마음에 들거나 관심 있는 독서모임에 '좋아요'를 표시할 수 있습니다.
    - 좋아요를 누르면 마이페이지 > 좋아요한 독서모임 목록에 추가됩니다.
  - **독서모임 상세조회**
    - 독서모임 운영자가 독서모임 등록시 입력한 상세 정보들이 표시됩니다.
      - 이름, 한 줄 소개, 참여 인원, 진행기간, 태그, 선정도서(도서명, 작가명, 출판사, 출판연도, 도서 선정 이유 및 소개글), 상세설명, 위치
  - **댓글**
    - 독서모임의 상세 페이지에 댓글을 남길 수 있습니다.
    - 마이페이지 > 내 댓글에서 내가 쓴 댓글 목록을 조회할 수 있고, 댓글 항목의 본문 보기 버튼을 통해 해당 댓글을 남긴 독서모임의 상세페이지로 이동할 수 있습니다.
  - **참여 신청/취소**
    - 독서모임 상세페이지에서 참여 신청 버튼을 눌러 독서모임 참여를 신청할 수 있고, 마이페이지의 참여신청한 독서모임 목록에 추가됩니다.
    - 참여 신청을 하면 독서모임 운영자의 운영중인 독서모임 > 승인 대기자 탭에 추가됩니다.
    - 독서모임 상세페이지에서 참여 취소 버튼을 누르면 바로 참여 취소가 가능합니다.

<br>

  책무리는 이렇게 독서모임 운영자와 독서모임 참여자, 두 가지 역할로서 이용이 가능합니다. 꼭 한 가지 역할만 해야하는 것은 아닙니다. 사용자는 모두 독서모임의 운영자가 되거나, 참여자가 될 수도 있습니다. '책'이라는 하나의 공통 분모를 가지고, 다양한 사람들과 무리지어 모여 모임을 구성하는 <[책무리](http://chakmuri.club/)>에서 지금, 모여보세요!
  
<br>
<!--SITE-->
<h2 id="site"> 💻 사이트</h2>

* 실서버 링크 : http://chakmuri.club/
<br>

  <h2 id="design"> 👩‍💻 기획 & 설계 </h2>
  <ul>
    <li><a href="https://cobalt-scallion-3d2.notion.site/70949e72bf674a6e857ed795a456ca56">📄 기능 설명서</a></li>
    <li><a href="https://cobalt-scallion-3d2.notion.site/9835c787ad6240c3963783552331b547">⚙ 기능 명세서</a></li>
    <li><a href="https://www.erdcloud.com/d/A3SxWkvRZhPxj5kdg">☁ DB ERDCloud</a></li>
    <li><a href="https://cobalt-scallion-3d2.notion.site/DB-0919e254a9844a0c840cdf1e86fba73d">📒 DB 명세서</a></li>
    <li><a href="https://cobalt-scallion-3d2.notion.site/API-be617ab2fde340b6a79e11b68e6731a9">⌨ API 명세서</a></li>
    <li><a href="https://cobalt-scallion-3d2.notion.site/API-50532f780bb64cba87723d0c9118eb08">💾 API 문서</a></li>
    <li><a href="https://cobalt-scallion-3d2.notion.site/bf21e9b6316f4099b03ff9aa151ffe47">🖥 페이지 기획서</a></li>
  </ul>
<br>
  
<h2 id="period"> 🗓 개발 기간 </h2>

* v1. (2021/07/27 ~ 2021/08/31)
* v2. (2021/09/01 ~ <b>ing)

<br>
<h2 id="skills"> 🗃 기술 스택 </h2>

### FE 
* Javascript
* React
* styled-components
* ant-design

### BE 
* Java -version 11
* SpringBoot
* Spring Data JPA
* Gradle
* MySQL
* AWS - EC2, RDS, S3, Route53
* Google SMTP
<br>  
  
<h2 id="fe-be-role"> 👨‍💻 FE & BE 역할 분담 </h2>

[프로젝트 칸반보드✨](https://github.com/chakmuri/chakmuri/projects)
 ### FE 
* [`Sol-Ahn`](https://github.com/Sol-Ahn)

 ### BE 
* [`Sharpie`](https://github.com/sharpie1330)
* [`JunHo KANG`](https://github.com/JunHo-YH)
