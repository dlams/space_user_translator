let SUPER_PLAN_ICON = "🛠️"

const replacements = {
  "Repositories": "레포지토리",
  "Issue": "이슈",
  "Boards": "보드",
  "Documents": "문서",
  "People": "사용자들",
  "Settings": "설정",
  "More features": "설정 더보기",
  // "Customize": "맞춤형",
  "For me & unresolved": "나에게 오거나 해결되지 않음",
  "Unresolved": "해결되지 않음",
  "Resolved": "해결됨",
  "For me": "나에게 옴",
  
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
};

// let translator = {
//   "Repositories": "레포지토리",
//   "Issues": "이슈",
//   "Issue Boards": "이슈 보드",
//   "Documents": "문서",
//   "People": "구성원",
//   "More features": "설정 더보기",
  
//   "For me & unresolved": "나에게 오거나 해결되지 않음",
//   "Unresolved": "해결되지 않음",
//   "": "",
//   "": "",
//   "": "",
//   "": "",
//   "": "",
//   "": "",
//   "": "",
//   "": "",
//   "": "",

//     "Administration": "관리자",
//     "Basics": "기본",
//     "Member Profiles": "사용자 프로필",
//     "External Users": "외부 사용자",
//     "Teams": "팀",
//     "Locations": "위치",
//     "Equipment": "장비",
//     "Positions": "직위",
//     "Billing & Plans": "청구 및 요금제",
//     "Automation": "자동화",
//     "Dev Environments": "개발 환경",
//     "User Agreement": "사용자 약관",
//     // "Support": "서포트",

//     "Default IDE Versions": "기본 IDE 버전",

//     "Roles": "🔒 역할",
//     "Restricted Projects": "제한된 프로젝트",
//     "Auth Modules": "인증 모듈",
//     "Invitations": "초대",
//     "Throttled Logins": "로그인 제한",

//     // "Webhooks": "웹훅",
//     "External Link Patterns": "외부 링크 패턴",
//     "SSL Keystores": "SSL 키 저장소",
//     "Trusted Certificates": "신뢰할 수 있는 인증서",
//     "Package Repositories": "패키지 저장소",

//     "Custom Fields": "사용자 정의 필드",
//     "Absence Types": "부재 유형",
//     "Custom Emoji": "사용자 정의 이모지",
//     "Public Holidays": "공휴일",

//     "Membership Requests": "회원가입 요청",
//     "Absence History": "부재 내역",
//     "Meetings": "회의",
// }

// manage_trans = {
//   "Basics": "기본",
//   "Logo": "로고",
//   "Name": "이름",
//   "Slogan": "사훈",
//   "Default organization time zone": "조직 시간대",
  
//   "Save": "저장",

//   // "Site Name": "사이트 도메인",  // header
//   "Invite members": "사용자 초대",
//   "New member": "신규 사용자",

//   // Member Profiles, External Users
//   "Status": "상태",
//   "Active": "활성화",
//   "Inactive": "비활성화",
//   "Archived": "보존됨",
//   "All": "전체",
  
//   "Invite external users": "외부 사용자 초대",
//   "New external user": "<superplan> 신규 외부 사용자",

//   "New team": "새로운 팀 생성", 

//   "New location": "새로운 위치 생성",

//   "New position": "새로운 직위 생성",

//   "Subscription Plan": "구독 요금제",
//   "Chat Messages": "채팅 메시지",
//   "Applications": "어플리케이션",
//   "Active User Accounts": "활성화된 사용자 계정",
//   "Storage": "저장 공간",
//   "Data Transfer": "데이터 전송",
//   "Computation Credits": "계산된 크래딧",
//   "in January": "1월 동안",
//   "in February": "2월 동안",
//   "in March": "3월 동안",
//   "in April": "4월 동안",
//   "in May": "5월 동안",
//   "in June": "6월 동안",
//   "in July": "7월 동안",
//   "in August": "8월 동안",
//   "in September": "9월 동안",
//   "in October": "10월 동안",
//   "in November": "11월 동안",
//   "in December": "12월 동안",

//   "Space Automation Cloud": "Space 자동화 클라우드",
//   "Self-Hosted Workers": "자체 호스트 Workers",
//   "Add  worker": "worker 추가",
//   "Tag": "태그",
//   "OS": "운영체제",
//   "Version": "버전",

//   "None": "없음",
//   "Basic": "기초적",
//   "Administrative": "행정적",

//   // Roles Page 추가
  
//   "Settings": "설정",
//   "New auth module": "<superplan> 새로운 인증 모듈",

//   // ...

//   "Add keystore": "키 저장소 추가",

//   "Add certificate": "인증서 추가",

//   "Detached": "감지됨",

//   // "Memberships": "멤버쉽",
//   // "Member profiles": "회원 프로필",
//   // "Absences": "부재",
//   // "Teams": "팀",
//   "New field": "필드 추가",

//   "New absence type": "신규 부재 유형",

//   "Add emoji": "이모지 추가",
//   "Add Emoji": "이모지 추가",
//   "Date added": "추가된 날짜",
//   "Added by": "생성자",

//   "Add calendar": "일정 추가",
//   "Location": "위치",
//   "Details": "상세 정보",

//   "Kind": "종류",
//   "Team": "팀",
//   "Name": "이름",
//   "Position": "직위",
//   "Lead": "리드(WIP)",
//   "Since": "부터",
//   "Till": "까지",
  
//   "Member": "사용자",
//   "Absence type": "부재 유형",
//   // "From": "부터",
//   // "Till": "끝까지",
//   "Title": "제목",
//   "Participants": "참가자들",
//   "Owner": "담당자",
//   "Dates": "날짜",

//   "Webhook": "웹훅",
//   "Project": "프로젝트",
//   "Repository": "레포지토리",
//   "Enabled": "활성화 여부",
//   "": "",
//   "": "",
//   "": "",
//   "": "",


// }

// console.log("")

const targetNode = document.getElementById("app");

const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
  let target = mutationList[mutationList.length - 1].target
  if (target.textContent) {
    const lastLeafNode = Array.from(target.querySelectorAll("*"))
      .filter(node => (node.childElementCount === 0));
    for (let child of lastLeafNode) {
      if (child.textContent) {
        child.textContent = getTranslation(child.textContent)
        addClass(child, "custom_translator")
      }
      else {
        let parent = child.parentElement
        if (!parent.textContent) continue
        if (parent.childElementCount > 1) continue
        if (hasClass(parent, "custom_translator")) continue

        const iconText = parent.querySelector("i")
        const otherText = [...parent.childNodes]
              .filter(node => node.nodeType === Node.TEXT_NODE)
              .map(node => node.textContent)
              .join("");
        
        parent.textContent = ""
        parent.appendChild(iconText)
        const newtext = document.createTextNode(getTranslation(parent.textContent));
        parent.appendChild(newtext)
        addClass(parent, "custom_translator")
        // parent.createTextNode(otherText)
        

        console.log(iconText)
        console.log(otherText)
        // parent.innerHTML = 
        // parent.innerHTML = getTranslation(parent.innerHTML)
      }
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);


function getTranslation(str) {
  replacedStr = str
  for (const [word, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    replacedStr = replacedStr.replace(regex, replacement);
    const regex_s = new RegExp(`\\b${word}s\\b`, 'g');
    replacedStr = replacedStr.replace(regex_s, replacement);
  }
  return replacedStr;
}

function addClass(element, cls) {
  element.classList.add(cls)
} 

function hasClass(element, cls) {
  return element.classList.contains(cls)
}