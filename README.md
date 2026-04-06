

#  💡 알고리즘 스터디 💡

OPEN TS 알고리즘 스터디 1기 기록

 - [ ] 김지홍
 - [ ] 김도연
 - [ ] 구희범
 - [ ] 이예진
<br><br>

## 📌 Rule
각자 문제를 선정하여 매주 2문제를 풉니다.
매주 수요일 카카오톡 공지방에 댓글로 문제를 등록합니다.
* ❗❗ 문제풀이 마감 : 매주 화요일 23:59 까지
* ❕❕ 리뷰 마감 : 매주 수요일 23:59 까지
<br><br>

## 📌 Convention
###  1️⃣ Code Convention
각 코드 별 목적을 주석으로 작성합니다.
변수와 함수 이름 또한 역할을 알 수 있도록 간단한 주석을 덧붙입니다.

<br>

### 2️⃣ Project Convention

각 멤버별 프로젝트 구조는 다음과 같습니다
**프로젝트이름/week번호/플랫폼_문제번호_레벨_문제이름/...**

    kimjihong/week1/PRG_12912_lv1_두정수사이의합/...

<br>

### 3️⃣ Commit Convention
한번에 모든 파일을 add하지 않고 type별로 분리하여 commit 합니다.

    docs : README.md 등 문서 작성 및 수정
    code : 코드 작성
    fix : 코드 수정
    add : 기존에 푼 문제에 대한 추가
    remove : 코드 및 문서 삭제
    merge : pr(pull request)을 통해 자신의 repo에서 원본 repo로 merge하기
  <br>

적용 예시 ::
1. PRG의 12912번 두 정수 사이의 합 (lv1) 문제를 풀었다면
해당 코드를 하나의 commit으로 분리합니다.  
이 때의 commit message는 다음과 같이 통일합니다
		
		 git commit -m "code :  PRG 12912 lv1 두 정수 사이의 합"

	해당 코드를 수정할 때의 commit message는 다음과 같이 통일합니다.
		
		 git commit -m "fix :  PRG 12912 lv1 두 정수 사이의 합"

2.  코드에 대한 설명을 작성하고
해당 문서를 하나의 commit으로 분리합니다.  
이 때의 commit message는 다음과 같습니다.
		
		 git commit -m "docs : PRG 12912 lv1 두 정수 사이의 합"

3. main README.md 파일을 수정할 때의 commit message는 다음과 같습니다.
		
		 git commit -m "docs : main README update"

5. 파일을 삭제할 경우 commit message는 다음과 같습니다
		
		 git commit -m "remove : 삭제파일"
		
<br>

### 4️⃣ Review Convention
1. Pull Request의 제목은 다음과 같이 통일합니다.
**이름 : 문제플랫폼 문제번호 문제등급 문제제목** 
		
		 kimjihong : PRG 12912 lv1 두 정수 사이의 합
		
2. Pull Request의 comment에는 본인이 작성한 README.md의 내용을 추가합니다. 

3. 문제에 해당하는 유형을 선택하여 PR에 label을 attach하고,   
 자신의 PR의 assignee에 자신을 추가 후 문제풀이 week에 해당하는 Milestones을 선택합니다.

4. 기존에 PR을 작성 후 새로운 문제를 풀었을 경우, 새로운 문제에 대한 commit을 하기 전 다음 과정을 수행합니다.

	- ❓ 코드리뷰가 완료 되었을 경우  
		자신의 PR에서 merge 버튼을 눌러 merge 합니다. 
		
	- ❓ 리뷰 완료 전 새로운 문제를 풀 경우
		1. 자신의 local에서 새로 푼 문제에 대한 branch를 생성합니다.  
		이 때 branch의 이름을 **문제플랫폼-문제번호**과 같이 생성하는 것을 권장합니다.
		
			    PRG-12912
		
		2. 새로운 문제에 대한 code와 README.md에 대한 commit을 추가 후 push합니다.   
		이 때의 commit message는 2️⃣ Commit Convention에서 언급한 규칙에 맞게 설정합니다.
		3. 이 때 반드시 (a)에서 생성한 branch로 push 되는지 확인합니다.
		4. 본인 계정의 fork된 repo에서 Pull Request을 작성할 때,   
		코드가 push된 브랜치(a에서 생성한 kimjihong/prg-12912)에서   
		organization repo의 main 브랜치로 Pull Request를 보냅니다.


<br><br>

## 📌 Solved Problems
### 🚩 week 1
| Type | 문제 | 제목 | 유형 | rank |
| -- |--| -- |--|--|
| PRG | 12912 | [두 정수 사이의 합](https://school.programmers.co.kr/learn/courses/30/lessons/12912) | 연습문제 | lv1 |
| PRG | 468370 | [중요한 단어를 스포 방지](https://school.programmers.co.kr/learn/courses/30/lessons/468370) | 2025 카카오 하반기 1차 | lv1 |

### 🚩 week 2
| Type | 문제 | 제목 | 유형 | rank |
| -- |--| -- |--|--|
| PRG | 340199 | [지폐 접기](https://school.programmers.co.kr/learn/courses/30/lessons/340199) | [PCCE 기출문제] 9번 | lv1 |
| PRG | 87389 | [나머지가 1이 되는 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/87389) | 월간 코드 챌린지 시즌3 | lv1 |
