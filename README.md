# BSM
Baby Shoppingmall  
<br>

<h2>개발 기간</h2>
2022년 4월 22일~


<h2>개발 일정</h2>
<table>

<tr>
<td>
주차 
</td>

<td>
4월 4주차
</td>


</tr>

<tr>

<th>
임상우
</th>

<td>
메인페이지 뼈대 구현
</td>

<td>
</td>

</tr>

<tr>
<th>
박도영
</th>

<td>
cool/warm 페이지 뼈대 구현
</td>

</tr>

<tr>
<th>
황성문
</th>

<td>
공지사항 페이지 뼈대 구현
</td>

</tr>


</table>

<br>
<br>

<h2>✅Git branch 전략</h2>
각자 다른 파일에서 작업할 것이기 때문에<br>
브랜치는 main 하나에서만 작업한다
<br>
<br>

<h2>✅Git commit 전략</h2>
<ul>
<li>파일이름: 변경된 부분</li>
<br>
<li><strong>커밋메시지는 영어로 작성하도록 한다</strong></li>
그 이유는 현업에서도 영어로 하고, 아지즈교수님이 영어를 좋아할 거 같기 때문이다
<br>
<br>
<li>터미널에서 작성법</li>
예를 들어 내가 index.html이라는 파일에서 메뉴바를 추가했으면

```
git commit -m "index.html:add menubar"
```

내가 warm.html이라는 파일의 배치를 변경했으면
```
git commit -m "warm.html:change layout"
```
이래야 어떤거를 변경했는지 한번에 알 수 있으니<br>
지켜주기를 바란다

<li><strong>git add .을 사용하지 말자</strong></li>
파일별로 변경사항을 수시로 커밋을 줄거기때문에<br>
git add .을 하고 commit을 하지말자
파일별로 하나하나 commit해주자



</ul>

<br>
<br>

<h2>✅Git 저장소 이용하는 방법</h2>
<ol>
<li>vscode를 켠다</li>
<li>상단바에 view->Terminal을 클릭한다</li>
<li>파일을 수정하고 저장한다</li>
<li>터미널에 git status를 친다</li>
<li>modified된 파일을 git add한다(git add index.html)</li>
<li>git commit 전략에 따라 commit 해준다(git commit -m "index.html:change text fontsize")</li>
<li>원격 저장소에 push해준다(git push origin main)</li>
<li>오류가 뜨면 git pull origin main을 먼저해주고 다시 git push origin main을 해준다</li>

</ol>

