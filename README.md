# 금새인터랙티브 블로그 지수관리 제안서

현재 공개된 최종 디자인을 개발자에게 전달하기 위한 Next.js 정적 사이트입니다.

## 포함 내용

- 전체 블로그 지수관리 제안서 소스
- 데스크톱·태블릿·모바일 반응형 디자인
- 금새인터랙티브 투명 배경 로고
- 카카오톡·SNS 링크 미리보기 이미지
- 플레이스 제안서 연결 플로팅 위젯
- 모바일 우측 하단 소형 위젯 디자인
- Netlify 무료 배포 설정

## 로컬에서 확인하기

Node.js 22 이상을 설치한 뒤 프로젝트 폴더에서 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 주요 수정 위치

| 수정 항목 | 파일 |
| --- | --- |
| 페이지 문구·가격·구성 | `app/page.tsx` |
| 색상·폰트·반응형·모션 | `app/globals.css` |
| 사이트 제목·카카오 미리보기 | `app/layout.tsx` |
| 금새 로고 | `public/gumse-logo-transparent.png` |
| 카카오 미리보기 이미지 | `public/og-blog-growth.png` |
| 플레이스 연결 위젯 문구·주소 | `app/page.tsx`의 `placeProposalWidget` |
| 위젯 크기·모바일 위치 | `app/globals.css`의 `placeProposalWidget` |

## 배포 전에 도메인 주소 설정

`.env.example`을 복사해 `.env.local` 파일을 만들고 실제 주소를 입력합니다.

```env
NEXT_PUBLIC_SITE_URL=https://blog.example.com
```

Netlify에서는 `Site configuration → Environment variables`에 같은 이름과
값을 등록합니다. 이 값은 카카오톡 링크 미리보기의 대표 URL에도 사용됩니다.

## GitHub에 올리기

1. GitHub에서 `New repository`를 선택합니다.
2. 저장소 이름을 입력하고 빈 저장소를 생성합니다.
3. ZIP의 압축을 풀고 파일 전체를 저장소에 업로드합니다.
4. `Commit changes`를 눌러 저장합니다.

Git 명령을 사용할 경우:

```bash
git init
git add .
git commit -m "Initial blog proposal landing page"
git branch -M main
git remote add origin https://github.com/계정명/저장소명.git
git push -u origin main
```

## Netlify에 무료로 배포하기

1. Netlify에서 `Add new site → Import an existing project`를 선택합니다.
2. GitHub를 연결하고 위 저장소를 선택합니다.
3. 포함된 `netlify.toml`에 따라 아래 설정이 자동 적용됩니다.
   - Build command: `npm run build`
   - Publish directory: `out`
4. 환경변수 `NEXT_PUBLIC_SITE_URL`에 최종 주소를 입력합니다.
5. `Deploy site`를 누릅니다.

## 보유 도메인 연결하기

1. Netlify 사이트에서 `Domain management → Add a domain`을 선택합니다.
2. 사용할 도메인 또는 서브도메인을 입력합니다.
3. Netlify가 안내하는 DNS 레코드를 도메인 구매처에 등록합니다.
4. HTTPS 인증서 발급 후 `NEXT_PUBLIC_SITE_URL`을 실제 주소로 바꿔 다시 배포합니다.

도메인은 구매 비용이 발생할 수 있지만 GitHub와 Netlify 기본 배포는 무료
플랜으로 사용할 수 있습니다. 도메인이 없다면 Netlify의 `*.netlify.app`
주소를 무료로 사용할 수 있습니다.

## 카카오톡 미리보기

미리보기 제목·설명은 `app/layout.tsx`, 대표 이미지는
`public/og-blog-growth.png`에서 변경합니다. 도메인 변경 후 이전 미리보기가
남아 있다면 카카오 공유 디버거에서 새 URL의 캐시를 초기화합니다.

## 정적 빌드

```bash
npm run build
```

완료되면 생성되는 `out` 폴더를 일반 정적 호스팅에 업로드할 수도 있습니다.
